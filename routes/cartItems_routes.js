const express = require('express')
const cartitems_router = express.Router()
const Cartitems = require("../controllers/cartItems_controller")

cartitems_router.get('/cartitems', Cartitems.get_cartItems)
cartitems_router.get('/:id', Cartitems.get_cartItems_id)
cartitems_router.post('/new', Cartitems.post_cartAndcartitems)
cartitems_router.put('/update/:id',Cartitems.update_cartItems)
cartitems_router.delete('/delete/:id', Cartitems.delete_cartItems)
cartitems_router.put('/increment/:id', Cartitems.incrementCartItem)
cartitems_router.put('/decrement/:id', Cartitems.decrementCartItem)

module.exports = cartitems_router