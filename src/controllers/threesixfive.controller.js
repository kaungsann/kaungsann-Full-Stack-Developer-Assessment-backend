const httpStatus = require("http-status");
const pick = require("../utils/pick");
const ApiError = require("../utils/ApiError");
const catchAsync = require("../utils/catchAsync");
const threeSixFiveService = require("../services/threesixfive.service");

const getThreeSixFives = catchAsync(async (req, res) => {
  const filter = pick(req.query, ["account", "bet_amount"]);
  const options = pick(req.query, ["sortBy", "limit", "page", "populate"]);

  const result = await threeSixFiveService.queryThreeSiveFives(filter, options);
  res.send(result);
});

const createThreeSixFive = catchAsync(async (req, res) => {
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

const updateThreeSixFive = catchAsync(async (req, res) => {
  const ibet = await threeSixFiveService.updateThreeSixFiveById(
    req.params.threesixfiveId,
    req.body
  );
  if (!ibet) throw new ApiError(httpStatus.NOT_FOUND, "ibet not found");
  res.send(ibet);
});

const deleteThreeSixFive = catchAsync(async (req, res) => {
  const ibet = await threeSixFiveService.deleteThreeSixFiveById(
    req.params.threesixfiveId
  );
  if (!ibet) throw new ApiError(httpStatus.NOT_FOUND, "ibet not found");

  res.send({ ibet, message: "Ibet Deleted successful" });
});

module.exports = {
  getThreeSixFives,
  createThreeSixFive,
  getThreeSixFive,
  updateThreeSixFive,
  deleteThreeSixFive,
};
