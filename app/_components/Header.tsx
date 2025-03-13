import Brand from "@/app/_components/Brand";
import SearchHeader from "@/app/_components/SearchHeader";
import Dark from "@/app/_components/Dark";
import User from "@/app/_components/User";
import Shop from "@/app/_components/Shop";

function Header() {
  return (
    <>
      {/* HEADER DESKTOP */}
      <div className=" flex-col bg-white dark:bg-gray-900 px-3 py-5 gap-3 fixed top-0 z-40 left-0 right-0 hidden md:flex">
        <div className="grid grid-cols-[auto,auto,auto]">
          <Brand desktop />
          <SearchHeader />
          <div className="flex gap-3 justify-end">
            <User />
            <Shop />
            <Dark />
          </div>
        </div>
      </div>
      {/* HEADER MOBILE */}
      <div className="flex flex-col bg-white dark:bg-gray-900 px-3 py-4 gap-3 fixed top-0 z-40 left-0 right-0 md:hidden">
        <div className="flex justify-between items-center">
          <Brand />
          <div className="flex gap-2">
            <User />
            <Shop />
            <Dark />
          </div>
        </div>
        <SearchHeader />
      </div>
    </>
  );
}

export default Header;
