"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTaskController = void 0;
const taskModel_1 = require("../../../../database/models/taskModel");
const createTaskController = async (req, res) => {
    const task = new taskModel_1.Task(Object.assign({ owner: 'req.user._id' }, req.body));
    try {
        // await task.save();
        // res.status(201).send(task);
    }
    catch (error) {
        // res.status(400).send(error);
    }
};
exports.createTaskController = createTaskController;
