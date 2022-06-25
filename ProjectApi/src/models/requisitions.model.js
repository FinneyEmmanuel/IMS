// requisitions-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html

module.exports = function (app) {
  const modelName = "requisitions";
  const mongooseClient = app.get("mongooseClient");

  const schema = require("./requisitions.Schema")(app);

  // This is necessary to avoid model compilation errors in watch mode
  // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
  if (mongooseClient.modelNames().includes(modelName)) {
    mongooseClient.deleteModel(modelName);
  }
  return mongooseClient.model(modelName, schema);
};
