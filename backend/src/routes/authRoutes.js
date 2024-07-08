const express = require("express");
const { login, register } = require("../controllers/authControllers");

const router = express.Router();

<<<<<<< HEAD
router.post("/register", register);
router.post("/login", login);

module.exports = router;
=======

router.post("/register", register);
router.post("/login", login)

module.exports=router;
>>>>>>> fa72693562cd341495212a4396c13594fa57af03
