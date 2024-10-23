const express = require("express");

const userRoute = require("./user.route");
const threeSixFiveRoute = require("./threesixfive.route");
const ibetRoute = require("./ibet.route");
const authRoute = require("./auth.route");

const config = require("../../config/config");

const router = express.Router();

const defaultRoutes = [
  { path: "/auth", route: authRoute },
  { path: "/users", route: userRoute },
  { path: "/threesixfives", route: threeSixFiveRoute },
  { path: "/ibets", route: ibetRoute },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
