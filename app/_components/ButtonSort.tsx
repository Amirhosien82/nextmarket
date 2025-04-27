interface PropsButton {
  children: string;
  active: boolean;
  onClick: () => void;
}

function ButtonSort({ children, active, onClick }: PropsButton) {
  return (
    <button
      type="button"
      disabled={active}
      onClick={onClick}
      className={`dark:text-gray-50 dark:hover:bg-gray-800 hover:bg-gray-100 text-lg md:text-md py-4 md:py-2 px-3 rounded-md transition-all ${
        active && "dark:bg-gray-800 bg-gray-100"
      }`}
    >
      {children}
    </button>
  );
}

export default ButtonSort;
