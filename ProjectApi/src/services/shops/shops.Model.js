const Joi = require("joi");
const { objectId } = require("@feathers-plus/validate-joi-mongodb");

const schema = Joi.object({
  _id: objectId(),
  name: Joi.string().min(5).max(255).required(),
  shopId: Joi.string().min(8).max(255).required(),
  addressLine1: Joi.string().min(5).max(255).required(),
  addressLine2: Joi.string().min(5).max(255).required(),
  area: Joi.string().min(3).max(20).required(),
  city: Joi.string().min(3).max(20).required(),
  state: Joi.string().min(3).max(20).required(),
  zipcode: Joi.string().min(5).max(6).required(),
  category: objectId().required(),
  // owner: objectId().required(),
  // contactPerson: Joi.object()
  //   .keys({
  //     name: Joi.string().min(5).max(255),
  //     phone: Joi.string().min(9).max(10),
  //   })
  //   .required(),
});

module.exports.schema = schema;
