const {Products, UnderCategories} = require('../models')
const fs = require('fs')

function get_product(req, res){
    Products.findAll({include: UnderCategories})
    .then((product)=>{
                res.json(product)
            }).catch((err)=>{
                    res.status(500).json({error:err.message})
                })
            }


function get_product_id(req, res){
    const {id}=req.params
    Products.findOne({where:{id}})
    .then((product)=>{
        res.json(product)})
        .catch((err)=>{
            res.status(500).json({error:err.message})
        })
}

async function post_product(req, res){
    const{name, price, type, pack_quantity, dosage, composition, side_effect, instruction, storage_condition, undercategories_id} =req.body
    const img = `uploadsProducts/${req.file.filename}`;
    const data = await Products.create({name, price, type, pack_quantity, img, dosage, composition, side_effect, instruction, storage_condition, undercategories_id})
    
    const imgUrl = `${req.protocol}://${req.hostname}:5000/${img}`;
    console.log(imgUrl)
        data.img = imgUrl;
        return res.status(201).json({ message: 'Product created', data });
}


async function update_product(req, res) {
    try {
      const { id } = req.params;
      const { name, price, type, pack_quantity, dosage, composition, side_effect, instruction, storage_condition, undercategories_id } = req.body;
      const img = `uploadsProducts/${req.file.filename}`;

      const oldData = await Products.findOne({where:{id}})
      const filepath = "_" + oldData.img
      fs.unlink(filepath, (err)=>{
        if(err){
            console.log(err)
        }
      })
  
      const data = await Products.update(
        { name, price, type, pack_quantity, img, dosage, composition, side_effect, instruction, storage_condition, undercategories_id },
        { where: { id } }
      );
  
      const imgUrl = `${req.protocol}://${req.hostname}:5000/${img}`;
      console.log(imgUrl);
      
      data.img = imgUrl;
      res.status(201).json({ message: 'Product updated', data });
    } catch (error) {
      console.error('Error updating product:', error);
      res.status(500).json({ message: 'Error updating product' });
    }
  }

function delete_product(req, res){
    const {id}=req.params
    Products.destroy({where:{id}})
    .then((product)=>{
        res.status(201).json({status:"deleted"})
    }).catch((err)=>{
        res.status(500).json({error:err.message})
    })
}

module.exports={
    get_product, get_product_id, post_product, update_product, delete_product
}