import { useState } from "react";
import { useCart } from "@/app/context/Context";

interface CounterTypes {
  id: number;
  quantity: number;
}

function Counter({ id, quantity }: CounterTypes) {
  const { dispatch } = useCart();
  const [count, setCount] = useState<number>(quantity);

  const handleIncrement = () => {
    const newCount = count + 1;
    setCount(newCount);
    dispatch({
      type: "cart/updateQuantity",
      payload: { id, quantity: newCount },
    });
  };

  const handleDecrement = () => {
    const newCount = count - 1;
    if (newCount === 0) {
      dispatch({
        type: "cart/removeItem",
        payload: { id, quantity: 0 },
      });
    }
    setCount(newCount);
    dispatch({
      type: "cart/updateQuantity",
      payload: { id, quantity: newCount },
    });
  };

  return (
    <div className="flex border-gray-300 border dark:border-gray-400 px-3 py-1 gap-3 rounded-md">
      <button
        type="button"
        className="text-color-success-100 dark:text-color-success-200"
        onClick={handleIncrement}
      >
        +
      </button>
      <h3 className="dark:text-gray-50 flex items-center">{count}</h3>
      <button
        type="button"
        className="text-color-danger-100 dark:text-color-danger-200 text-2xl font-extralight"
        onClick={handleDecrement}
      >
        -
      </button>
    </div>
  );
}

export default Counter;
