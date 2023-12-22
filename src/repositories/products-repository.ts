import prisma from '@/config/database';

async function readById(id: number) {
  return prisma.product.findUnique({ where: { id } });
}

async function readByArrayOfId(ids: number[]) {
  return prisma.product.findMany({ where: { id: { in: ids } } });
}

export const productsRepository = {
  readById,
  readByArrayOfId,
};
