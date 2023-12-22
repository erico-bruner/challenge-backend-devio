import cors from 'cors';
import express, { Express, json } from 'express';
import 'express-async-errors';
import { connectDb, disconnectDB, loadEnv } from './config';
import { handleApplicationErrors } from './middlewares/error-handling-middleware';
import { categoriesRouter, ordersRouter, productsRouter } from './routers';

loadEnv();

const app = express();

app
  .use(cors())
  .use(json())
  .use('/orders', ordersRouter)
  .use('/products', productsRouter)
  .use('/categories', categoriesRouter)
  .use(handleApplicationErrors);

export function init(): Promise<Express> {
  connectDb();
  return Promise.resolve(app);
}

export async function close(): Promise<void> {
  await disconnectDB();
}

export default app;
