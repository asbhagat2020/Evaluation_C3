const Order = require("../models/Order");
const Customer = require("../models/Customer");

exports.getOrdersByCustomer = async (req, res) => {
    try {
        const orders = await Order.findAll({ where: { customerId: req.params.customerId }, include: [Customer] });
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
