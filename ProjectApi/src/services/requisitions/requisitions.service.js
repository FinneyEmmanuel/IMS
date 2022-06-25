// Initializes the `requisitions` service on path `/requisitions`
const { Requisitions } = require('./requisitions.class');
const createModel = require('../../models/requisitions.model');
const hooks = require('./requisitions.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/requisitions', new Requisitions(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('requisitions');

  service.hooks(hooks);
};
