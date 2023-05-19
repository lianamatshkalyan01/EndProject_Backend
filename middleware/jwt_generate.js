const jwt = require('jsonwebtoken')
require('dotenv').config()
const SECRET = process.env.SECRET

function generateAccessToken(email, is_verified, id, role, ){
    return jwt.sign({email, is_verified, id, role, is_verified}, SECRET, {expiresIn:'36000s'})
}

module.exports = {
    generateAccessToken
}