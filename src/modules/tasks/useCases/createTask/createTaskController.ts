import express from 'express';

import { Task } from '../../../../database/models/taskModel';

const createTaskController = async (
  req: express.Request,
  res: express.Response
) => {
  const task = new Task({
    // owner: 'req.user._id',
    ...req.body,
  });

  try {
    await task.save();
    res.status(201).send(task);
  } catch (error) {
    res.status(400).send(error);
  }
};

export { createTaskController };
