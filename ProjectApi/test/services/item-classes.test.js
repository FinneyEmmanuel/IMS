const app = require('../../src/app');

describe('\'itemClasses\' service', () => {
  it('registered the service', () => {
    const service = app.service('item-classes');
    expect(service).toBeTruthy();
  });
});
