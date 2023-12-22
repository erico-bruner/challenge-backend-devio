import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { productsService } from '@/services';

export async function readProducts(req: Request, res: Response) {
  const products = await productsService.read();

  return res.status(httpStatus.OK).send(products);
}
