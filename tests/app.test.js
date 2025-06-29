const request = require('supertest');
const app = require('../src/app');

describe('API Tests', () => {
  it('Debería retornar un mensaje de bienvenida', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toContain('TransChile');
  });

  it('Debería retornar estado "OK" en /health', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toEqual(200);
    expect(res.body.status).toBe('OK');
  });
});