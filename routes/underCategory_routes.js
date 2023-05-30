const express = require('express')
const underCategory_router = express.Router()
const UnderCategories = require("../controllers/underCategory_controller")
const jwt_authenticate = require("../middleware/jwt_anthenticate")

underCategory_router.get('/undercategories', UnderCategories.get_underCategory)
underCategory_router.get('/:id', UnderCategories.get_underCategory_id)
underCategory_router.post('/new', jwt_authenticate.authenticateToken, UnderCategories.post_underCategory)
underCategory_router.put('/update/:id', jwt_authenticate.authenticateToken, UnderCategories.update_underCategory)
underCategory_router.delete('/delete/:id', jwt_authenticate.authenticateToken, UnderCategories.delete_underCategory)

module.exports = underCategory_router