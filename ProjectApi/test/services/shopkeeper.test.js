const app = require('../../src/app');

describe('\'Shopkeeper\' service', () => {
  it('registered the service', () => {
    const service = app.service('shopkeeper');
    expect(service).toBeTruthy();
  });
});
