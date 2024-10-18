const express = require("express");

const threeSixFiveController = require("../../controllers/threesixfive.controller");

const router = express.Router();

router.route("/").post(threeSixFiveController.createThreeSixFive);

router.route("/").get(threeSixFiveController.getThreeSixFives);

router.route("/:threesixfiveId").get(threeSixFiveController.getThreeSixFive);
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
