const adminUser = require("./users")();
module.exports = function () {
  const app = this;
  ifEmptyCreate = ifEmptyCreate.bind(this);

  try {
    app.configure(ifEmptyCreate("users", adminUser));
  } catch (error) {
    console.log(`in the app`, error);
  }
};

function ifEmptyCreate(name, data) {
  return async () => {
    try {
      let users = await this.service(name).find({ query: { isAdmin: true } });

      if (users.total === 0) {
        try {
          let createdRecord = await this.service(name).create(data);
          console.log(createdRecord.adminUser);
        } catch (error) {
          console.log(error);
        }
      } else {
        console.log("Admin has been created !!");
      }
    } catch (error) {
      console.log(error);
    }
  };
}
