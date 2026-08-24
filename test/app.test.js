const request = require('supertest');
const app = require('../index');

describe('GET /', () => {
  it('should return status 200 and success message', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.body.status).toEqual('OK');
  });
});
