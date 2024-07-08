const express = require("express");
const { getBookById } = require("../controllers/bookControllers");

const router = express.Router();

router.get("/:id", getBookById);

<<<<<<< HEAD
module.exports = router;
=======
module.exports=router;
>>>>>>> fa72693562cd341495212a4396c13594fa57af03
