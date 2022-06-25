const { number } = require("joi");
const getItemClasses = require("./item-classes.Schema");
module.exports = function (app) {
  const mongooseClient = app.get("mongooseClient");
  const { Schema } = mongooseClient;
  const schema = new Schema({
    name: { type: String, minlength: 3, maxlength: 255, required: true },
    itemClass: { type: getItemClasses(app) },
    description: {
      type: String,
      maxlength: 255,
    },
    // quantity: {
    //   number: { type: Number },
    //   unit: { type: String },
    // },

    // price: {
    //   amount: { type: Number },
    //   unit: { type: String },
    // },
  });
  return schema;
};
