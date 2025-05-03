import SelectShop from "@/app/_components/SelectShop";
import { Suspense } from "react";
import Loader from "@/app/_components/Loader";
import ShowItems from "@/app/_components/ShowItems";
import { getProducts } from "@/app/_lib/productService";
import { BASE_LIMIIT } from "@/app/_constant/BASE";

interface PageProps {
  searchParams: {
    page: string | undefined;
    name: string | undefined;
    has_selling_stock: "0" | "1" | undefined;
    special_products: "0" | "1" | undefined;
    min_price: string | undefined;
    max_price: string | undefined;
    orderBy: "0" | "1" | "2" | "3" | undefined;
  };
}

async function Page({ searchParams }: PageProps) {
  const {
    page,
    has_selling_stock,
    special_products,
    min_price,
    max_price,
    orderBy,
    name,
  } = searchParams;

  const data = await getProducts({
    page: +(page || 1),
    limit: BASE_LIMIIT,
    has_selling_stock: +(has_selling_stock || 0),
    special_products: !!special_products,
    min_price: Number(min_price || 0),
    max_price: Number(max_price || 3_000_000),
    orderby: orderBy,
    name,
  });

  return (
    <SelectShop count={data.count}>
      <Suspense fallback={<Loader />}>
        <ShowItems isProduct={true} items={data.products} />
      </Suspense>
    </SelectShop>
  );
}

export default Page;
