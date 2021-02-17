import express from 'express';

import { taskRouter } from '../modules/tasks/routes';

const v1Router = express.Router();

v1Router.get('/', (req, res) => {
  return res.json({ message: 'API' });
});

v1Router.use('/tasks', taskRouter);

export { v1Router };
