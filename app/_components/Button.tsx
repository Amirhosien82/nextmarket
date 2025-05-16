import { ReactNode } from "react";

interface ButtonProps {
  children: string | ReactNode;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

function Button({ children, onClick }: ButtonProps) {
  return (
    <button
      type="button"
      onClick={(e) => {
        onClick(e);
      }}
      className="bg-color-success-200 hover:bg-color-success-100 rounded-md px-4 py-2 transition-all duration-300 text-gray-50"
    >
      {children}
    </button>
  );
}

export default Button;
