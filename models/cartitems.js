'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cartitems extends Model {
    static associate(models) {
      Cartitems.belongsTo(models.Carts,{foreignKey:"cart_id"});
      Cartitems.belongsTo(models.Products,{foreignKey:"product_id"});
    }
  }
  Cartitems.init({
    cart_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Cartitems',
  });
  return Cartitems;
};