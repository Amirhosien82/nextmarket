"use client";

import Link from "next/link";
import Image from "next/image";
import { formatWithCommas } from "@/app/_lib/formatWithCommas";
import { useAppContext } from "@/app/context/Context";
import Button from "@/app/_components/Button";
import Close from "@/app/_components/_icons/Close";
import toast from "react-hot-toast";

type Card = {
  id: string | undefined;
  name: string | undefined;
  image: string | undefined;
  price: number | null | undefined;
  discount: number | undefined;
  count: number | undefined;
  quantity: number;
};

function Page() {
  const { favorites, removeFromFavorites, card, removeFromCart, addToCart } =
    useAppContext();

  const len = favorites.length;

  if (len === 0)
    return (
      <div className=" flex flex-col items-start gap-8 py-3 px-5">
        <h3 className="dark:text-gray-50">
          هنوز هیچ محصولی مورد علاقه شما نیست
        </h3>
        <Link
          href="/shop"
          className="bg-color-success-200 hover:bg-color-success-100 rounded-md px-4 py-2 transition-all duration-300 text-gray-50 "
        >
          رفتن به سبد خرید
        </Link>
      </div>
    );

  return (
    <div className="w-full h-full py-3 px-5 grid grid-rows-[auto,1fr,auto]">
      <div className="flex justify-between pb-4">
        <h3 className="dark:text-gray-50">
          <span>{len}</span>
          <span>مورد</span>
        </h3>
      </div>
      <div className="flex flex-col gap-2">
        {favorites.map((item) => (
          <ItemFavorites
            key={item.id}
            {...item}
            remove={removeFromFavorites}
            isFind={!card.find((c) => c.id === item.id)}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        ))}
      </div>
    </div>
  );
}

interface IItemFavorites {
  id: string | undefined;
  name: string | undefined;
  image: string | undefined;
  price: number | null | undefined;
  discount: number | undefined;
  count: number | undefined;
  remove: (id: string) => Promise<void>;
  isFind: boolean;
  removeFromCart: (id: string) => Promise<void>;
  addToCart: (item: Card) => Promise<void>;
}

function ItemFavorites({
  image,
  discount,
  name,
  price,
  count,
  id,
  remove,
  isFind,
  addToCart,
  removeFromCart,
}: IItemFavorites) {
  return (
    <div className="flex bg-white p-4 dark:bg-gray-900 justify-start items-start">
      <button
        type="button"
        className="rounded-full p-1 bg-gray-100 dark:bg-gray-800"
        onClick={() => {
          (async () => {
            try {
              await remove(id || "");
              toast.success("با موفقیت از لیست مورد علاقه ها حذف شد");
            } catch {
              toast.error("نتوانست از لیست مورد علاقه ها حذف شود");
            }
          })();
        }}
      >
        <Close itemShop={true} />
      </button>
      <div className="flex">
        <Link href={`shop/${id}`}>
          <Image
            src={image || ""}
            alt="image-product"
            width={200}
            height={200}
          />
        </Link>
        <div className="flex flex-col py-7 px-4 gap-2">
          <h3 className="text-lg dark:text-gray-50">{name}</h3>
          {(price || 0) > 0 && (
            <h3 className="text-gray-400 line-through decoration-2 decoration-color-danger-200">
              {formatWithCommas(price || 0)}
            </h3>
          )}

          <h3 className="text-color-success-200 font-bold ">
            {formatWithCommas(discount || 0)}
          </h3>
          {(count || 0) > 0 ? (
            !isFind ? (
              <button
                type="button"
                onClick={() => {
                  (async () => {
                    try {
                      await removeFromCart(id || "");
                      toast.success("با موفقیت از سبد خرید حذف شد");
                    } catch {
                      toast.error("نتوانست از سبد خرید حذف  شود");
                    }
                  })();
                }}
                className="bg-color-danger-200 rounded-md px-4 py-2 text-gray-50 text-center"
              >
                حذف از سبد خرید
              </button>
            ) : (
              <Button
                onClick={() => {
                  (async () => {
                    try {
                      await addToCart({
                        count,
                        discount,
                        id,
                        image,
                        name,
                        price,
                        quantity: 1,
                      });
                      toast.success("با موفقیت به سبد خرید اضافه شد");
                    } catch {
                      toast.error("نتوانست به سبد خرید اضافه شود");
                    }
                  })();
                }}
              >
                افزودن به سبد خرید
              </Button>
            )
          ) : (
            <h3 className="bg-color-danger-200 rounded-md px-4 py-2 text-gray-50 text-center">
              ناموجود
            </h3>
          )}
        </div>
      </div>
    </div>
  );
}

export default Page;
