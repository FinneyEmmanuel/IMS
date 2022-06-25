const { objectId } = require("@feathers-plus/validate-joi-mongodb");

module.exports = function (app) {
  const mongooseClient = app.get("mongooseClient");
  const { Schema } = mongooseClient;
  const schema = new Schema({
    shopItem: { type: objectId },
    requiredQuantity: {
      amount: {
        type: Number,
      },
      unit: {
        type: String,
      },
    },
    preferredDeliveryDate: {
      type: Date,
      default: Date.now,
    },
    requistionNumber: {
      type: String,
      aphaNumeric: true,
      unique: true,
    },
    status: {
      type: String,
    },
    cancellationReason: {
      type: String,
    },

    price: {
      type: Number,
    },
  });

  return schema;
};
