import prisma from '@/config/database';

async function readByArrayOfId(ids: number[]) {
  return prisma.addon.findMany({ where: { id: { in: ids } } });
}

export const addonsRepository = {
  readByArrayOfId,
};
