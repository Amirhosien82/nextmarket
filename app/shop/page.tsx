import SelectShop from "@/app/_components/SelectShop";
import { Suspense } from "react";
import ShowShop from "@/app/_components/ShowShop";
import Loader from "@/app/_components/Loader";
import { BASE_LIMIIT, BASE_URL } from "@/app/_constant/BASE";

interface PageProps {
  searchParams: {
    page: string | undefined;
    name: string | undefined;
    has_selling_stock: "0" | "1" | undefined;
    special_products: "0" | "1" | undefined;
    min_price: string | undefined;
    max_price: string | undefined;
    orderby: "0" | "1" | "2" | "3" | undefined;
  };
}

async function Page({ searchParams }: PageProps) {
  const {
    page,
    has_selling_stock,
    special_products,
    min_price,
    max_price,
    orderby,
    name,
  } = searchParams;

  const search = new URLSearchParams();

  search.set("page", page || "1");
  search.set("name", name || "");
  search.set("has_selling_stock", has_selling_stock || "0");
  search.set("special_products", special_products || "0");
  search.set("min_price", min_price || "0");
  search.set("max_price", max_price || "3000000");
  search.set("orderby", orderby || "0");
  search.set("limit", BASE_LIMIIT.toString());

  const { products, count } = await fetch(
    `${BASE_URL}/api/products?${search.toString()}`
  ).then((res) => res.json());

  console.log(count, products);

  return (
    <SelectShop>
      <Suspense fallback={<Loader />}>
        <ShowShop products={[]} />
      </Suspense>
    </SelectShop>
  );
}

export default Page;
