const express = require('express')
const cart_router = express.Router()
const Carts = require("../controllers/cart_controller")

// cart_router.get("/carts",Carts.get_cart)
// cart_router.get("/:id", Carts.get_cart_id)
// cart_router.post("/new",Carts.post_cart)
cart_router.put('/update/:id', Carts.update_cart)
cart_router.delete('/delete/:id', Carts.delete_cart)

module.exports = cart_router