import Image from "next/image";
import Counter from "@/app/_components/Counter";
import Close from "@/app/_components/_icons/Close";

import { formatWithCommas } from "@/app/_lib/formatWithCommas";
import { useAppContext } from "@/app/context/Context";
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

function ItemShop({ item }: { item: Card }) {
  const { id, quantity, count, discount, name, image } = item;
  const { dispatch, updateQuantity, loadingQuantity } = useAppContext();

  function update(count: number) {
    updateQuantity({ id: id || "", quantity: count });
  }

  return (
    <div className="flex pt-4 border-b border-gray-300  dark:border-gray-400">
      <div className="flex flex-col items-start">
        <button
          type="button"
          className="rounded-full p-1 bg-gray-100 dark:bg-gray-800"
          onClick={() => {
            dispatch({ type: "card/remove", payload: { id: id || "" } });
          }}
        >
          <Close itemShop={true} />
        </button>
        <Link href={`/shop/${id}`}>
          <Image src={image || ""} alt="image" width={120} height={120} />
        </Link>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="dark:text-gray-50">{name}</h3>
        <h3 className="text-sm text-gray-500">
          <span>تعداد:</span>
          <span>{quantity}</span>
        </h3>
        <div className="flex gap-4 items-center">
          <div className="flex flex-col justify-start gap-1">
            <h3 className="text-md text-color-success-100 dark:text-color-success-200 ">
              <span className="font-bold">
                {formatWithCommas(discount || 0)}
              </span>
              <span>تومان</span>
            </h3>
            <h3 className="text-sm text-gray-500 ">
              <span className="font-bold">
                {formatWithCommas((discount || 0) * (quantity || 0))}
              </span>
              <span>تومان</span>
            </h3>
          </div>
          <Counter
            quantity={quantity}
            maxCount={count || 0}
            loading={loadingQuantity}
            setCounter={update}
          />
        </div>
      </div>
    </div>
  );
}

export default ItemShop;
