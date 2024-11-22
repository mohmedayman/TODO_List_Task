const request = require('supertest');
const app = require('../Server');

describe('Task API', () => {
  it('should add a new task', async () => {
    const response = await request(app)
      .post('/tasks')
      .send({ name: 'Test Task' });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
    expect(response.body.name).toBe('Test Task');
  });
});
