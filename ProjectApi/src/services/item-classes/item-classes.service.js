// Initializes the `itemClasses` service on path `/item-classes`
const { ItemClasses } = require('./item-classes.class');
const createModel = require('../../models/item-classes.model');
const hooks = require('./item-classes.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/item-classes', new ItemClasses(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('item-classes');

  service.hooks(hooks);
};
