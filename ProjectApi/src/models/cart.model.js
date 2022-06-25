// cart-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const { objectId } = require("@feathers-plus/validate-joi-mongodb");

module.exports = function (app) {
  const modelName = "cart";
  const mongooseClient = app.get("mongooseClient");
  const { Schema } = mongooseClient;
  const schema = new Schema(
    {
      customerId: { type: objectId },
      items: [
        {
          itemId: {
            type: objectId,
          },
          quantity: {
            number: { type: Number },
            unit: { type: String },
          },
          totalPrice: { type: Number, required: true },
        },
      ],

      date: { type: Date, default: Date.now },
    },
    {
      timestamps: true,
    }
  );

  // This is necessary to avoid model compilation errors in watch mode
  // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
  if (mongooseClient.modelNames().includes(modelName)) {
    mongooseClient.deleteModel(modelName);
  }
  return mongooseClient.model(modelName, schema);
};
