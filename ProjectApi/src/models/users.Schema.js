const { objectId } = require("@feathers-plus/validate-joi-mongodb");

module.exports = function (app) {
  const mongooseClient = app.get("mongooseClient");
  const { Schema } = mongooseClient;
  const schema = new mongooseClient.Schema(
    {
      firstName: {
        type: String,
        minlength: 3,
        maxlength: 255,
        required: true,
      },
      lastName: {
        type: String,
        minlength: 3,
        maxlength: 255,
        required: true,
      },
      email: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 255,
      },

      phone: { type: String, required: true, minlength: 7, maxlength: 10 },
      userName: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 255,
        unique: true,
      },
      password: {
        type: String,
        minlength: 8,
        maxlength: 1024,
        required: true,
      },

      lastLoggedIn: {
        type: Date,
        default: Date.now,
      },

      isAdmin: {
        type: Boolean,
        default: false,
      },

      isActive: {
        type: Boolean,
        default: false,
      },
      isShopkeeper: {
        type: Boolean,
        default: false,
      },
      isCustomer: {
        type: Boolean,
        default: false,
      },
      updatedBy: { type: objectId },
      updatedAt: {
        type: Date,
        default: Date.now,
      },
      cartId: {
        type: objectId,
      },
    },
    {
      timestamps: true,
    }
  );
  return schema;
};
