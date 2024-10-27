const express = require("express");
const channelController = require("../../controllers/channel.controller");
const channelValidation = require("../../validations/channel.validations");
const validate = require("../../middlewares/validate");
const auth = require("../../middlewares/auth");

const router = express.Router();

router
  .route("/")
  .post(
    auth("ManageChannel"),
    validate(channelValidation.createChannel),
    channelController.createChannel
  )
  .get(
    auth("getChannels"),
    validate(channelValidation.getChannels),
    channelController.getChannels
  );

router
  .route("/:channelId")
  .get(
    auth("getChannels"),
    validate(channelValidation.getChannel),
    channelController.getChannel
  )
  .patch(
    auth("ManageChannel"),
    validate(channelValidation.updateChannel),
    channelController.updateChannel
  )
  .delete(
    auth("ManageChannel"),
    validate(channelValidation.deleteChannel),
    channelController.deleteChannel
  );

module.exports = router;
