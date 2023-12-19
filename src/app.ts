import cors from 'cors';
import express, { json } from 'express';
import { loadEnv } from './config';

loadEnv();

const app = express();

app.use(cors());
app.use(json());

export default app;
