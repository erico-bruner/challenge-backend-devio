import { PaymentMethod } from '@prisma/client';

export type ApplicationError = {
  name: string;
  message: string;
};

export type Addon = {
  id: number;
};

export type OrderItem = {
  productId: number;
  quantity: number;
  comments: string | null;
  addons: Addon[];
};

export type CreateOrderParams = {
  customer_name: string;
  total_amount: number;
  amount_paid: number;
  change_amount?: number;
  payment_method: PaymentMethod;
  orderItems: OrderItem[];
};

export type RequestError = {
  status: number;
  data: object | null;
  statusText: string;
  name: string;
  message: string;
};
