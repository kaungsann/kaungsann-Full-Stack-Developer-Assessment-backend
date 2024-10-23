const Joi = require("joi");
const { objectId } = require("./custom.validations");

const getIbets = {
  query: Joi.object().keys({
    account: Joi.string(),
    amount: Joi.string(),
    role: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    populate: Joi.string(),
    page: Joi.number().integer(),
  }),
};

const getIbet = {
  params: Joi.object().keys({
    ibetId: Joi.string().custom(objectId),
  }),
};

const updateIbet = {
  params: Joi.object().keys({
    ibetId: Joi.required().custom(objectId), // Ensuring valid MongoDB ObjectId for ibetId
  }),
  body: Joi.object()
    .keys({
      account: Joi.string().trim(),
      cur: Joi.string().trim(),
      contact: Joi.string().trim(),
      amount: Joi.string().trim(),
      valid_amount: Joi.string().trim(),
      bet_amount: Joi.string().trim(),
      members_wl: Joi.string().trim(),
      members_com: Joi.string().trim(),
      members_total: Joi.string().trim(),
      agent_profit_wl: Joi.string().trim(),
      agent_profit_com: Joi.string().trim(),
      agent_profit_total: Joi.string().trim(),
      master_profit_wl: Joi.string().trim(),
      master_profit_com: Joi.string().trim(),
      master_profit_total: Joi.string().trim(),
      senior_profit_wl: Joi.string().trim(),
      senior_profit_com: Joi.string().trim(),
      senior_profit_total: Joi.string().trim(),
      company_wl: Joi.string().trim(),
      company_com: Joi.string().trim(),
      company_total: Joi.string().trim(),
    })
    .min(1), // Ensures that at least one field is provided for the update
};

const deleteIbet = {
  params: Joi.object().keys({
    ibetId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  getIbets,
  getIbet,
  updateIbet,
  deleteIbet,
};
