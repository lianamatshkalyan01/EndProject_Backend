const express = require('express')
const app=express()
app.use(express.json())
const cors = require('cors')
app.use(cors())
app.use('/uploads', express.static('./_uploads'));
const category_router = require('./routes/category_routes')
const underCategory_router = require('./routes/underCategory_routes')
const product_router = require('./routes/product_routes')
const cart_router = require('./routes/cart_routes')
const cartitems_router = require('./routes/cartItems_routes')
const users_router = require('./routes/user_routes')

//const nodemailer = require("nodemailer")

app.use('/cat',category_router)
app.use('/under',underCategory_router)
app.use('/prod', product_router)
app.use('/cart',cart_router)
app.use('/items',cartitems_router)
app.use('/user', users_router)



app.listen(5000)