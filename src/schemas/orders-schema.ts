import Joi from 'joi';
import { CreateOrderParams } from '@/protocols';

const addonSchema = Joi.object({
  id: Joi.number().required(),
});

const orderItemSchema = Joi.object({
  productId: Joi.number().required(),
  quantity: Joi.number().positive().required(),
  comments: Joi.string().allow(null),
  addons: Joi.array().items(addonSchema),
});

export const ordersSchema = Joi.object<CreateOrderParams>({
  customer_name: Joi.string().required(),
  total_amount: Joi.number().positive().required(),
  amount_paid: Joi.number().positive().required(),
  change_amount: Joi.number().min(0).required(),
  payment_method: Joi.string().required(),
  orderItems: Joi.array().items(orderItemSchema).required(),
});