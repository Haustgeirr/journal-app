"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
require('./database');
const v1_1 = require("./api/v1");
const app = express_1.default();
exports.app = app;
app.use('/api/v1', v1_1.v1Router);
