import prisma from '@/config/database';

async function read() {
  return prisma.category.findMany();
}

export const categoriesRepository = {
  read,
};
