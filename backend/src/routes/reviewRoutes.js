const express = require("express");
const { getReviewsByBook } = require("../controllers/revieControllers.js");


const router = express.Router();

router.get("/:bookId", getReviewsByBook);

module.exports = router;
