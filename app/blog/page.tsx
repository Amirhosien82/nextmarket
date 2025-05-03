import SelectBlog from "@/app/_components/SelectBlog";
import Loader from "@/app/_components/Loader";
import ShowItems from "@/app/_components/ShowItems";

import { Suspense } from "react";

function Blog() {
  return (
    <SelectBlog>
      <Suspense fallback={<Loader />}>
        <ShowItems isProduct={false} items={[]} />
      </Suspense>
    </SelectBlog>
  );
}

export default Blog;
