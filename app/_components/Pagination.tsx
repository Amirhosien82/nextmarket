"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import ChevronLeft from "@/app/_components/_icons/ChevronLeft";
import ChevronRight from "@/app/_components/_icons/ChevronRight";

interface Pagination {
  counter: number;
  limit: number;
}

function Pagination({ counter = 40, limit = 12 }: Pagination) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const path = usePathname();

  const page = +(searchParams.get("page") || 1);

  const counterPage = Math.ceil(counter / limit);
  const array = Array.from({ length: counterPage }, (_, i: number) => i + 1);

  let arraySlice: number[];
  if (page !== 1 && page !== counterPage) {
    arraySlice = array.slice(page - 2, page + 1);
  } else {
    arraySlice =
      page === 1
        ? array.slice(page - 1, page + 2)
        : array.slice(page - 3, page);
  }

  function handelPage(number: number) {
    const URL = new URLSearchParams(searchParams.toString());
    URL.set("page", number.toString());
    router.replace(`${path}?${URL.toString()}`);
  }

  return (
    <div className="flex gap-3">
      <button
        type="button"
        disabled={page === 1}
        className="flex justify-center items-center size-9 rounded-full bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-50 hover:bg-color-success-100 hover:text-gray-50 dark:hover:bg-color-success-200"
        onClick={() => {
          handelPage(page - 1);
        }}
      >
        <ChevronRight />
      </button>
      {arraySlice.map((item) => (
        <button
          type="button"
          disabled={page == item}
          className={`size-9 rounded-full  ${
            page === item
              ? "bg-color-success-100 dark:bg-color-success-200 text-gray-50"
              : "bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-50 hover:bg-color-success-100 hover:text-gray-50 dark:hover:bg-color-success-200"
          }`}
          key={item}
          onClick={() => {
            handelPage(item);
          }}
        >
          {item}
        </button>
      ))}

      <button
        type="button"
        disabled={page === counterPage}
        className="flex justify-center items-center size-9 rounded-full bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-50 hover:bg-color-success-100 hover:text-gray-50 dark:hover:bg-color-success-200"
        onClick={() => {
          handelPage(page + 1);
        }}
      >
        <ChevronLeft />
      </button>
    </div>
  );
}

export default Pagination;
