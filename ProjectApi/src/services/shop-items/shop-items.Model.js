const Joi = require("joi");
const { objectId } = require("@feathers-plus/validate-joi-mongodb");

const schema = Joi.object({
  _id: objectId(),
  shop: objectId().required(),
  item: objectId().required(),
  quantityAddition: Joi.array().items({
    amount: Joi.number().required(),
    unit: Joi.string().required(),
    date: Joi.date(),
    addedBy: objectId().required(),
  }),
  availableQuantity: Joi.object().keys({
    amount: Joi.number().min(0).max(300),
    unit: Joi.string(),
  }),
  price: Joi.number(),
  unit: Joi.string(),
});

module.exports.schema = schema;
