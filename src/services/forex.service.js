const httpStatus = require("http-status");
const { Forex } = require("../models");
const ApiError = require("../utils/ApiError");

/**
 * Create a forex
 * @param {Object} forexBody
 * @returns {Promise<User>}
 */
const createForex = async (forexBody) => {
  return Forex.create(forexBody);
};

/**
 * Query for forexs
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryForexs = async (filter, options) => {
  const forexs = await Forex.paginate(filter, options);
  return forexs;
};

/**
 * Get user by id
 * @param {ObjectId} forexId
 * @returns {Promise<Forex>}
 */
const getForexById = async (forexId) => {
  return Forex.findById(forexId);
};

/**
 * Update user by id
 * @param {ObjectId} forexId
 * @param {Object} updateBody
 * @returns {Promise<Forex>}
 */
const updateForexById = async (forexId, updateBody) => {
  const forex = await getForexById(forexId);
  if (!forex) {
    throw new ApiError(httpStatus.NOT_FOUND, "Forex Data not found");
  }
  Object.assign(forex, updateBody);
  await forex.save();
  return forex;
};

/**
 * Delete user by id
 * @param {ObjectId} forexId
 * @returns {Promise<Forex>}
 */
const deleteForexById = async (forexId) => {
  const user = await getForexById(forexId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, "forex data not found");
  }
  await Forex.deleteOne({ _id: forexId });
  return user;
};

module.exports = {
  createForex,
  queryForexs,
  getForexById,
  updateForexById,
  deleteForexById,
};
