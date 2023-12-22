import prisma from '@/config/database';
import { CreateOrderParams } from '@/protocols';

async function create(order: CreateOrderParams) {
  return prisma.order.create({
    data: {
      customer_name: order.customer_name,
      payment_method: order.payment_method,
      total_amount: order.total_amount,
      amount_paid: order.amount_paid,
      change_amount: order.change_amount,
      completed: false,
      orderItems: {
        create: order.orderItems.map(orderItem => ({
          quantity: orderItem.quantity,
          comments: orderItem.comments,
          product: {
            connect: { id: orderItem.productId },
          },
          addons: {
            connect: orderItem.addons,
          },
        })),
      },
    },
  });
}

export const ordersRepository = {
  create,
};
