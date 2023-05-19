const multer = require('multer')
const fs = require('fs')

const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
       if (!fs.existsSync(__dirname + '/../_uploads')) {
            fs.mkdirSync(__dirname + '/../_uploads');
        }
        if (!fs.existsSync(__dirname + '/../_uploads/products')) {
            fs.mkdirSync(__dirname + '/../_uploads/products');
        }
        if (!fs.existsSync(__dirname + '/../_uploads/categories')) {
            fs.mkdirSync(__dirname + '/../_uploads/categories');
        }
        if (req.method === 'POST') {
            cb(null, __dirname + '/../_uploads/products')
        }
        if (req.method === 'POST') {
            cb(null, __dirname + '/../_uploads/categories')
        }
        if (req.method === 'PUT') {
            cb(null, __dirname + '/../_uploads/products')
        }
        if (req.method === 'PUT') {
            cb(null, __dirname + '/../_uploads/categories')
        }
    },
    filename:(req, file, cb)=>{
        cb(null, file.originalname)
    }
})

const upload = multer({
    storage:storage
})

module.exports = upload