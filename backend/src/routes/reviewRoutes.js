
const express = require("express");
const { getReviewsByBook } = require("../controllers/revieControllers");

const router = express.Router();

router.get("/:bookid", getReviewsByBook);

module.exports=router;