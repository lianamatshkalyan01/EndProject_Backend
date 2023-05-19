const express = require('express')
const users_router = express.Router()
const Users = require("../controllers/user_controller")
const jwt_authenticate = require("../middleware/jwt_anthenticate")

users_router.get('/users', Users.get_users)
users_router.get('/:id', Users.get_users_id)
users_router.post('/new', Users.post_users)
users_router.put('/update/:id', Users.update_users)
users_router.delete('/delete/:id', Users.delete_users)

users_router.post('/register', Users.user_register)
users_router.post('/login', Users.user_login)
users_router.get('/verify/:token', Users.verify)

module.exports = users_router