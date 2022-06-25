const mongoose = require("mongoose");
const logger = require("./logger");

module.exports = function (app) {
  mongoose
    .connect(app.get("mongodb"))
    .then(() => {
      console.log(`connected to ${app.get("mongodb")}`);
    })
    .catch((err) => {
      logger.error(err);
      process.exit(1);
    });

  app.set("mongooseClient", mongoose);
};
