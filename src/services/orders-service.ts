import { notFoundError, paymentMismatchError } from '@/errors';
import { CreateOrderParams, OrderItem } from '@/protocols';
import {
  addonsRepository,
  ordersRepository,
  productsRepository,
} from '@/repositories';

async function validateProductsExist(orderItems: OrderItem[]) {
  const productIds = [...new Set(orderItems.map(item => item.productId))];

  const totalProductCount =
    await productsRepository.readByArrayOfId(productIds);

  if (productIds.length !== totalProductCount.length) {
    throw notFoundError('Product');
  }
}

async function validateAddonsExist(orderItems: OrderItem[]) {
  const addonIds = [
    ...new Set(orderItems.flatMap(item => item.addons.map(addon => addon.id))),
  ];

  const totalAddonCount = await addonsRepository.readByArrayOfId(addonIds);

  if (addonIds.length !== totalAddonCount.length) {
    throw notFoundError('Addon');
  }
}

async function create(orderData: CreateOrderParams) {
  await validateProductsExist(orderData.orderItems);

  await validateAddonsExist(orderData.orderItems);

  if (
    orderData.total_amount !==
    orderData.amount_paid - orderData.change_amount
  ) {
    throw paymentMismatchError();
  }

  const order = await ordersRepository.create(orderData);

  return order;
}

export const ordersService = {
  create,
};
