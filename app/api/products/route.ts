import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
    try {


        //searchParams
        const searchParams = request.nextUrl.searchParams;
        const page = Math.max(1, +(searchParams.get('page') || 1));
        const limit = Math.min(100, Math.max(1, +(searchParams.get('limit') || 12)));
        const sortId = Math.min(3, Math.max(0, +(searchParams.get("orderBy") || 0)));
        const minPrice = Math.max(0, +(searchParams.get("min_price") || 0));
        const maxPrice = Math.max(0, +(searchParams.get("max_price") || 3_000_000));
        const hasSellingStock = +(searchParams.get("has_selling_stock") || 0) >= 1 ? 1 : 0;
        const specialProducts = +(searchParams.get("special_products") || 0) >= 1;

        const [products, count] = await Promise.all([prisma.product.findMany({
            where: {
                AND: [

                    { discount: { gte: maxPrice, lte: minPrice } },
                    { count: { gte: hasSellingStock } },
                    { special: specialProducts ? true : (true || false) },
                    { name: { contains: "dfsd" } }
                ]
            },

            orderBy:
                sortId == 0 ? { date: "asc" } :
                    sortId == 1 ? { sold: "desc" } :
                        sortId == 2 ? { discount: "desc" } : { discount: "asc" },

            //pagination
            take: limit,
            skip: (page - 1) * limit
        })
            ,
        prisma.product.count({
            where: {
                AND: [
                    { discount: { gte: maxPrice, lte: minPrice } },
                    { count: { gte: hasSellingStock } },
                    { special: specialProducts }
                ]
            },
        })
        ])

        return NextResponse.json({ products, count }, {
            headers: {
                'Content-Type': 'application/json',
            }
        });
    } catch (error) {
        console.error('Error fetching products:', error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    } finally {
        await prisma.$disconnect();
    }




}