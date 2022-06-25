const Joi = require("joi");
const { objectId } = require("@feathers-plus/validate-joi-mongodb");

const schema = Joi.object({
  _id: objectId(),
  customerId: objectId().required(),
  items: Joi.array().items({
    itemId: objectId().required(),
    quantity: Joi.object().keys({
      number: Joi.number(),
      unit: Joi.string(),
    }),
    totalPrice: Joi.number(),
  }),
});

module.exports.schema = schema;
