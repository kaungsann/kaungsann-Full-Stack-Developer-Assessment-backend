const httpStatus = require("http-status");
const pick = require("../utils/pick");
const ApiError = require("../utils/ApiError");
const catchAsync = require("../utils/catchAsync");
const { threeSixFiveService } = require("../services");

const getThreeSixFives = catchAsync(async (req, res) => {
  const filter = pick(req.query, ["name", "role"]);
  const options = pick(req.query, ["sortBy", "limit", "page", "populate"]);

  const result = await threeSixFiveService.queryThreeSiveFive(filter, options);
  res.send(result);
});

const createThreeSixFive = catchAsync(async (req, res) => {
  console.log("req body is a", req.body);
  const threesixfive = await threeSixFiveService.createThreeSixFive(req.body);
  res.status(httpStatus.CREATED).send(threesixfive);
});

const getThreeSixFive = catchAsync(async (req, res) => {
  const threesixfive = await threeSixFiveService.getThreeSixFiveById(
    req.params.threesixfiveId
  );
  if (!threesixfive)
    throw new ApiError(httpStatus.NOT_FOUND, "threesixfive not found");

  res.send(threesixfive);
});

module.exports = {
  getThreeSixFives,
  createThreeSixFive,
  getThreeSixFive,
};
