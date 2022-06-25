const getCategory = require("./categories.Schema");
const { objectId } = require("@feathers-plus/validate-joi-mongodb");

module.exports = function (app) {
  const mongooseClient = app.get("mongooseClient");
  const { Schema } = mongooseClient;
  const schema = new Schema({
    name: { type: String, minlength: 5, maxlength: 255, required: true },
    shopId: {
      type: String,
      aphanumeric: true,
      minlength: 8,
      maxlength: 255,
      required: true,
      unique: true,
    },
    addressLine1: {
      type: String,
      minlength: 5,
      maxlength: 355,
      required: true,
    },
    addressLine2: {
      type: String,
      minlength: 5,
      maxlength: 355,
      required: true,
    },
    area: {
      type: String,
      minlength: 3,
      maxlength: 20,
    },
    city: {
      type: String,
      minlength: 3,
      maxlength: 20,
    },
    state: {
      type: String,
      minlength: 3,
      maxlength: 20,
    },
    zipcode: {
      type: String,
      minlength: 5,
      maxlength: 6,
    },
    category: {
      type: getCategory(app),
    },
    // owner: {
    //   type: objectId,
    // },
    // contactPerson: {
    //   name: {
    //     type: String,
    //     minlength: 5,
    //     maxlength: 255,
    //     required: true,
    //   },
    //   phone: {
    //     type: String,
    //     minlength: 9,
    //     maxlength: 10,
    //     required: true,
    //   },
    // },
  });
  return schema;
};
