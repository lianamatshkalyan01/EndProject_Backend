'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Carts extends Model {
    static associate(models) {
      Carts.belongsTo(models.Users,{foreignKey:"user_id"});
      Carts.hasMany(models.Cartitems,{foreignKey:"cart_id"})
    }
  }
  Carts.init({
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Carts',
  });
  return Carts;
};