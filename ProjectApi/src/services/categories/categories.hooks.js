const { authenticate } = require("@feathersjs/authentication").hooks;
const validate = require("feathers-validate-joi");
const { schema } = require("./categories.Model");

module.exports = {
  before: {
    all: [authenticate("jwt")],
    find: [],
    get: [],
    create: [validate.form(schema, { abortEarly: false })],
    update: [validate.form(schema, { abortEarly: false })],
    patch: [validate.form(schema, { abortEarly: false })],
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
