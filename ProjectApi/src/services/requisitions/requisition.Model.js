const Joi = require("joi");
const { objectId } = require("@feathers-plus/validate-joi-mongodb");

const schema = Joi.object({
  _id: objectId(),
  shopItemId: objectId(),
  requiredQuantity: Joi.object().keys({
    amount: Joi.number(),
    unit: Joi.string(),
  }),
  requistionNumber: Joi.string().alphanum(),
  status: Joi.string(),
  cancellationReason: Joi.string(),
  price: Joi.number(),
});

module.exports.schema = schema;
