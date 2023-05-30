const express = require('express')
const product_router = express.Router()
const Products = require("../controllers/product_controller")
const jwt_authenticate = require("../middleware/jwt_anthenticate")
const upload = require('../middleware/upload')

product_router.get('/products', Products.get_product)
product_router.get('/:id', Products.get_product_id)
product_router.post('/new',jwt_authenticate.authenticateToken,upload.single('img'), Products.post_product)
product_router.put('/update/:id',jwt_authenticate.authenticateToken, upload.single('img'), Products.update_product)
product_router.delete('/delete/:id', jwt_authenticate.authenticateToken, Products.delete_product)

module.exports = product_router