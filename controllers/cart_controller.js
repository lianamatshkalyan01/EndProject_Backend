const {Carts} = require('../models')

function get_cart(req, res){
    Carts.findAll()
    .then((cart)=>{
        res.json(cart)
    }).catch((err)=>{
        res.status(500).json({error:err.message})
    })
}

function get_cart_id(req, res){
    const {id}=req.params
    Carts.findOne({where:{id}})
    .then((cart)=>{
        res.json(cart)
    }).catch((err)=>{
        res.status(500).json({error:err.message})
    })
}

function post_cart(req, res){
    const {user_id}=req.body
    Carts.create({user_id})
    .then((cart)=>{
        res.status(201).json(cart)
    }).catch((err)=>{
        res.status(500).json({error:err.message})
    })
}

function update_cart(req, res){
    const {user_id}=req.body
    const {id} = req.params
    Carts.update({user_id:user_id}, {where: {id:id}})
    .then((cart)=>{
        res.status(201).json(cart)
    }).catch((err)=>{
        res.status(500).json({error:err.message})
    })
}

function delete_cart(req, res){
    const {id}=req.params
    Carts.destroy({where:{id}})
    .then((cart)=>{
        res.status(201).json(cart)
    }).catch((err)=>{
        res.status(500).json({error:err.message})
    })
}


module.exports={
    get_cart, get_cart_id, post_cart, update_cart, delete_cart
}