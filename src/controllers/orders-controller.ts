import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { CreateOrderParams } from '@/protocols';
import { ordersService } from '@/services';

export async function createOrder(req: Request, res: Response) {
  const orderData = req.body as CreateOrderParams;

  const order = await ordersService.create(orderData);

  return res.status(httpStatus.CREATED).send(order);
}

export async function finishOrder(req: Request, res: Response) {
  const id = parseInt(req.params.id, 10);

  const order = await ordersService.finishById(id);

  return res.status(httpStatus.OK).send(order);
}

export async function deleteOrder(req: Request, res: Response) {
  const id = parseInt(req.params.id, 10);

  await ordersService.deleteById(id);

  return res.status(httpStatus.OK);
}
