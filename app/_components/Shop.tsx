"use client";
import Shopping from "@/app/_components/_icons/Shopping";
import Close from "@/app/_components/_icons/Close";
import Offcanvas from "@/app/_components/Offcanvas";
import Dropdown from "@/app/_components/Dropdown";
import NavLink from "@/app/_components/NavLink";
import Button from "@/app/_components/Button";
import ItemShop from "@/app/_components/ItemShop";
import { useAppContext } from "@/app/context/Context";
import { formatWithCommas } from "@/app/_lib/formatWithCommas";
import Link from "next/link";

type Card = {
  id: string | undefined;
  price: number | null | undefined;
  discount: number | undefined;
  count: number | undefined;
  quantity: number;
  name: string | undefined;
  image: string | undefined;
};

function Shop() {
  const { card } = useAppContext();
  const totalPrice = card.reduce(
    (oldCard, newCard) => oldCard + (newCard.discount || 0) * newCard.quantity,
    0
  );

  const totlaCount = card.reduce((old, newCard) => old + newCard.quantity, 0);

  return (
    <>
      <div className="hidden md:flex relative">
        <Dropdown>
          <Dropdown.Open>
            <button type="button" className="relative">
              <Shopping />
              {card.length > 0 && (
                <span className="absolute flex justify-center items-center z-10 bg-color-success-200 text-white size-6 rounded-full left-3 bottom-4">
                  {card.length}
                </span>
              )}
            </button>
          </Dropdown.Open>
          <Dropdown.Window>
            <WindowShopWindow
              card={card}
              totalPrice={totalPrice}
              totlaCount={totlaCount}
            />
          </Dropdown.Window>
        </Dropdown>
      </div>
      <div className="md:hidden">
        <Offcanvas>
          <Offcanvas.Open>
            <button type="button" className="relative">
              <Shopping />
              {card.length > 0 && (
                <span className="absolute z-10 bg-color-success-200 text-white p-1 size-5 rounded-full text-[0.8rem] left-3 bottom-2 flex justify-center items-center">
                  {card.length}
                </span>
              )}
            </button>
          </Offcanvas.Open>
          <Offcanvas.Window right={false}>
            <WindowShopMobile
              totlaCount={totlaCount}
              card={card}
              totalPrice={totalPrice}
              close={() => {}}
            />
          </Offcanvas.Window>
        </Offcanvas>
      </div>
    </>
  );
}

function WindowShopMobile({
  close,
  totalPrice,
  card,
  totlaCount,
}: {
  close: () => void;
  card: Card[];
  totalPrice: number;
  totlaCount: number;
}) {
  if (totlaCount === 0)
    return (
      <div className="grid grid-rows-[1fr,auto] h-full gap-5 py-3 px-5">
        <h3 className="dark:text-gray-50">
          هنوز هیچ محصولی در سبد خرید وجو ندارد
        </h3>
        <Link
          href="/shop"
          onClick={close}
          className="bg-color-success-200 hover:bg-color-success-100 rounded-md px-4 py-2 transition-all duration-300 text-gray-50"
        >
          رفتن به سبد خرید
        </Link>
      </div>
    );

  return (
    <div className="w-full h-full py-3 px-5 grid grid-rows-[auto,1fr,auto]">
      <div className="flex justify-between pb-4">
        <button type="button" onClick={close}>
          <Close itemShop={false} />
        </button>
        <h3 className="dark:text-gray-50">
          <span>{totlaCount}</span>
          <span>مورد</span>
        </h3>
      </div>
      <div className="max-h-full overflow-auto">
        {card.map((item) => (
          <ItemShop key={item.id} item={item} />
        ))}
      </div>

      <div className="flex justify-between items-center pt-3">
        <div className="flex flex-col">
          <h3 className="text-gray-400">مبلغ قابل پرداخت</h3>
          <h3 className="dark:text-gray-50 py-1">
            <span className="font-bold">{formatWithCommas(totalPrice)}</span>
            <span>تومان</span>
          </h3>
        </div>
        <Button onClick={() => {}}>ثبت سفارش</Button>
      </div>
    </div>
  );
}

function WindowShopWindow({
  card,
  totalPrice,
  totlaCount,
}: {
  totalPrice: number;
  card: Card[];
  totlaCount: number;
}) {
  if (totlaCount === 0)
    return (
      <div className="w-96 py-3 px-5 border border-t-2 dark:border-gray-400 border-t-color-success-100 dark:border-t-color-success-200 rounded-2xl flex flex-col items-start gap-5">
        <h3 className="dark:text-gray-50">
          هنوز هیچ محصولی در سبد خرید وجو ندارد
        </h3>
        <Link
          href="/shop"
          className="bg-color-success-200 hover:bg-color-success-100 rounded-md px-4 py-2 transition-all duration-300 text-gray-50"
        >
          رفتن به سبد خرید
        </Link>
      </div>
    );

  return (
    <div className="w-96 py-3 px-5 border border-t-2 dark:border-gray-400 border-t-color-success-100 dark:border-t-color-success-200 rounded-2xl flex flex-col">
      <div className="flex justify-between pb-4">
        <h3 className="dark:text-gray-50">
          <span>{totlaCount}</span>
          <span>مورد</span>
        </h3>
        <NavLink lg={false} href="/" hover={false}>
          مشاهده سبد خرید
        </NavLink>
      </div>
      <div className="max-h-60 overflow-auto">
        {card.map((item) => (
          <ItemShop item={item} key={item.id} />
        ))}
      </div>

      <div className="flex justify-between items-center pt-3">
        <div className="flex flex-col">
          <h3 className="text-gray-400 text-sm">مبلغ قابل پرداخت</h3>
          <h3 className="text-sm dark:text-gray-50 py-1">
            <span className="font-bold">{formatWithCommas(totalPrice)}</span>
            <span>تومان</span>
          </h3>
        </div>
        <Button onClick={() => {}}>ثبت سفارش</Button>
      </div>
    </div>
  );
}

export default Shop;
