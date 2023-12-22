import { Router } from 'express';
import { createOrder } from '@/controllers';
import { validateBody } from '@/middlewares';
import { ordersSchema } from '@/schemas/orders-schema';

const ordersRouter = Router();

ordersRouter.post('/', validateBody(ordersSchema), createOrder);

export { ordersRouter };
