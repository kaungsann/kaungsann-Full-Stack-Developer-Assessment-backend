const httpStatus = require("http-status");
const pick = require("../utils/pick");
const ApiError = require("../utils/ApiError");
const catchAsync = require("../utils/catchAsync");
const { authService, userService, tokenService } = require("../services");
const speakeasy = require("speakeasy");
const qrcode = require("qrcode");
const jwt = require("jsonwebtoken");

const register = catchAsync(async (req, res) => {
  const user = await userService.createUser(req.body);

  res
    .status(httpStatus.CREATED)
    .send({ user, message: "Register Successfully" });
});

const login = catchAsync(async (req, res) => {
  const { email, password } = req.body;
  const user = await authService.loginUserWithEmailAndPassword(email, password);
  console.log("user is a", user);
  const tokens = await tokenService.generateAuthTokens(user);
  res.send({ user, tokens, message: "Login Successfully" });
});

const authStatus = catchAsync(async (req, res) => {
  const user = await authService.authStatus(req.user);
  res.send({ user });
});

const logout = catchAsync(async (req, res) => {
  console.log("req body in have token is a", req.body.refreshToken);
  await authService.logout(req.body.refreshToken);
  res.status(httpStatus.NO_CONTENT).send();
});

const refreshTokens = catchAsync(async (req, res) => {
  const tokens = await authService.refreshAuth(req.body.refreshToken);
  res.send({ ...tokens });
});

const twoFactorSetup = catchAsync(async (req, res) => {
  try {
    console.log("req.user is a", req.user);
    const user = req.user;
    let secret = speakeasy.generateSecret();
    console.log("secret object is a", secret);
    user.twoFactorSecret = secret.base32;
    user.isMfaActive = true;
    await user.save();
    const url = speakeasy.otpauthURL({
      secret: secret.base32,
      label: `${req.user.username}`,
      issuer: "www.win-tracker.com",
      endcoding: base32,
    });
    const qrImageURL = await qrcode.toDataURL(url);
    console.log("qrImageURL is a", qrImageURL);
    res.status(200).send({
      secret: secret.base32,
      qrcode: qrImageURL,
      message: "hello setup",
    });
  } catch (error) {
    throw new ApiError(httpStatus.NO_CONTENT, "error setting in 2FAS");
  }
});

const verifyTwoFactor = catchAsync(async (req, res) => {
  res.status(200).send({ message: "VERIFY TWO FACTOR" });
});

const resetTwoFactor = catchAsync(async (req, res) => {
  res.status(200).send({ message: "REST TWO FACTOR" });
});

module.exports = {
  register,
  login,
  authStatus,
  logout,
  refreshTokens,
  twoFactorSetup,
  verifyTwoFactor,
  resetTwoFactor,
};
