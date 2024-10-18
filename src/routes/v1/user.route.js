const express = require("express");

const userController = require("../../controllers/user.controller");

const router = express.Router();

router.route("/").get(userController.getUsers);

// router
//   .route("/:userId")
//   .get(
//     auth("getUsers"),
//     validate(userValidation.getUser),
//     userController.getUser
//   )
//   .patch(
//     auth("manageUsers"),
//     validate(userValidation.updateUser),
//     userController.updateUser
//   )
//   .delete(
//     auth("manageUsers"),
//     validate(userValidation.deleteUser),
//     userController.deleteUser
//   );

module.exports = router;
