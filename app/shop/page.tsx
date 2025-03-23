import SelectShop from "@/app/_components/SelectShop";

import ShowShop from "@/app/_components/ShowShop";

export const relative = 0;

async function Page() {
  return (
    <SelectShop>
      <ShowShop />
    </SelectShop>
  );
}

export default Page;
