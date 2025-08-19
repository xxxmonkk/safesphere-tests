const request = require('supertest');
const { expect } = require('chai');

const api = request('http://localhost:3000');

describe('SafeSphere Backend Endpoints', () => {
  it('GET /ping returns status ok', async () => {
    const res = await api.get('/ping').expect(200);
    expect(res.body).to.have.property('status', 'ok');
  });

  it('GET /health returns status ok and firebase connected', async () => {
    const res = await api.get('/health').expect(200);
    expect(res.body).to.have.property('status', 'ok');
    expect(res.body).to.have.property('firebase', 'connected');
  });
});
