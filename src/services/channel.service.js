const httpStatus = require("http-status");
const { Channel } = require("../models");
const ApiError = require("../utils/ApiError");

/**
 * Create a user
 * @param {Object} channelBody
 * @returns {Promise<Channel>}
 */
const createChannel = async (req) => {
  const { name, isPrivate, members } = req.body;
  const created_by = req.user._id;

  try {
    const channel = new Channel({ name, created_by, isPrivate, members });
    return await channel.save();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * Query for Channels
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryChannels = async (filter, options) => {
  const channels = await Channel.paginate(filter, options);
  return channels;
};

/**
 * Get channel by id
 * @param {ObjectId} channelId
 * @returns {Promise<Channel>}
 */
const getChannelById = async (channelId) => {
  return Channel.findById(channelId);
};

/**
 * Update channel by id
 * @param {ObjectId} channelId
 * @param {Object} updateBody
 * @returns {Promise<Channel>}
 */
const updateChannelById = async (channelId, updateBody) => {
  const channel = await getChannelById(channelId);
  if (!channel) {
    throw new ApiError(httpStatus.NOT_FOUND, "Channel not found");
  }
  Object.assign(channel, updateBody);
  await channel.save();
  return channel;
};

/**
 * Delete user by id
 * @param {ObjectId} channelId
 * @returns {Promise<Channel>}
 */
const deleteChannelById = async (channelId) => {
  const channel = await getChannelById(channelId);
  if (!channel) {
    throw new ApiError(httpStatus.NOT_FOUND, "Channel not found");
  }

  await Channel.deleteOne({ _id: channelId });
  return channel;
};

module.exports = {
  createChannel,
  queryChannels,
  getChannelById,
  updateChannelById,
  deleteChannelById,
};
