"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskRouter = void 0;
const express_1 = __importDefault(require("express"));
const createTaskController_1 = require("../useCases/createTask/createTaskController");
const taskRouter = express_1.default.Router();
exports.taskRouter = taskRouter;
taskRouter.post('/', (req, res) => createTaskController_1.createTaskController(req, res));
