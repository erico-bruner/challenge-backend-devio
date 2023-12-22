import prisma from '@/config/database';

async function read() {
  return prisma.product.findMany({
    include: {
      category: true,
    },
  });
}

async function readById(id: number) {
  return prisma.product.findUnique({ where: { id } });
}

async function readByArrayOfId(ids: number[]) {
  return prisma.product.findMany({ where: { id: { in: ids } } });
}

export const productsRepository = {
  readById,
  readByArrayOfId,
  read,
};
