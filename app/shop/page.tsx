import SelectShop from "@/app/_components/SelectShop";
import { Suspense } from "react";
import ShowShop from "@/app/_components/ShowShop";
import Loader from "@/app/_components/Loader";

interface PageProps {
  searchParams: { page: number | undefined };
}

async function Page({ searchParams }: PageProps) {
  const { page }= searchParams;

  const products = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_page=${page || 1}`
  ).then((res) => res.json());

  return (
    <SelectShop>
      <Suspense fallback={<Loader />}>
        <ShowShop products={products} />
      </Suspense>
    </SelectShop>
  );
}

export default Page;
