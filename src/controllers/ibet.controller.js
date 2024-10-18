const httpStatus = require("http-status");
const pick = require("../utils/pick");
const ApiError = require("../utils/ApiError");
const catchAsync = require("../utils/catchAsync");
const { ibetService } = require("../services");

const getIbets = catchAsync(async (req, res) => {
  const filter = pick(req.query, ["name", "role"]);
  const options = pick(req.query, ["sortBy", "limit", "page", "populate"]);

  const result = await ibetService.queryIbet(filter, options);
  res.send(result);
});

const createIbet = catchAsync(async (req, res) => {
  const threesixfive = await ibetService.createIbet(req.body);
  res.status(httpStatus.CREATED).send(threesixfive);
});

const getIbet = catchAsync(async (req, res) => {
  const ibet = await ibetService.getIbeteById(req.params.ibetId);
  if (!ibet) throw new ApiError(httpStatus.NOT_FOUND, "ibet not found");

  res.send(ibet);
});

module.exports = {
  getIbets,
  createIbet,
  getIbet,
};
