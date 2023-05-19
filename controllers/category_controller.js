const {UnderCategories, Categories} = require('../models')

function get_Category(req, res){
    Categories.findAll()
    .then((category)=>{
        res.json(category)}).catch((err)=>{
            res.status(500).json({error:err.message})
        })
}

function get_Category_id(req,res){
    const {id}=req.params
    Categories.findOne({where:{id}
    })
    .then((category)=>{
        res.json(category)}).catch((err)=>{
            res.status(500).json({error:err.message})
        })
}

async function post_Category(req,res){
    const {name} = req.body
    const img = `uploads/categories/${req.file.filename}`;
    const data = await Categories.create({name, img})
    const imgUrl = `${req.protocol}://${req.hostname}:5000/${img}`;
    console.log(imgUrl)
        data.img = imgUrl;
        return res.status(201).json({ message: 'Category created', data });
}

function update_Category(req,res){
    const {id}=req.params
    const {name} = req.body
    const img = `uploads/categories/${req.file.filename}`;
    const data = Categories.update({name:name, img:img}, {where:{id:id}})
    const imgUrl = `${req.protocol}://${req.hostname}:5000/${img}`;
    console.log(imgUrl)
        data.img = imgUrl;
        return res.status(201).json({ message: 'Category updated', data });
}

function delete_Category(req,res){
    const {id}=req.params
    Categories.destroy({where:{id}})
    .then((category)=>{
        res.status(201).json({status:'deleted'})
    }).catch((err)=>{
        res.status(500).json({error:err.message})
    })
}

module.exports={
    get_Category, get_Category_id, post_Category, update_Category, delete_Category
}