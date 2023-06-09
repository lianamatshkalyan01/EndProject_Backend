const {Cartitems, Carts, Products} = require('../models')
 
async function get_cartItems(req, res){
    try{
        const cartItems = await Cartitems.findAll({include:[
            {model: Carts},
            {model: Products}
        ]})
        res.json(cartItems)
    } catch(error){
        res.status(500).json({error:error.message})
    }
}

async function get_cartItems_id(req, res){
    const {id} = req.params
    try{
        const cart = await Carts.findOne({where:{user_id:id}})
        if(cart){
            const cartItems = await Cartitems.findAll({where:{cart_id: cart.id}, include: Products})
        res.json(cartItems )
        }else{
            res.status(404).json({error: 'Cart not found'})
        }
    }catch(error){
        res.status(500).json({error: error.message})
    }
}

async function post_cartAndcartitems(req, res) {
    const { user_id, product_id, quantity } = req.body;
    try {
      let cart = await Carts.findOne({ where: { user_id } });
      if (!cart) {
        cart = await Carts.create({ user_id });
      }
      let cartItem = await Cartitems.findOne({
        where: { cart_id: cart.id, product_id },
      });
      if (!cartItem) {
        cartItem = await Cartitems.create({
          cart_id: cart.id,
          product_id,
          quantity,
        });
      } else {
        cartItem.quantity += quantity;
        await cartItem.save();
      }
      res.json({ message: 'Cart and cart item created successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error creating cart and cart item' });
    }
  }


async function update_cartItems(req, res){
    const {cart_id, product_id, quantity}=req.body
    const {id}=req.params
    try{
        const cartItem = await Cartitems.findByPk(id)
        if(cartItem){
            cartItem.cart_id = cart_id
            cartItem.product_id = product_id
            cartItem.quantity = quantity
            await cartItem.save()
                res.json(cartItem)
         } else{
            res.status(404).json({error:'CartItem not found'})
         }
    }catch(error){
        req.status(500).json({error:error.message})
    }
}

async function delete_cartItems(req, res){
    const {id}=req.params
    try{
        const cartItem = await Cartitems.findOne({where:{product_id:id}})
        if(cartItem ){
            await Cartitems.destroy({where:{product_id:id}})
            res.json({message: "Cart item deleted successfully"})
        } else{
            res.status(404).json({error:"Cart item not found"})
        }
    } catch(error){
        res.status(500).json({error:error.message})
    }
}

async function incrementCartItem(req, res){
    const {id} = req.params
    const {quantity} = req.body
    try{
        const cartItem = await Cartitems.findOne({where:{product_id:id}})
        if(!cartItem){
            return res.status(400).json({error:'CartItem not found'})
        } 
        if(cartItem.quantity > 0){
            await Cartitems.update({quantity:cartItem.quantity + quantity}, {where:{product_id:id}})
            const updatedCartitems = await Cartitems.findOne({where:{product_id:id}})
            res.json({cartItem: updatedCartitems})
        }else{
            res.json({cartItem})
        }
    } catch(error){
        res.status(500).json({error:error.message})
    }
}

async function decrementCartItem(req, res){
    const {id}=req.params
    const {quantity} = req.body
    try{
        const cartItem = await Cartitems.findOne({where:{product_id:id}})
        if(!cartItem){
            return res.status(400).json({error:"CartItem not found"})
        }
        if(cartItem.quantity > 1){
            await Cartitems.update({quantity:cartItem.quantity - quantity}, {where:{product_id:id}})
            const updatedCartitems = await Cartitems.findOne({where:{product_id:id}})
            res.json({cartItem:updatedCartitems})
        } else{
            res.json({cartItem})
        }
    } catch(error){
        res.status(500).json({error:error.message})
    }
}


module.exports={
    get_cartItems, get_cartItems_id,  post_cartAndcartitems, update_cartItems, delete_cartItems, incrementCartItem, decrementCartItem
}