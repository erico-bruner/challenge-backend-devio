import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { categoriesService } from '@/services';

export async function readCategories(req: Request, res: Response) {
  const categories = await categoriesService.read();

  return res.status(httpStatus.OK).send(categories);
}
