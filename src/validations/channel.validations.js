const Joi = require("joi");
const { objectId } = require("./custom.validations");

const createChannel = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    created_by: Joi.string().custom(objectId),
    members: Joi.array().items(Joi.string().custom(objectId)),
    isPrivate: Joi.boolean(),
  }),
};

const getChannels = {
  query: Joi.object().keys({
    name: Joi.string(),
    created_by: Joi.string().custom(objectId),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    populate: Joi.string(),
    page: Joi.number().integer(),
  }),
};

const getChannel = {
  params: Joi.object().keys({
    channelId: Joi.string().custom(objectId),
  }),
};

const updateChannel = {
  params: Joi.object().keys({
    channelId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      name: Joi.string().required(),
      created_by: Joi.string().custom(objectId),
      members: Joi.array().items(Joi.string().custom(objectId)),
      isPrivate: Joi.boolean(),
    })
    .min(1),
};

const deleteChannel = {
  params: Joi.object().keys({
    channelId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createChannel,
  getChannels,
  getChannel,
  updateChannel,
  deleteChannel,
};
