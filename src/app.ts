import cors from 'cors';
import express, { Express, json } from 'express';
import 'express-async-errors';
import { connectDb, disconnectDB, loadEnv } from './config';
import { handleApplicationErrors } from './middlewares/error-handling-middleware';
import { ordersRouter } from './routers/orders-router';
import { productsRouter } from './routers/products-router';

loadEnv();

const app = express();

app
  .use(cors())
  .use(json())
  .use('/orders', ordersRouter)
  .use('/products', productsRouter)
  .use(handleApplicationErrors);

export function init(): Promise<Express> {
  connectDb();
  return Promise.resolve(app);
}

export async function close(): Promise<void> {
  await disconnectDB();
}

export default app;
