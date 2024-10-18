const express = require("express");

const ibetController = require("../../controllers/ibet.controller");

const router = express.Router();

router.route("/").post(ibetController.createIbet);

router.route("/").get(ibetController.getIbets);

router.route("/:ibetId").get(ibetController.getIbet);
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
