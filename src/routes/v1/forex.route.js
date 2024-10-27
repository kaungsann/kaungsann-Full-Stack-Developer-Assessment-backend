const express = require("express");
const { forexController } = require("../../controllers");
const { forexValidation } = require("../../validations");
const validate = require("../../middlewares/validate");
const auth = require("../../middlewares/auth");

const router = express.Router();

router
  .route("/")
  .post(
    auth("getTradeData"),
    validate(forexValidation.createForex),
    forexController.createForex
  )
  .get(
    auth("getTradeData"),
    validate(forexValidation.getForexs),
    forexController.getForexs
  );

router
  .route("/:forexId")
  .get(
    auth("getTradeData"),
    validate(forexValidation.getForex),
    forexController.getForex
  )
  .patch(
    auth("ManageTrade"),
    validate(forexValidation.updateForex),
    forexController.updateForex
  )
  .delete(
    auth("ManageChannel"),
    validate(forexValidation.deleteForex),
    forexController.deleteForex
  );

module.exports = router;
