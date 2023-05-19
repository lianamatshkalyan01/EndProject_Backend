const {Cartitems} = require('../models')

function get_cartItems(req,res){
    Cartitems.findAll()
    .then((cartitems)=>{
        res.status(201).json(cartitems)
    }).catch((err)=>{
        res.status(500).json({error:err.message})
    })
}

function get_cartItems_id(req,res){
    const {id}=req.params
    Cartitems.findOne({where:{id}})
    .then((cartitems)=>{
        res.status(201).json(cartitems)
    }).catch((err)=>{
        res.status(500).json({error:err.message})
    })
}

function post_cartItems(req, res){
    const {cart_id, product_id}=req.body
    Cartitems.create({cart_id, product_id})
    .then((cartitems)=>{
        res.status(201).json(cartitems)
    }).catch((err)=>{
        res.status(500).json({error:err.message})
    })
}

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
    get_cartItems, get_cartItems_id, post_cartItems, update_cartItems, delete_cartItems
}