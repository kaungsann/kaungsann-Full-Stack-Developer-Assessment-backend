const express = require("express");

const threeSixFiveController = require("../../controllers/threesixfive.controller");

const threeSixFiveValidation = require("../../validations/threesixfive.validations");
const validate = require("../../middlewares/validate");
const auth = require("../../middlewares/auth");

const router = express.Router();

router
  .route("/")
  .post(auth("manageThreeSixFive"), threeSixFiveController.createThreeSixFive)
  .get(
    auth("getThreeSixFives"),
    validate(threeSixFiveValidation.getThreeSixFives),
    threeSixFiveController.getThreeSixFives
  );

router
  .route("/:threesixfiveId")
  .get(
    auth("manageThreeSixFive"),
    validate(threeSixFiveValidation.getThreeSixFive),
    threeSixFiveController.getThreeSixFive
  )
  .patch(
    auth("manageThreeSixFive"),
    validate(threeSixFiveValidation.updateThreeSixFive),
    threeSixFiveController.updateThreeSixFive
  )
  .delete(
    auth("manageThreeSixFive"),
    validate(threeSixFiveValidation.deleteThreeSixFive),
    threeSixFiveController.deleteThreeSixFive
  );

module.exports = router;
