const express = require("express");
const router = express.Router();
const UsersController = require("../controller/user.contoller");

router.get("/getuser", UsersController.getUser);
router.post("/registeruserdata", UsersController.registerUserData);
router.patch("/updateuserdata/:id", UsersController.updateUserData);
router.delete("/deleteuser/:id", UsersController.deleteUser);
module.exports = router;
