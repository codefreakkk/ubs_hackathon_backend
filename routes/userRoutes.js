const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");

// routes
router.get("/getuser", userController.getUser);
router.get("/getuserbyid/:id", userController.getUserById);
router.post("/adduser", userController.addUser);

module.exports = router;