const app = require('../api/app');

describe('authentication', () => {
  it('registered the authentication service', () => {
    expect(app.service('authentication')).toBeTruthy();
  });
  
});
