const { DataTypes } = require('sequelize');
const sequelize = require('../configs/db');
const Customer = require('./Costomer.js');

const Order = sequelize.define('Order', {
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  total: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  customerId: {
    type: DataTypes.INTEGER,
    references: {
      model: Customer,
      key: 'id',
    },
  },
}, { timestamps: true });

Order.belongsTo(Customer, { foreignKey: 'customerId' });

module.exports = Order;
