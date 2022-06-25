const { objectId } = require("@feathers-plus/validate-joi-mongodb");
// const getShop = require("./shops.Schema");
// const getItem = require("./items.Schema");

module.exports = function (app) {
  const mongooseClient = app.get("mongooseClient");
  const { Schema } = mongooseClient;
  const schema = new Schema({
    shop: { type: objectId },
    item: { type: objectId },
    quantityAddition: [
      {
        amount: {
          type: Number,
          required: true,
        },
        unit: {
          type: String,
          required: true,
        },
        date: {
          type: Date,
          default: Date.now,
        },
        addedBy: {
          type: objectId,
          required: true,
        },
      },
    ],

    availableQuantity: {
      amount: {
        type: Number,
        minlength: 0,
        maxlength: 300,
      },
      unit: {
        type: String,
      },
    },
    price: { type: Number },

    unit: { type: String },
  });
  return schema;
};
