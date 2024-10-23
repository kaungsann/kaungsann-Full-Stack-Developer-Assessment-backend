const httpStatus = require("http-status");
const pick = require("../utils/pick");
const ApiError = require("../utils/ApiError");
const catchAsync = require("../utils/catchAsync");
const ibetService = require("../services/ibet.service");

const getIbets = catchAsync(async (req, res) => {
  const filter = pick(req.query, ["account", "amount"]);
  const options = pick(req.query, ["sortBy", "limit", "page", "populate"]);
  const result = await ibetService.queryIbets(filter, options);
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

const updateIbet = catchAsync(async (req, res) => {
  const ibet = await ibetService.updateIbetById(req.params.ibetId, req.body);
  if (!ibet) throw new ApiError(httpStatus.NOT_FOUND, "ibet not found");
  res.send(ibet);
});

const deleteIbet = catchAsync(async (req, res) => {
  const ibet = await ibetService.deleteIbetById(req.params.ibetId);
  if (!ibet) throw new ApiError(httpStatus.NOT_FOUND, "ibet not found");

  res.send(ibet);
});

module.exports = {
  getIbets,
  createIbet,
  getIbet,
  updateIbet,
  deleteIbet,
};
