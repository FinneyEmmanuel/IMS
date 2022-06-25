const app = require('../../src/app');

describe('\'shopItems\' service', () => {
  it('registered the service', () => {
    const service = app.service('shop-items');
    expect(service).toBeTruthy();
  });
});
