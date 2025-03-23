import { ReactNode } from "react";

interface PropsButton {
  children: ReactNode;
  onClick: () => void;
}

function ButtonShop({ children, onClick }: PropsButton) {
  return (
    <button
      onClick={onClick}
      type="button"
      className="w-full flex justify-start bg-white p-3 rounded-md gap-3 dark:bg-gray-900 dark:text-gray-50"
    >
      {children}
    </button>
  );
}

export default ButtonShop;
