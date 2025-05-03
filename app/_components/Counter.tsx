import { useState } from "react";

interface CounterTypes {
  id: string;
  quantity: number;
  maxCount: number;
}

function Counter({ id, quantity, maxCount }: CounterTypes) {
  console.log(id);

  const [count, setCount] = useState<number>(quantity);

  const handleIncrement = () => {
    const newCount = count + 1;
    if (newCount > maxCount) return;
    setCount(newCount);
  };

  const handleDecrement = () => {
    const newCount = count - 1;
    if (newCount < 1) return;
    setCount(newCount);
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
