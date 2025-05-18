import SelectBlog from "@/app/_components/SelectBlog";

import { blogs } from "@/app/_lib/blogs";
import Card from "@/app/_components/Card";

interface IPageProps {
  searchParams: {
    page: string | undefined;
    name: string | undefined;
    the_hottest: "1" | "0" | undefined;
    orderBy: "0" | "1" | undefined;
  };
}

async function Page({ searchParams }: IPageProps) {
  const { name, page, the_hottest, orderBy } = searchParams;

  const items = await blogs.getBlogs({
    name,
    orderby: orderBy || "0",
    page: +(page || 1),
    the_hottest: !!the_hottest,
  });
  return (
    <SelectBlog count={items?.count || 0}>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {items?.blogs.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </SelectBlog>
  );
}

export default Page;
