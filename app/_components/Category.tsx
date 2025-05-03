"use client";
import Image from "next/image";

function Category() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-5">
      <button
        type="button"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className="relative w-full aspect-[16/7]"
      >
        <Image
          fill
          src="/imgs/category-right.jpg"
          alt="Category"
          className=" rounded-xl"
        />
      </button>
      <button
        type="button"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className="relative w-full aspect-[16/7] "
      >
        <Image
          fill
          src="/imgs/category-left.jpg"
          alt="Category"
          className=" rounded-xl"
        />
      </button>
    </div>
  );
}

export default Category;
