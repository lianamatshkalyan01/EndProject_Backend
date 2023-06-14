'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Order.belongsTo(models.Carts, {
        foreignKey:'cart_id'
      })
      // define association here
    }
  }
  Order.init({
    cart_id: DataTypes.INTEGER,
    total_amount: DataTypes.INTEGER,
    products: DataTypes.JSONB
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};