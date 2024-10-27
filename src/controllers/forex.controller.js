const httpStatus = require("http-status");
const pick = require("../utils/pick");
const ApiError = require("../utils/ApiError");
const catchAsync = require("../utils/catchAsync");
const { forexService } = require("../services");

const createForex = catchAsync(async (req, res) => {
  const channel = await forexService.createForex(req.body);
  res.status(httpStatus.CREATED).send(channel);
});

const getForexs = catchAsync(async (req, res) => {
  const filter = pick(req.query, ["pair", "price"]);
  const options = pick(req.query, ["sortBy", "limit", "page", "populate"]);

  const result = await forexService.queryForexs(filter, options);
  res.send(result);
});

const getForex = catchAsync(async (req, res) => {
  const channel = await forexService.getForexById(req.params.forexId);
  if (!channel) {
    throw new ApiError(httpStatus.NOT_FOUND, "Channel not found");
  }

  res.send(channel);
});

const updateForex = catchAsync(async (req, res) => {
  const channel = await forexService.updateForexById(
    req.params.forexId,
    req.body
  );
  res.send(channel);
});

const deleteForex = catchAsync(async (req, res) => {
  await forexService.deleteForexById(req.params.forexId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createForex,
  getForexs,
  getForex,
  updateForex,
  deleteForex,
};
