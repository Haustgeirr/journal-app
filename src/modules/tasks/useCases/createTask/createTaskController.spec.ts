const request = require('supertest');

import { setupDatabase } from '../../../../../tests';
import { app } from '../../../../app';
import { Task } from '../../../../database/models/taskModel';
import { createTaskController } from './createTaskController';

beforeAll(setupDatabase);

test('should receive a 201 on task creation', async () => {
  const response = await request(app)
    .post('/api/v1/tasks')
    .send({
      description: 'Test one',
    })
    .expect(201);
});

test('should receive 400 if no description sent', async () => {
  const response = await request(app)
    .post('/api/v1/tasks')
    .send({
      description: '',
    })
    .expect(400);
});

test('should find just created task in db', async () => {
  const response = await request(app).post('/api/v1/tasks').send({
    description: 'Test one',
  });

  const task = await Task.findById(response.body._id);
  expect(task).not.toBeNull();
});
