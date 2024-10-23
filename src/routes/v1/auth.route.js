const express = require("express");
const passport = require("passport");
const { authController } = require("../../controllers");
const ApiError = require("../../utils/ApiError");
const httpStatus = require("http-status");
const validate = require("../../middlewares/validate");
const authValidation = require("../../validations/auth.validations");

const router = express.Router();

//Registration Route
router.post(
  "/register",
  validate(authValidation.register),
  authController.register
);

// //Login Route
router.post("/login", validate(authValidation.login), authController.login);

// //Logout Route
router.post("/logout", validate(authValidation.logout), authController.logout);

//refresh token Route
router.post(
  "/refresh-tokens",
  validate(authValidation.refreshTokens),
  authController.refreshTokens
);

module.exports = router;
