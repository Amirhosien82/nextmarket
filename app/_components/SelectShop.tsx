"use client";

import { ReactNode } from "react";
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
}

function SelectShop({ children }: SelectShopProps) {
  const { getSearch, setSearch, setSearchs, clearSearch } = useSearch();
  const hasSellingStock: boolean = getSearch("has_selling_stock") === "1";
  const specialProducts = getSearch("special-products") === "1";
  const minPrice = +(getSearch("min-price") || 0);
  const maxPrice = +(getSearch("max-price") || 3_000_000);

  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <div className="w-full flex flex-col gap-4 md:grid grid-cols-[1fr,1.5fr] lg:grid-cols-[1fr,2.5fr]">
        <div className="w-full py-3 px-5 bg-white dark:bg-gray-900 md:flex flex-col gap-8 sticky top-28 h-[500px] hidden">
          <div className="flex justify-between pb-4">
            <h3 className="dark:text-gray-50 text-xl">فیلترها</h3>
            <button
              type="button"
              onClick={() => {
                clearSearch();
              }}
              className="text-color-success-100 dark:text-color-success-200"
            >
              حذف همه
            </button>
          </div>
          <input
            type="text"
            placeholder="جستجو در بین نتایج ..."
            className="h-12 outline-0 bg-gray-100 rounded-md px-8 py-2 placeholder:text-gray-400 w-full  focus:border-gray-300 dark:bg-gray-800 dark:text-gray-50"
          />

          <SilderRange
            min={minPrice}
            max={maxPrice}
            onChange={(min: number, max: number) => {
              setSearchs([
                { key: "min-price", value: min.toString() },
                { key: "max-price", value: max.toString() },
              ]);
            }}
          />

          <div className="flex justify-between items-center">
            <h3 className="dark:text-gray-50 text-lg">فقط کالاهای موجود</h3>
            <Switcher
              isCheck={hasSellingStock}
              onChange={(check: boolean) => {
                setSearch("has_selling_stock", check ? "1" : "0");
              }}
            />
          </div>

          <div className="flex justify-between items-center">
            <h3 className="dark:text-gray-50 text-lg">فقط محصولات ویژه</h3>
            <Switcher
              isCheck={specialProducts}
              onChange={(check: boolean) => {
                setSearch("special-products", check ? "1" : "0");
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

            <ButtonSort>جدید ترین</ButtonSort>
            <ButtonSort>پر فروش ترین</ButtonSort>
            <ButtonSort>گران ترین</ButtonSort>
            <ButtonSort>ارزان ترین</ButtonSort>
          </div>
          {children}
        </div>
      </div>
      <div className="w-full flex justify-center items-center">
        <Pagination counter={40} limit={12} />
      </div>
    </div>
  );
}

function WindowFilterMobile({ close }: { close: () => void }) {
  return (
    <div className="w-full h-full py-3 px-5 grid grid-rows-[auto,1fr,auto]">
      <div className="flex justify-between pb-4">
        <button type="button" onClick={close}>
          <Close itemShop={false} />
        </button>
        <h3 className="dark:text-gray-50">
          <span>4</span>
          <span>مورد</span>
        </h3>
      </div>
    </div>
  );
}

function WindowSortMobile({ close }: { close: () => void }) {
  return (
    <div className="w-full h-full py-3 px-5 grid grid-rows-[auto,1fr,auto]">
      <div className="flex justify-between pb-4">
        <button type="button" onClick={close}>
          <Close itemShop={false} />
        </button>
        <h3 className="dark:text-gray-50">
          <span>4</span>
          <span>مورد</span>
        </h3>
      </div>
    </div>
  );
}

export default SelectShop;
