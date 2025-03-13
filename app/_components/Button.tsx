function Button({ children }: { children: string }) {
  return (
    <button
      type="button"
      className="bg-color-success-200 hover:bg-color-success-100 rounded-md px-4 py-2 transition-all duration-300 text-gray-50"
    >
      {children}
    </button>
  );
}

export default Button;
