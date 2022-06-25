// Initializes the `Shopkeeper` service on path `/shopkeeper`
const { Shopkeeper } = require('./shopkeeper.class');
const createModel = require('../../models/shopkeeper.model');
const hooks = require('./shopkeeper.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/shopkeeper', new Shopkeeper(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('shopkeeper');

  service.hooks(hooks);
};
