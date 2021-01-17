const express = require("express");
const router = express.Router();
const UsersController = require("../controller/rentItems.controller");

router.get("/getitem", UsersController.getItem);
router.post("/additem", UsersController.addItem);
router.patch("/updateitem/:id", UsersController.updateItem);
router.delete("/deletitem/:id", UsersController.deleteItem);
module.exports = router;
