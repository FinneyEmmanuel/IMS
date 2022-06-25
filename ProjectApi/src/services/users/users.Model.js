const Joi = require("joi");
const { objectId } = require("@feathers-plus/validate-joi-mongodb");

const schema = Joi.object({
  _id: objectId(),
  firstName: Joi.string().min(3).max(50).required(),
  lastName: Joi.string().min(3).max(50).required(),
  email: Joi.string().min(1).max(100).required(),
  phone: Joi.string().min(9).max(10),
  userName: Joi.string().min(3).max(50).required(),
  password: Joi.string().min(8).max(255).required(),
  role: Joi.string().required(),
  isAdmin: Joi.boolean().default(),
  isActive: Joi.boolean().default(),
  isShopkeeper: Joi.boolean().default(),
  isCustomer: Joi.boolean().default(),
  updatedBy: objectId(),
  cartId: objectId(),
});

module.exports.schema = schema;
