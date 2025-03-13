import Magnifying from "@/app/_components/_icons/Magnifying";

function SearchHeader() {
  return (
    <div className="relative rounded-md">
      <input
        type="text"
        placeholder="جستجو کنید ..."
        className=" outline-0 bg-gray-100 rounded-md px-8 py-2 placeholder:text-gray-400 w-full border focus:border-gray-300 focus:bg-white dark:bg-gray-800 dark:text-gray-50"
      />
      <button
        type="button"
        className="absolute top-1/2 -translate-y-1/2 right-1"
      >
        <Magnifying />
      </button>
    </div>
  );
}

export default SearchHeader;
