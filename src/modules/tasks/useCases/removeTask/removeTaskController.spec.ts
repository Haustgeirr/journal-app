const request = require('supertest');

import { setupDatabase } from '../../../../../tests';
import { app } from '../../../../app';
import { Task } from '../../../../database/models/taskModel';

// TODO get rid of this mongoose reference in the test
const taskOne = {
  _id: mongoose.Types.ObjectId(),
  description: 'Task One',
  isCompleted: false,
  // owner: userOneId,
};

beforeAll(setupDatabase);

test('Should receive 200 on task remove', async () => {
  const response = await request(app).delete(`/api/v1/tasks/${taskOne._id}`);
});
