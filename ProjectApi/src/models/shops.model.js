// shops-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html

const { objectId } = require("@feathers-plus/validate-joi-mongodb");
// require("mongoose-valid8");
//const getCategory = require("./categories.Schema");
// for more of what you can do here.
module.exports = function (app) {
  const modelName = "shops";
  const mongooseClient = app.get("mongooseClient");
  const { Schema } = mongooseClient;
  const schema = require("./shops.Schema")(app);

  // This is necessary to avoid model compilation errors in watch mode
  // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
  if (mongooseClient.modelNames().includes(modelName)) {
    mongooseClient.deleteModel(modelName);
  }
  return mongooseClient.model(modelName, schema);
};
