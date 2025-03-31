import Image from "next/image";
import Counter from "@/app/_components/Counter";
import Close from "@/app/_components/_icons/Close";
import { useCart } from "@/app/context/Context";
import { formatWithCommas } from "@/app/_lib/formatWithCommas";

function ItemShop() {
  const { id, quantity, price } = { id: 2, quantity: 5, price: 300000 };
  const { dispatch } = useCart();

  return (
    <div className="flex pt-4 border-b border-gray-300  dark:border-gray-400">
      <div className="flex flex-col items-start">
        <button
          type="button"
          className="rounded-full p-1 bg-gray-100 dark:bg-gray-800"
          onClick={() => {
            dispatch({
              type: "cart/removeItem",
              payload: { id, quantity: 0 },
            });
          }}
        >
          <Close itemShop={true} />
        </button>
        <Image
          src="https://roti-preview.taymakz.ir/assets/images/products/p1.png"
          alt="image"
          width={120}
          height={120}
        />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="dark:text-gray-50">کفش مردانه</h3>
        <h3 className="text-sm text-gray-500">
          <span>تعداد:</span>
          <span>{quantity}</span>
        </h3>
        <div className="flex gap-4 items-center">
          <h3 className="text-md text-color-success-100 dark:text-color-success-200 ">
            <span className="font-bold">{formatWithCommas(price)}</span>
            <span>تومان</span>
          </h3>
          <Counter id={id} quantity={quantity} />
        </div>
      </div>
    </div>
  );
}

export default ItemShop;
