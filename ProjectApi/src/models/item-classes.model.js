// itemClasses-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html

//const { objectId } = require("@feathers-plus/validate-joi-mongodb");

// for more of what you can do here.
module.exports = function (app) {
  const modelName = "itemClasses";
  const mongooseClient = app.get("mongooseClient");

  const schema = require("./item-classes.Schema")(app);

  // This is necessary to avoid model compilation errors in watch mode
  // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
  if (mongooseClient.modelNames().includes(modelName)) {
    mongooseClient.deleteModel(modelName);
  }
  return mongooseClient.model(modelName, schema);
};
