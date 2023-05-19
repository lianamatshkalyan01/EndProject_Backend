'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    static associate(models) {
      Products.belongsTo(models.UnderCategories,{foreignKey:"undercategories_id"});
      Products.hasMany(models.Cartitems,{foreignKey:"product_id"})
    }
  }
  Products.init({
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    type: DataTypes.STRING,
    pack_quantity: DataTypes.INTEGER,
    img: DataTypes.STRING,
    dosage: DataTypes.STRING,
    composition: DataTypes.STRING,
    side_effect: DataTypes.STRING,
    instruction: DataTypes.STRING,
    storage_condition: DataTypes.STRING,
    undercategories_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Products',
  });
  return Products;
};