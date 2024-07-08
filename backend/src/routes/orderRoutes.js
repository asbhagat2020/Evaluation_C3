const express = require("express");
const auth = require("../middlewares/auth");
const { getOrdersByCustomer } = require("../controllers/orderControllers");
const role = require("../middlewares/role");

<<<<<<< HEAD
const router = express.Router();

router.get("/:customerId", auth, role(['admin', 'user']), getOrdersByCustomer);

module.exports = router;
=======

const router = express.Router();

router.get("/:customerId", auth,
     role(['admin', 'user']),
     getOrdersByCustomer);
>>>>>>> fa72693562cd341495212a4396c13594fa57af03
