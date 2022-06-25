const { authenticate } = require("@feathersjs/authentication").hooks;
const validate = require("feathers-validate-joi");
const { schema } = require("./shop-items.Model");
const fetchShop = require("./hooks/fetchShop");
const fetchItem = require("./hooks/fetchItem");

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [
      validate.form(schema, { abortEarly: false }),
      fetchShop(),
      fetchItem(),
    ],
    update: [
      validate.form(schema, { abortEarly: false }),
      fetchShop(),
      fetchItem(),
    ],
    patch: [],
    remove: [],
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },
};
