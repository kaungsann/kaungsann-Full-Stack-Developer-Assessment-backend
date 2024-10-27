const express = require("express");

const userRoute = require("./user.route");
const authRoute = require("./auth.route");
const channelRoute = require("./channel.route");
const forexRoute = require("./forex.route");

// const config = require("../../config/config");

const router = express.Router();

const defaultRoutes = [
  { path: "/auth", route: authRoute },
  { path: "/users", route: userRoute },
  { path: "/channels", route: channelRoute },
  { path: "/forexs", route: forexRoute },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
