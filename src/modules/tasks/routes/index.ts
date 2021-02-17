import express from 'express';
import { createTaskController } from '../useCases/createTask/createTaskController';

const taskRouter = express.Router();

taskRouter.post('/', (req, res) => createTaskController(req, res));

export { taskRouter };
