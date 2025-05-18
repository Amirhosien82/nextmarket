import { blogs } from "@/app/_lib/blogs";
import { convertToPersionDate } from "@/app/_lib/convertToPersionDate";
import Image from "next/image";

interface IPageProps {
  params: {
    blogId: string;
  };
}

async function Page({ params }: IPageProps) {
  const { blogId } = params;

  const data = await blogs.getBlogById(+blogId);

  return (
    <div className="flex flex-col items-center gap-5">
      <div className="relative aspect-video w-full md:w-[70%] rounded-md overflow-hidden">
        <Image src={data.image} alt="image" fill />
      </div>
      <h3 className="leading-8 text-justify dark:text-gray-50">
        {data.message}
      </h3>
      <div className="flex justify-between px-3 w-full md:w-80 self-start ">
        <h3 className="text-left text-color-success-200 ">
          {convertToPersionDate(data.created_at)}
        </h3>
        <h3 className="flex gap-1 dark:text-gray-50">
          <span>بازدید:</span>
          <span>{data.view+1}</span>
          <span>نفر</span>
        </h3>
      </div>
    </div>
  );
}

export default Page;
