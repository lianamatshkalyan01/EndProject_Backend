const {Cartitems, Carts, Products} = require('../models')

// function get_cartItems(req,res){
//     Cartitems.findAll()
//     .then((cartitems)=>{
//         res.status(201).json(cartitems)
//     }).catch((err)=>{
//         res.status(500).json({error:err.message})
//     })
// }

async function get_cartItems(req, res){
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

// function get_cartItems_id(req,res){
//     const {id}=req.params
//     Cartitems.findOne({where:{id}})
//     .then((cartitems)=>{
//         res.status(201).json(cartitems)
//     }).catch((err)=>{
//         res.status(500).json({error:err.message})
//     })
// }

// function post_cartItems(req, res){
//     const {cart_id, product_id}=req.body
//     Cartitems.create({cart_id, product_id})
//     .then((cartitems)=>{
//         res.status(201).json(cartitems)
//     }).catch((err)=>{
//         res.status(500).json({error:err.message})
//     })
// }

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
      res.status(200).json({ message: 'Cart and cart item created successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error creating cart and cart item' });
    }
  }

// async function createCartAndCartItem(req, res) {
//     const { userId, productId, quantity } = req.body;
//     try {
//       let cart = await Cart.findOne({ where: { userId } });
//       if(!cart){
//         cart= await Cart.create({ userId });
//       }
//       let cartItem = await CartItem.findOne({
//         where: { cartId: cart.id, productId }
//       });
//       if(!cartItem){
//         cartItem = await CartItem.create({
//           cartId: cart.id,
//           productId,
//           quantity
//         });
//       }else{
//         cartItem.quantity += quantity;
//         await cartItem.save();
//       }

function update_cartItems(req, res){
    const {cart_id, product_id}=req.body
    const {id}=req.params
    Cartitems.update({cart_id:cart_id, product_id:product_id}, {where:{id:id}})
    .then((cartitems)=>{
        res.status(201).json(cartitems)
    }).catch((err)=>{
        res.status(500).json({error:err.message})
    })
}

function delete_cartItems(req, res){
    const {id}=req.params
    Cartitems.destroy({wher:{id}})
    .then((cartitems)=>{
        res.status(201).json(cartitems)
    }).catch((err)=>{
        res.status(500).json({error:err.message})
    })
}

module.exports={
    get_cartItems,  post_cartAndcartitems, update_cartItems, delete_cartItems
}