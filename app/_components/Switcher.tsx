interface SwitherProps {
  isCheck: boolean;
  onChange: (value: boolean) => void;
}
function Switcher({ isCheck, onChange }: SwitherProps) {
  return (
    <label className="inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        checked={isCheck}
        onChange={(e) => {
          onChange(e.target.checked);
        }}
      />
      <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-color-success-200"></div>
    </label>
  );
}

export default Switcher;
