const express = require('express')
const category_router = express.Router()
const Categories = require("../controllers/category_controller")
const jwt_authenticate = require('../middleware/jwt_anthenticate')
const upload = require('../middleware/upload')

category_router.get('/categories', Categories.get_Category)
category_router.get('/:id', Categories.get_Category_id)
category_router.post('/new', upload.single('img'), Categories.post_Category)
category_router.put('/update/:id', jwt_authenticate.authenticateToken, upload.single('img'), Categories.update_Category)
category_router.delete('/delete/:id', jwt_authenticate.authenticateToken, Categories.delete_Category)

module.exports = category_router