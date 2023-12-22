import { Router } from 'express';
import { createOrder, deleteOrder, finishOrder } from '@/controllers';
import { validateBody, validateParams } from '@/middlewares';
import { deleteOrderSchema, finishOrderSchema, ordersSchema } from '@/schemas';

const ordersRouter = Router();

ordersRouter.post('/', validateBody(ordersSchema), createOrder);
ordersRouter.delete('/:id', validateParams(deleteOrderSchema), deleteOrder);
ordersRouter.post(
  '/finish/:id',
  validateParams(finishOrderSchema),
  finishOrder,
);

export { ordersRouter };
