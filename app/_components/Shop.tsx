"use client";
import Shopping from "@/app/_components/_icons/Shopping";
import Close from "@/app/_components/_icons/Close";
import Offcanvas from "@/app/_components/Offcanvas";
import Dropdown from "@/app/_components/Dropdown";
import NavLink from "@/app/_components/NavLink";
import Button from "@/app/_components/Button";
import ItemShop from "./ItemShop";

function Shop() {
  return (
    <>
      <div className="hidden md:flex relative">
        <Dropdown>
          <Dropdown.Open>
            <button type="button" className="relative">
              <Shopping />
              <span className="absolute flex justify-center items-center z-10 bg-color-success-200 text-white size-6 rounded-full left-3 bottom-4">
                10
              </span>
            </button>
          </Dropdown.Open>
          <Dropdown.Window>
            <WindowShopWindow />
          </Dropdown.Window>
        </Dropdown>
      </div>
      <div className="md:hidden">
        <Offcanvas>
          <Offcanvas.Open>
            <button type="button" className="relative">
              <Shopping />
              <span className="absolute z-10 bg-color-success-200 text-white p-1 rounded-full text-[0.6rem] left-3 bottom-2">
                10
              </span>
            </button>
          </Offcanvas.Open>
          <Offcanvas.Window>
            <WindowShopMobile  />
          </Offcanvas.Window>
        </Offcanvas>
      </div>
    </>
  );
}

function WindowShopMobile({ close }: { close?: () => void }) {
  return (
    <div className="w-full h-screen py-3 px-5 grid grid-rows-[auto,1fr,auto]">
      <div className="flex justify-between pb-4">
        <button type="button" onClick={close}>
          <Close />
        </button>
        <h3 className="dark:text-gray-50">
          <span>4</span>
          <span>مورد</span>
        </h3>
      </div>
      <div className="max-h-full overflow-auto">
        <ItemShop />
        <ItemShop />
        <ItemShop />
        <ItemShop />
        <ItemShop />
        <ItemShop />
      </div>

      <div className="flex justify-between items-center pt-3">
        <div className="flex flex-col">
          <h3 className="text-gray-400">مبلغ قابل پرداخت</h3>
          <h3 className="dark:text-gray-50 py-1">
            <span className="font-bold">300,000</span>
            <span>تومان</span>
          </h3>
        </div>
        <Button>ثبت سفارش</Button>
      </div>
    </div>
  );
}

function WindowShopWindow() {
  return (
    <div className="w-96 py-3 px-5 border border-t-2 dark:border-gray-400 border-t-color-success-100 dark:border-t-color-success-200 rounded-2xl flex flex-col">
      <div className="flex justify-between pb-4">
        <h3 className="dark:text-gray-50">
          <span>4</span>
          <span>مورد</span>
        </h3>
        <NavLink href="/" hover={false}>
          مشاهده سبد خرید
        </NavLink>
      </div>
      <div className="max-h-60 overflow-auto">
        <ItemShop />
        <ItemShop />
        <ItemShop />
        <ItemShop />
        <ItemShop />
        <ItemShop />
      </div>

      <div className="flex justify-between items-center pt-3">
        <div className="flex flex-col">
          <h3 className="text-gray-400 text-sm">مبلغ قابل پرداخت</h3>
          <h3 className="text-sm dark:text-gray-50 py-1">
            <span className="font-bold">300,000</span>
            <span>تومان</span>
          </h3>
        </div>
        <Button>ثبت سفارش</Button>
      </div>
    </div>
  );
}

export default Shop;
