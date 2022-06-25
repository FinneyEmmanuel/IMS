// Initializes the `shops` service on path `/shops`
const { Shops } = require('./shops.class');
const createModel = require('../../models/shops.model');
const hooks = require('./shops.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/shops', new Shops(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('shops');

  service.hooks(hooks);
};
