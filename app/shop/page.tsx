import SelectShop from "@/app/_components/SelectShop";
import { Suspense } from "react";
import ShowShop from "@/app/_components/ShowShop";
import Loader from "@/app/_components/Loader";

export const relative = 0;

async function Page() {
  return (
    <SelectShop>
      <Suspense fallback={<Loader />}>
        <ShowShop />
      </Suspense>
    </SelectShop>
  );
}

export default Page;
