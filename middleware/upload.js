const multer = require('multer')
const fs = require('fs')

const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        if (!fs.existsSync(__dirname + '/../_uploadsProducts')) {
            fs.mkdirSync(__dirname + '/../_uploadsProducts');
        }
        if (!fs.existsSync(__dirname + '/../_uploadsCategories')) {
            fs.mkdirSync(__dirname + '/../_uploadsCategories');
        }
        if (req.method === 'POST') {
            cb(null, __dirname + '/../_uploadsProducts')
        }
        if (req.method === 'POST') {
            cb(null, __dirname + '/../_uploadsCategories')
        }
        if (req.method === 'PUT') {
            cb(null, __dirname + '/../_uploadsProducts')
        }
        if (req.method === 'PUT') {
            cb(null, __dirname + '/../_uploadsCategories')
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