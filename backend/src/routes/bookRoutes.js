const express = require("express");
const { getBookById } = require("../controllers/bookControllers.js");

const router = express.Router();

router.get("/:id", getBookById);

module.exports = router;
