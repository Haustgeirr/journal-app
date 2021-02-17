import express from 'express';
import bodyParser from 'body-parser';

require('./database');
import { v1Router } from './api/v1';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/v1', v1Router);

export { app };
