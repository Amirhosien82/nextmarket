"use client";

import { ReactNode, useEffect, useState } from "react";
import ButtonShop from "@/app/_components/ButtonShop";
import FilterIcon from "@/app/_components/_icons/Filter";
import SortIcon from "@/app/_components/_icons/Sort";
import ButtonSort from "@/app/_components/ButtonSort";
import Offcanvas from "@/app/_components/Offcanvas";
import Close from "@/app/_components/_icons/Close";
import Pagination from "@/app/_components/Pagination";
import SilderRange from "@/app/_components/SilderRange";
import Switcher from "@/app/_components/Switcher";
import { useSearch } from "@/app/_lib/customHooks";

interface SelectShopProps {
  children: ReactNode;
  count: number;
}

const sorted = [
  { id: 0, title: "جدید ترین" },
  { id: 1, title: "پر فروش ترین" },
  { id: 2, title: "گران ترین" },
  { id: 3, title: "ارزان ترین" },
];

function SelectShop({ children, count }: SelectShopProps) {
  const { getSearch, setSearchs, clearSearch, removeSearch } = useSearch();
  const hasSellingStock: boolean = getSearch("has_selling_stock") === "1";
  const specialProducts = getSearch("special_products") === "1";
  const minPrice = +(getSearch("min_price") || 0);
  const maxPrice = +(getSearch("max_price") || 3_000_000);
  const sortId = +(getSearch("orderBy") || 0);
  const name = getSearch("name") || "";

  const [price, setPrice] = useState<[number, number]>([minPrice, maxPrice]);
  const [searchVal, setSearchVal] = useState<string>(name);

  useEffect(() => {
    const time = setTimeout(() => {
      if (searchVal) {
        setSearchs([
          { key: "page", value: "1" },
          { key: "name", value: searchVal },
        ]);
      } else {
        removeSearch("name");
      }
    }, 500);

    return () => clearTimeout(time);
  }, [removeSearch, searchVal, setSearchs]);

  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <div className="w-full flex flex-col gap-4 md:grid grid-cols-[1fr,1.5fr] lg:grid-cols-[1fr,2.5fr]">
        <div className="w-full py-3 px-5 bg-white dark:bg-gray-900 md:flex flex-col gap-8 sticky top-28  pb-14 pt-6 self-start hidden">
          <div className="flex justify-between pb-4">
            <h3 className="dark:text-gray-50 text-xl">فیلترها</h3>
            <button
              type="button"
              onClick={() => {
                clearSearch();
                setPrice([0, 3_000_000]);
                setSearchVal("");
              }}
              className="text-color-success-100 dark:text-color-success-200"
            >
              حذف همه
            </button>
          </div>
          <input
            type="text"
            placeholder="جستجو در بین نتایج ..."
            value={searchVal}
            onChange={(e) => {
              setSearchVal(e.target.value);
            }}
            className="h-12 outline-0 bg-gray-100 rounded-md px-8 py-2 placeholder:text-gray-400 w-full  focus:border-gray-300 dark:bg-gray-800 dark:text-gray-50"
          />

          <SilderRange
            price={price}
            setPrice={setPrice}
            onChange={(min: number, max: number) => {
              setSearchs([
                { key: "page", value: "1" },
                { key: "min_price", value: min.toString() },
                { key: "max_price", value: max.toString() },
              ]);
            }}
          />

          <div className="flex justify-between items-center">
            <h3 className="dark:text-gray-50 text-lg">فقط کالاهای موجود</h3>
            <Switcher
              isCheck={hasSellingStock}
              onChange={(check: boolean) => {
                if (check) {
                  setSearchs([
                    { key: "page", value: "1" },
                    { key: "has_selling_stock", value: "1" },
                  ]);
                } else {
                  removeSearch("has_selling_stock");
                }
              }}
            />
          </div>

          <div className="flex justify-between items-center">
            <h3 className="dark:text-gray-50 text-lg">فقط محصولات ویژه</h3>
            <Switcher
              isCheck={specialProducts}
              onChange={(check: boolean) => {
                if (check) {
                  setSearchs([
                    { key: "page", value: "1" },
                    { key: "special_products", value: "1" },
                  ]);
                } else {
                  removeSearch("special_products");
                }
              }}
            />
          </div>
        </div>

        <div className="flex md:hidden gap-4">
          <Offcanvas>
            <Offcanvas.Open>
              <ButtonShop onClick={() => {}}>
                <FilterIcon />
                <span>فیلتر</span>
              </ButtonShop>
            </Offcanvas.Open>
            <Offcanvas.Window right={true}>
              <WindowFilterMobile close={() => {}} />
            </Offcanvas.Window>
          </Offcanvas>
          <Offcanvas>
            <Offcanvas.Open>
              <ButtonShop onClick={() => {}}>
                <SortIcon />
                <span>مرتب سازی</span>
              </ButtonShop>
            </Offcanvas.Open>
            <Offcanvas.Window right={false}>
              <WindowSortMobile close={() => {}} />
            </Offcanvas.Window>
          </Offcanvas>
        </div>
        <div className="w-full flex flex-col gap-4">
          <div className="hidden md:flex w-full justify-start items-center bg-white dark:bg-gray-900 p-3 rounded-md gap-4">
            <h3 className="flex justify-start gap-2 dark:text-gray-50">
              <SortIcon />
              <span>مرتب سازی</span>
            </h3>

            {sorted.map((item) => (
              <ButtonSort
                key={item.id}
                active={+sortId === item.id}
                onClick={() => {
                  setSearchs([
                    { key: "page", value: "1" },
                    { key: "orderBy", value: String(item.id) },
                  ]);
                }}
              >
                {item.title}
              </ButtonSort>
            ))}
          </div>
          {children}
        </div>
      </div>
      <div className="w-full flex justify-center items-center">
        <Pagination counter={count} limit={12} />
      </div>
    </div>
  );
}

