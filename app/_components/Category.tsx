import Image from "next/image";
import Link from "next/link";

function Category() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-5">
      <Link href="/" className="relative w-full aspect-[16/7]">
        <Image
          fill
          src="/imgs/category-right.jpg"
          alt="Category"
          className=" rounded-xl"
        />
      </Link>
      <Link href="/" className="relative w-full aspect-[16/7] ">
        <Image
          fill
          src="/imgs/category-left.jpg"
          alt="Category"
          className=" rounded-xl"
        />
      </Link>
    </div>
  );
}

export default Category;
