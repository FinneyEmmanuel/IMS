// Initializes the `shopItems` service on path `/shop-items`
const { ShopItems } = require('./shop-items.class');
const createModel = require('../../models/shop-items.model');
const hooks = require('./shop-items.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/shop-items', new ShopItems(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('shop-items');

  service.hooks(hooks);
};
