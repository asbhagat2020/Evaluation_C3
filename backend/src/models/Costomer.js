const { DataTypes } = require("sequelize");
<<<<<<< HEAD
const sequelize = require("../configs/db.js");

const Customer = sequelize.define('Customer', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, { timestamps: true });

module.exports = Customer;
=======
const sequelize = require("../configs/db");


const Customer = sequelize.define('Customer', {
    name:{
        type: DataTypes.STRING,
        allowNull:false
    },
    email:{
        type: DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    password:{
        type: DataTypes.STRING,
        allowNull:false
    },
},{timestamps:true});

module.exports = Customer;
>>>>>>> fa72693562cd341495212a4396c13594fa57af03
