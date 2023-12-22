import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { CreateOrderParams } from '@/protocols';
import { ordersService } from '@/services';

export async function createOrder(req: Request, res: Response) {
  const orderData = req.body as CreateOrderParams;

  const order = await ordersService.create(orderData);

  return res.status(httpStatus.CREATED).send(order);
}
