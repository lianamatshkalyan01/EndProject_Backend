const {UnderCategories, Products, Categories} = require('../models')

function get_underCategory(req,res){
    UnderCategories.findAll({include: [
        {model:Products},
        {model:Categories}]})
    .then((undercategory)=>{
        res.json(undercategory)})
        .catch((err)=>{
            res.status(500).json({error:err.message})
        })
}

function get_underCategory_id(req, res){
    const {id}=req.params
    UnderCategories.findOne({include: Products,where:{id}
    })
    .then((undercategory)=>{
        res.json(undercategory)})
        .catch((err)=>{
            res.status(500).json({error:err.message})
        })
}

function post_underCategory(req, res){
    const {name, category_id} = req.body
    UnderCategories.create({name, category_id})
    .then((undercategory)=>{
        res.status(201).json(undercategory)
    }).catch((err)=>{
        res.status(500).json({error:err.message})
    })
}

function update_underCategory(req, res){
    const {id}=req.params
    const {name, category_id} = req.body
    UnderCategories.update({name:name, category_id:category_id}, {where:{id:id}})
    .then((undercategory)=>{
        res.status(201).json({status:"updated"})
    }).catch((err)=>{
        res.status(500).json({error:err.message})
    })
}

function delete_underCategory(req, res){
    const {id}=req.params
    UnderCategories.destroy({where:{id}})
    .then((undercategory)=>{
        res.status(201).json({status:"deleted"})
    }).catch((err)=>{
        res.status(500).json({error:err.message})
    })
}

module.exports={
    get_underCategory, get_underCategory_id, post_underCategory, update_underCategory,delete_underCategory
}