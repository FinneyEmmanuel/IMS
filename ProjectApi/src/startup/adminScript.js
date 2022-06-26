const adminUser = require("./users")();
module.exports = function () {
  const app = this;
  emptySoCreate = emptySoCreate.bind(this);

  try {
    app.configure(emptySoCreate("users", adminUser));
  } catch (error) {
    console.log(`in the app`, error);
  }
};

function emptySoCreate(name, data) {
  return async () => {
    try {
      let users = await this.service(name).find({ query: { isAdmin: true } });

      if (users.total === 0) {
        try {
          let createdRecord = await this.service(name).create(data);
          // console.log(createdRecord.adminUser);
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
