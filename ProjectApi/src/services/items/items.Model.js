const Joi = require("joi");
const { objectId } = require("@feathers-plus/validate-joi-mongodb");

const schema = Joi.object({
  _id: objectId(),
  name: Joi.string().min(3).max(50).required(),
  itemClass: objectId().required(),
  description: Joi.string().max(255),
  // quantity: Joi.object().keys({
  //   number: Joi.number(),
  //   unit: Joi.string(),
  // }),
  // price: Joi.object().keys({
  //   amount: Joi.number(),
  //   unit: Joi.string(),
  // }),
});

module.exports.schema = schema;
