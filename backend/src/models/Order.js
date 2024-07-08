const { DataTypes } = require("sequelize");
const sequelize = require("../configs/db");
<<<<<<< HEAD
const Customer = require("./Costomer.js");


const Order = sequelize.define('Order', {
    date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    total: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    customerId: {
        type: DataTypes.INTEGER,
        references: {
            model: Customer,
            key: "id",
        },
    },
}, { timestamps: true });

Order.belongsTo(Customer, { foreignKey: 'customerId' });

module.exports = Order;
=======
const Customer = require("./costomer");


const Order = sequelize.define('Order', {
    date:{
        type: DataTypes.DATE,
        allowNull:false
    },
    total:{
        type: DataTypes.DECIMAL,
        allowNull:false
    },
    costomerId:{
        type: DataTypes.INTEGER,
        references:{
            model:Customer,
            key:"id",
        },
    },
},{timestamps:true});

Order.belongsTo(Customer,{foreignKey:'customerId'})

module.exports = Order;
>>>>>>> fa72693562cd341495212a4396c13594fa57af03
