"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const MONGO_URL = (_a = process.env.MONGO_URL) !== null && _a !== void 0 ? _a : '';
mongoose_1.default
    .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
})
    .then(() => {
    console.log('Connected to db.');
})
    .catch(() => {
    console.log('Connection failed');
});
