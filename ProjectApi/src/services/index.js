const users = require("./users/users.service.js");
const shopkeeper = require("./shopkeeper/shopkeeper.service.js");
const categories = require("./categories/categories.service.js");
const shops = require("./shops/shops.service.js");
const itemClasses = require("./item-classes/item-classes.service.js");
const items = require("./items/items.service.js");
const shopItems = require("./shop-items/shop-items.service.js");
const requisitions = require("./requisitions/requisitions.service.js");
const cart = require("./cart/cart.service.js");
const orders = require("./orders/orders.service.js");
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(shopkeeper);
  app.configure(categories);
  app.configure(shops);
  app.configure(itemClasses);
  app.configure(items);
  app.configure(shopItems);
  app.configure(requisitions);
  try {
    app.configure(cart);
  } catch (e) {
    console.log(e);
  }

  app.configure(orders);
};
