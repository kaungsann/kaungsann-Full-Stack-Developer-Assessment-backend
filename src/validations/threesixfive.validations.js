const Joi = require("joi");
const { objectId } = require("./custom.validations");

const getThreeSixFives = {
  query: Joi.object().keys({
    account: Joi.string(),
    bet_amounts: Joi.string(),
    role: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    populate: Joi.string(),
    page: Joi.number().integer(),
  }),
};

const getThreeSixFive = {
  params: Joi.object().keys({
    threesixfiveId: Joi.string().custom(objectId),
  }),
};

const updateThreeSixFive = {
  params: Joi.object().keys({
    threesixfiveId: Joi.string().custom(objectId).required(), // Ensure it's a valid MongoDB ObjectId
  }),
  body: Joi.object()
    .keys({
      account: Joi.string().trim(),
      cur: Joi.string().trim(),
      contact: Joi.string().trim(),
      bet_amount: Joi.string().trim(),
      member_count: Joi.string().trim(),
      trun_over: Joi.string().trim(),
      stake_count: Joi.string().trim(),
      gross_comm: Joi.string().trim(),
      member_wl: Joi.string().trim(),
      member_com: Joi.string().trim(),
      member_total: Joi.string().trim(),
      agent_turnover: Joi.string().trim(),
      agent_wl: Joi.string().trim(),
      agent_com: Joi.string().trim(),
      agent_total: Joi.string().trim(),
      master_agent_turnover: Joi.string().trim(),
      master_agent_wl: Joi.string().trim(),
      master_agent_com: Joi.string().trim(),
      master_agent_total: Joi.string().trim(),
      super_turnover: Joi.string().trim(),
      super_wl: Joi.string().trim(),
      super_com: Joi.string().trim(),
      super_total: Joi.string().trim(),
      company_turnover: Joi.string().trim(),
      company_wl: Joi.string().trim(),
      company_com: Joi.string().trim(),
      company_total: Joi.string().trim(),
    })
    .min(1), // Ensures at least one field is provided for updating
};

const deleteThreeSixFive = {
  params: Joi.object().keys({
    threesixfiveId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  getThreeSixFives,
  getThreeSixFive,
  updateThreeSixFive,
  deleteThreeSixFive,
};
