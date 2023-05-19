'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UnderCategories extends Model {
    static associate(models) {
      UnderCategories.belongsTo(models.Categories,{foreignKey:"category_id"});
      UnderCategories.hasMany(models.Products,{foreignKey:"undercategories_id"})
    }
  }
  UnderCategories.init({
    name: DataTypes.STRING,
    category_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UnderCategories',
  });
  return UnderCategories;
};