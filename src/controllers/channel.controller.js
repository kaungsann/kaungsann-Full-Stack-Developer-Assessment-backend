const httpStatus = require("http-status");
const pick = require("../utils/pick");
const ApiError = require("../utils/ApiError");
const catchAsync = require("../utils/catchAsync");
const channelService = require("../services/channel.service");

const createChannel = catchAsync(async (req, res) => {
  const channel = await channelService.createChannel(req);
  res.status(httpStatus.CREATED).send(channel);
});

const getChannels = catchAsync(async (req, res) => {
  const filter = pick(req.query, ["name", "created_by"]);
  const options = pick(req.query, ["sortBy", "limit", "page", "populate"]);

  const result = await channelService.queryChannels(filter, options);
  res.send(result);
});

const getChannel = catchAsync(async (req, res) => {
  const channel = await channelService.getChannelById(req.params.channelId);
  if (!channel) {
    throw new ApiError(httpStatus.NOT_FOUND, "Channel not found");
  }

  res.send(channel);
});

const updateChannel = catchAsync(async (req, res) => {
  const channel = await channelService.updateChannelById(
    req.params.channelId,
    req.body
  );
  res.send(channel);
});

const deleteChannel = catchAsync(async (req, res) => {
  await channelService.deleteChannelById(req.params.channelId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createChannel,
  getChannels,
  getChannel,
  updateChannel,
  deleteChannel,
};
