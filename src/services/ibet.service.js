const httpStatus = require("http-status");
const { Ibet } = require("../models");
const ApiError = require("../utils/ApiError");

/**
 * Create a ibet
 * @param {Object} ibetBody
 * @returns {Promise<ThreeSixFive>}
 */
const createIbet = async (ibetBody) => {
  const lines = ibetBody.data
    .trim()
    .split(/\n/)
    .filter((line) => line.trim() !== "");

  console.log("lines", lines);

  // Step 2: Map over each line to create an array of objects based on the schema
  const ibetDataArray = lines.map((line) => {
    const dataArray = line.split(/\s+/); // Split by whitespace (spaces or tabs)
    console.log("data array is", dataArray);
    return {
      account: dataArray[0], // 'mmw88', 'mmw89', 'mmw90'
      cur: dataArray[1], // 'TM520', 'TM521', 'TM522'
      contact: dataArray[2],
      amount: dataArray[3],
      valid_amount: dataArray[4], // Corrected index for valid_amount
      bet_amount: dataArray[5], // Corrected index for bet_amount
      members_wl: dataArray[6], // '35,919,012'
      members_com: dataArray[7], // '2'
      members_total: dataArray[8], // '65'
      agent_profit_wl: dataArray[9], // '332.06'
      agent_profit_com: dataArray[10],
      agent_profit_total: dataArray[11],
      master_profit_wl: dataArray[12],
      master_profit_com: dataArray[13],
      master_profit_total: dataArray[14],
      senior_profit_wl: dataArray[15],
      senior_profit_com: dataArray[16],
      senior_profit_total: dataArray[17],
      company_wl: dataArray[18],
      company_com: dataArray[19],
      company_total: dataArray[20],
    };
  });

  console.log("add line infoDataArray", ibetDataArray);
  return Ibet.insertMany(ibetDataArray);
};

/**
 * Query for ibet
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryIbet = async (filter, options) => {
  const ibet = await Ibet.paginate(filter, options);

  console.log("three siave five data is a", ibet);
  return ibet;
};

/**
 * Get ibet by id
 * @param {ObjectId} id
 * @returns {Promise<Ibet>}
 */
const getIbeteById = async (id) => {
  return Ibet.findById(id);
};

/**
 * Update ibet by id
 * @param {ObjectId} id
 * @param {Object} updateBody
 * @returns {Promise<Ibet>}
 */
const updateIbetById = async (id, updateBody) => {
  const ibet = await getIbeteById(id);
  if (!ibet) {
    throw new ApiError(httpStatus.NOT_FOUND, "ibet not found");
  }

  Object.assign(threesixfive, updateBody);
  await threesixfive.save();
  return threesixfive;
};

/**
 * Delete ibet by id
 * @param {ObjectId} ibetId
 * @returns {Promise<Ibet>}
 */
const deleteIbetById = async (infoId) => {
  const ibet = await getIbeteById(infoId);
  if (!ibet) {
    throw new ApiError(httpStatus.NOT_FOUND, "ibet not found");
  }
  await ibet.remove();
  return ibet;
};

module.exports = {
  createIbet,
  queryIbet,
  getIbeteById,
  updateIbetById,
  deleteIbetById,
};