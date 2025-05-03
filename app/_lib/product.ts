import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getProduct(id: string) {
  try {
    const data = await Promise.all([
      prisma.product.findUnique({ where: { id } }),
      prisma.image.findMany({ where: { productId: { equals: id } } }),
      prisma.comment.findMany({
        where: { productId: id },
        include: { User: { select: { fullName: true } } },
      }),
    ]);

    return data;
  } catch (error) {
    console.error("Error in getProducts:", error);
    throw error;
  } 
}

export { getProduct };
