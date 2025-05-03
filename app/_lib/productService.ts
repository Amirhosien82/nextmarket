// lib/productService.js
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface getProductsProps {
  page?: number;
  limit?: number;
  orderby?: string | undefined;
  min_price?: number;
  max_price?: number;
  has_selling_stock?: number | undefined;
  special_products?: boolean | undefined;
  name?: string | undefined;
}



export async function getProducts(params: getProductsProps) {
  try {
    const {
      page = 1,
      limit = 12,
      orderby = "0",
      min_price = 0,
      max_price = 3_000_000,
      has_selling_stock = 0,
      special_products = false,
      name = undefined
    } = params;

    const whereConditions = {
      AND: [
        { discount: { gte: min_price, lte: max_price } },
        { count: { gte: has_selling_stock ? 1 : 0 } },
        { special: special_products ? true : undefined },
        { name: { contains: name } }
      ],
    };

    const [products, count] = await Promise.all([
      prisma.product.findMany({
        where: whereConditions,
        orderBy:
          orderby === "0"
            ? { date: "asc" }
            : orderby === "1"
              ? { sold: "desc" }
              : orderby === "2"
                ? { discount: "desc" }
                : { discount: "asc" },
        take: limit,
        skip: (page - 1) * limit,
        include: { images: { select: { url: true } } }
      }),
      prisma.product.count({
        where: whereConditions,
      }),
    ]);

   

    return { products, count };
  } catch (error) {
    console.error("Error in getProducts:", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}