<<<<<<< HEAD


const Order = require("../models/Order.js");

exports.getOrdersByCustomer = async (req, res) => {
    try {
        const orders = await Order.findAll({ where: { customerId: req.params.customerId }, include: [Customer] });
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
=======
const { where } = require("../models/Book")
const Customer = require("../models/costomer")
const Order = require("../models/Order")


exports.getOrdersByCustomer = async (req, res) =>{
    try {
        const orders = await Order.findAll({where: {customerId: req.params.customerId}, include:[Customer]});
        res.status(200).json(orders)
    } 
    catch (error) {
        res.status(500).json({message:error.message});
    }
}
>>>>>>> fa72693562cd341495212a4396c13594fa57af03
