const express = require("express");

const ibetController = require("../../controllers/ibet.controller");
const ibetValidation = require("../../validations/ibet.validations");
const validate = require("../../middlewares/validate");
const auth = require("../../middlewares/auth");

const router = express.Router();

router
  .route("/")
  .post(auth("manageDatas"), ibetController.createIbet)
  .get(ibetController.getIbets);

router
  .route("/:ibetId")
  .get(
    auth("getIbets"),
    validate(ibetValidation.getIbet),
    ibetController.getIbet
  )
  .patch(
    auth("manageDatas"),
    validate(ibetValidation.updateIbet),
    ibetController.updateIbet
  )
  .delete(
    auth("manageDatas"),
    validate(ibetValidation.deleteIbet),
    ibetController.deleteIbet
  );

module.exports = router;
