interface PropsButton {
  children: string;
}

function ButtonSort({ children }: PropsButton) {
  return (
    <button
      type="button"
      className="dark:text-gray-50 dark:hover:bg-gray-800 hover:bg-gray-100 py-2 px-3 rounded-md transition-all"
    >
      {children}
    </button>
  );
}

export default ButtonSort;
