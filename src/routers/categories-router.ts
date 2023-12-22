import { Router } from 'express';
import { readCategories } from '@/controllers';

const categoriesRouter = Router();

categoriesRouter.get('/', readCategories);

export { categoriesRouter };
