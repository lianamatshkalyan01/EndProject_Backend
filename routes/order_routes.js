const express = require('express')
const order_router = express.Router()
const Order = require("../controllers/order_controller")

order_router.get('/orders', Order.get_order)
order_router.get('/:id', Order.get_order_id)
order_router.post('/new', Order.post_order)

module.exports = order_router



