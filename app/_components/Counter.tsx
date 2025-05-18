
interface CounterTypes {
  quantity: number;
  maxCount: number;
  setCounter?: (count: number) => void;
  loading?: boolean;
  disabled?: boolean;
}

function Counter({
  quantity,
  maxCount,
  setCounter,
  loading,
  disabled,
}: CounterTypes) {
  const handleIncrement = () => {
    const newCount = quantity + 1;
    if (newCount > maxCount) return;

    setCounter?.(newCount);
  };

  const handleDecrement = () => {
    const newCount = quantity - 1;
    if (newCount < 1) return;

    setCounter?.(newCount);
  };

  return (
    <div className="flex border-gray-300 border dark:border-gray-400 px-3 py-1 gap-3 rounded-md">
      <button
        type="button"
        className="text-color-success-100 dark:text-color-success-200"
        onClick={handleIncrement}
        disabled={loading || disabled}
      >
        +
      </button>
      <h3 className="dark:text-gray-50 flex items-center">
        {loading ? "..." : quantity}
      </h3>
      <button
        type="button"
        className="text-color-danger-100 dark:text-color-danger-200 text-2xl font-extralight"
        onClick={handleDecrement}
        disabled={loading || disabled}
      >
        -
      </button>
    </div>
  );
}

export default Counter;
