import SelectShop from "@/app/_components/SelectShop";
import { Suspense } from "react";
import ShowShop from "@/app/_components/ShowShop";

async function Page() {
  return (
    <SelectShop>
      <Suspense fallback={<p>loading...</p>}>
        <ShowShop />
      </Suspense>
    </SelectShop>
  );
}

export default Page;
