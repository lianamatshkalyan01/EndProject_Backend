const express = require('express')
const cartitems_router = express.Router()
const Cartitems = require("../controllers/cartItems_controller")

cartitems_router.get('/cartitems',Cartitems.get_cartItems)
cartitems_router.get('/:id', Cartitems.get_cartItems_id)
cartitems_router.post('/new', Cartitems.post_cartItems)
cartitems_router.put('/update',Cartitems.update_cartItems)
cartitems_router.delete('/delete', Cartitems.delete_cartItems)

module.exports = cartitems_router