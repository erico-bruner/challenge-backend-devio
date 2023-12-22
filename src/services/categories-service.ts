import { categoriesRepository } from '@/repositories';

async function read() {
  const categories = await categoriesRepository.read();

  return categories;
}

export const categoriesService = {
  read,
};
