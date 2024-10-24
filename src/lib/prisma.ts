const { PrismaClient } = require('@prisma/client')

declare global {
  // eslint-disable-next-line no-var
  var prisma: ReturnType<typeof PrismaClient> | undefined
}

const globalForPrisma = global as { prisma?: ReturnType<typeof PrismaClient> }

const prismaBase = globalForPrisma.prisma ?? new PrismaClient({
  log: ['query', 'error', 'warn'],
})

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prismaBase

export const db = prismaBase