function WindowFilterMobile({ close }: { close: () => void }) {
  const { getSearch, setSearchs, clearSearch, removeSearch } = useSearch();
  const hasSellingStock: boolean = getSearch("has_selling_stock") === "1";
  const specialProducts = getSearch("special_products") === "1";
  const minPrice = +(getSearch("min_price") || 0);
  const maxPrice = +(getSearch("max_price") || 3_000_000);
  const name = getSearch("name") || "";

  const [price, setPrice] = useState<[number, number]>([minPrice, maxPrice]);
  const [searchVal, setSearchVal] = useState<string>(name);

  useEffect(() => {
    const time = setTimeout(() => {
      if (searchVal) {
        setSearchs([
          { key: "page", value: "1" },
          { key: "name", value: searchVal },
        ]);
      } else {
        removeSearch("name");
      }
      close();
    }, 500);

    return () => clearTimeout(time);
  }, [close, removeSearch, searchVal, setSearchs]);

  return (
    <div className="w-full h-full py-3 px-5 grid grid-rows-[auto,1fr,auto]">
      <div className="flex justify-between pb-4">
        <button type="button" onClick={close}>
          <Close itemShop={false} />
        </button>
        <h3 className="dark:text-gray-50">فیلترها</h3>
      </div>
      <div className="w-full py-3 px-5 bg-white dark:bg-gray-900 flex flex-col gap-8">
        <div className="flex justify-start">
          <button
            type="button"
            onClick={() => {
              clearSearch();
              setPrice([0, 3_000_000]);
              setSearchVal("");
              close();
            }}
            className="text-color-success-100 dark:text-color-success-200"
          >
            حذف همه
          </button>
        </div>
        <input
          type="text"
          placeholder="جستجو در بین نتایج ..."
          value={searchVal}
          onChange={(e) => {
            setSearchVal(e.target.value);
          }}
          className="h-12 outline-0 bg-gray-100 rounded-md px-8 py-2 placeholder:text-gray-400 w-full  focus:border-gray-300 dark:bg-gray-800 dark:text-gray-50"
        />

        <SilderRange
          price={price}
          setPrice={setPrice}
          onChange={(min: number, max: number) => {
            setSearchs([
              { key: "page", value: "1" },
              { key: "min_price", value: min.toString() },
              { key: "max_price", value: max.toString() },
            ]);
            close();
          }}
        />

        <div className="flex justify-between items-center">
          <h3 className="dark:text-gray-50 text-lg">فقط کالاهای موجود</h3>
          <Switcher
            isCheck={hasSellingStock}
            onChange={(check: boolean) => {
              if (check) {
                setSearchs([
                  { key: "page", value: "1" },
                  { key: "has_selling_stock", value: "1" },
                ]);
              } else {
                removeSearch("has_selling_stock");
              }
              close();
            }}
          />
        </div>

        <div className="flex justify-between items-center">
          <h3 className="dark:text-gray-50 text-lg">فقط محصولات ویژه</h3>
          <Switcher
            isCheck={specialProducts}
            onChange={(check: boolean) => {
              if (check) {
                setSearchs([
                  { key: "special_products", value: "1" },
                  { key: "page", value: "1" },
                ]);
              } else {
                removeSearch("special_products");
              }
              close();
            }}
          />
        </div>
      </div>
    </div>
  );
}

function WindowSortMobile({ close }: { close: () => void }) {
  const { getSearch, setSearch } = useSearch();
  const sortId = +(getSearch("orderBy") || 0);

  return (
    <div className="w-full h-full py-3 px-5 grid grid-rows-[auto,1fr,auto]">
      <div className="flex justify-between pb-4">
        <button type="button" onClick={close}>
          <Close itemShop={false} />
        </button>
        <h3 className="dark:text-gray-50">
          <span>مرتب سازی</span>
        </h3>
      </div>

      <div className="flex flex-col w-full justify-start items-stretch bg-white dark:bg-gray-900 p-3">
        {sorted.map((item) => (
          <ButtonSort
            key={item.id}
            active={+sortId === item.id}
            onClick={() => {
              setSearch("orderBy", String(item.id));
              close();
            }}
          >
            {item.title}
          </ButtonSort>
        ))}
      </div>
    </div>
  );
}

export default SelectShop;
