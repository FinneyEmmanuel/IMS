const { authenticate } = require("@feathersjs/authentication").hooks;
const fetchCategory = require("../shops/hooks/fetchCategory");
const validate = require("feathers-validate-joi");
const { schema } = require("./item-classes.Model");

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [validate.form(schema, { abortEarly: false }),
      fetchCategory(),
    ],
    update: [validate.form(schema, { abortEarly: false }),
      fetchCategory(),
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
