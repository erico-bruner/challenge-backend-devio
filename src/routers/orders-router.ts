import { Router } from 'express';
import { createOrder, finishOrder } from '@/controllers';
import { validateBody, validateParams } from '@/middlewares';
import { finishOrderSchema, ordersSchema } from '@/schemas';

const ordersRouter = Router();

ordersRouter.post('/', validateBody(ordersSchema), createOrder);
ordersRouter.post(
  '/finish/:id',
  validateParams(finishOrderSchema),
  finishOrder,
);

export { ordersRouter };
