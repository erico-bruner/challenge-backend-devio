import { Router } from 'express';
import { readProducts } from '@/controllers';

const productsRouter = Router();

productsRouter.get('/', readProducts);

export { productsRouter };
