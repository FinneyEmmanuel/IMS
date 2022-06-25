const app = require('../../src/app');

describe('\'requisitions\' service', () => {
  it('registered the service', () => {
    const service = app.service('requisitions');
    expect(service).toBeTruthy();
  });
});
