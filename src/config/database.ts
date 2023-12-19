import { PrismaClient } from '@prisma/client';

let prismaInstance: PrismaClient | null = null;

export function connectDb(): PrismaClient {
  if (!prismaInstance) {
    prismaInstance = new PrismaClient();
  }
  return prismaInstance;
}

export async function disconnectDB(): Promise<void> {
  await prismaInstance?.$disconnect();
}

const prisma: PrismaClient = connectDb();
export default prisma;
