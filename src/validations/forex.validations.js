const Joi = require("joi");
const { objectId } = require("./custom.validations");

const createForex = {
  body: Joi.object().keys({
    pair: Joi.string().required(),
    price: Joi.number().required(),
  }),
};

const getForexs = {
  query: Joi.object().keys({
    pair: Joi.string(),
    price: Joi.number(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    populate: Joi.string(),
    page: Joi.number().integer(),
  }),
};

const getForex = {
  params: Joi.object().keys({
    forexId: Joi.string().custom(objectId),
  }),
};

const updateForex = {
  params: Joi.object().keys({
    forexId: Joi.string().custom(objectId).required(),
  }),
  body: Joi.object()
    .keys({
      pair: Joi.string(),
      price: Joi.number(),
    })
    .min(1),
};

const deleteForex = {
  params: Joi.object().keys({
    forexId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  getForexs,
  getForex,
  createForex,
  updateForex,
  deleteForex,
};
