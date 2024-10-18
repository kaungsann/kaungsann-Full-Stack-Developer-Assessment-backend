const httpStatus = require("http-status");
const { ThreeSixFive } = require("../models");
const ApiError = require("../utils/ApiError");

/**
 * Create a threesixfive
 * @param {Object} threesixfiveBody
 * @returns {Promise<ThreeSixFive>}
 */
const createThreeSixFive = async (threesixfiveBody) => {
  const lines = threesixfiveBody.data
    .trim()
    .split(/\n/)
    .filter((line) => line.trim() !== "");

  console.log("lines", lines);
  //[
  //     'mmw88 TM520 MMH 35,919,00 35,919,012 2 65 332.06',
  //     'mmw89 TM521 MMH 35,919,00 35,919,012 2 65 332.06',
  //     'mmw90 TM522 MMH 35,919,00 35,919,012 2 65 332.06'
  //   ]

  // Step 2: Map over each line to create an array of objects based on the schema
  const threeSixFiveDataArray = lines.map((line) => {
    const dataArray = line.split(/\s+/); // Split by whitespace (spaces or tabs)
    console.log("data array is", dataArray);
    return {
      account: dataArray[0], // 'mmw88', 'mmw89', 'mmw90'
      cur: dataArray[1], // 'TM520', 'TM521', 'TM522'
      contact: dataArray[2], // 'MMH'
      bet_amount: dataArray[3], // '35,919,00'
      member_count: dataArray[4], // '35,919,012'
      trun_over: dataArray[5], // '2'
      stake_count: dataArray[6], // '65'
      gross_comm: dataArray[7], // '332.06'
      member_wl: dataArray[8],
      member_com: dataArray[9],
      member_total: dataArray[10],
      agent_turnover: dataArray[11],
      agent_wl: dataArray[12],
      agent_com: dataArray[13],
      agent_total: dataArray[14],
      master_agent_turnover: dataArray[15],
      master_agent_wl: dataArray[16],
      master_agent_com: dataArray[17],
      master_agent_total: dataArray[18],
      super_turnover: dataArray[19],
      super_wl: dataArray[20],
      super_com: dataArray[21],
      super_total: dataArray[22],
      company_turnover: dataArray[23],
      company_wl: dataArray[24],
      company_com: dataArray[25],
      company_total: dataArray[26],
    };
  });

  console.log("add line infoDataArray", threeSixFiveDataArray);
  return ThreeSixFive.insertMany(threeSixFiveDataArray);
};

/**
 * Query for threesixfive
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryThreeSiveFive = async (filter, options) => {
  const threesixfive = await ThreeSixFive.paginate(filter, options);

  console.log("three siave five data is a", threesixfive);
  return threesixfive;
};

/**
 * Get threesixfive by id
 * @param {ObjectId} id
 * @returns {Promise<ThreeSixFive>}
 */
const getThreeSixFiveById = async (id) => {
  return ThreeSixFive.findById(id);
};

/**
 * Update threesixfive by id
 * @param {ObjectId} id
 * @param {Object} updateBody
 * @returns {Promise<ThreeSixFive>}
 */
const updateThreeSixFiveById = async (id, updateBody) => {
  const threesixfive = await getThreeSixFiveById(id);
  if (!threesixfive) {
    throw new ApiError(httpStatus.NOT_FOUND, "threesixfive not found");
  }

  Object.assign(threesixfive, updateBody);
  await threesixfive.save();
  return threesixfive;
};

/**
 * Delete info by id
 * @param {ObjectId} threeSixFiveId
 * @returns {Promise<ThreeSixFive>}
 */
const deleteThreeSixFiveById = async (infoId) => {
  const threesixfive = await getThreeSixFiveById(infoId);
  if (!threesixfive) {
    throw new ApiError(httpStatus.NOT_FOUND, "threesixfive not found");
  }
  await threesixfive.remove();
  return threesixfive;
};

module.exports = {
  createThreeSixFive,
  queryThreeSiveFive,
  getThreeSixFiveById,
  updateThreeSixFiveById,
  deleteThreeSixFiveById,
};
