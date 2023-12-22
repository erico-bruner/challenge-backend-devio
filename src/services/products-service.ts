import { productsRepository } from '@/repositories';

async function read() {
  const products = await productsRepository.read();

  return products;
}

export const productsService = {
  read,
};
