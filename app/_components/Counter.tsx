import { useState } from "react";
import { usePost } from "@/app/_lib/Context";

interface CounterTypes {
  id: number;
  quantity: number;
}

function Counter({ id, quantity }: CounterTypes) {
  const { quantityPluse, quantityMinus } = usePost();
  const [count, setCount] = useState<number>(quantity);

  return (
    <div className="flex border-gray-300 border dark:border-gray-400 px-3 py-1 gap-3 rounded-md">
      <button
        type="button"
        className="text-color-success-100 dark:text-color-success-200"
        onClick={() => {
          quantityPluse(id);
          setCount((c) => c + 1);
        }}
      >
        +
      </button>
      <h3 className="dark:text-gray-50 flex items-center">{count}</h3>
      <button
        type="button"
        className="text-color-danger-100 dark:text-color-danger-200 text-2xl font-extralight"
        onClick={() => {
          quantityMinus(id);
          setCount((c) => c - 1);
        }}
      >
        -
      </button>
    </div>
  );
}

export default Counter;
