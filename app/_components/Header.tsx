"use client";

import Brand from "@/app/_components/Brand";
import SearchHeader from "@/app/_components/SearchHeader";
import User from "@/app/_components/User";
import Shop from "@/app/_components/Shop";
import Menu from "@/app/_components/Menu";
import Dark from "@/app/_components/Dark";
import Link from "next/link";
import { useEffect } from "react";

interface IHeaderProps {
  theme: "dark" | "";
}

function Header({ theme }: IHeaderProps) {
  useEffect(() => {
    let scrollY = 0;
    function handleScroll() {
      const header = document.querySelector("#header");
      const currentScrollY = window.scrollY;

      if (currentScrollY < scrollY) {
        header?.classList.remove("-top-8");
        header?.classList.add("top-[76px]");
      } else if (currentScrollY > scrollY) {
        header?.classList.remove("top-[76px]");
        header?.classList.add("-top-8");
      }

      scrollY = currentScrollY;
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* HEADER DESKTOP */}
      <>
        <div className="flex-col bg-white dark:bg-gray-900 px-3 pt-5 pb-4 gap-3 fixed top-0 z-40 left-0 right-0 hidden md:flex">
          <div className="grid grid-cols-[auto,auto,auto] relative z-50">
            <Brand desktop={true} />
            <SearchHeader />
            <div className="flex gap-3 justify-end">
              <User />
              <Shop />
              <Dark theme={theme} />
            </div>
          </div>
        </div>
        <div
          id="header"
          className="flex bg-white dark:bg-gray-900 justify-start top-[76px] transition-[top] duration-700 fixed z-10 w-full py-2 px-3 gap-4"
        >
          <Link
            href="/"
            className="text-gray-600 dark:text-gray-200 font-extralight"
          >
            صفحه اصلی
          </Link>

          <Link
            href="/shop"
            className="text-gray-600 dark:text-gray-200 font-extralight"
          >
            فروشگاه
          </Link>

          <Link
            href="/blog"
            className="text-gray-600 dark:text-gray-200 font-extralight"
          >
            وبلاگ
          </Link>

          <Link
            href="/about-us"
            className="text-gray-600 dark:text-gray-200 font-extralight"
          >
            درباره ما
          </Link>
        </div>
      </>
      {/* HEADER MOBILE */}
      <div className="flex flex-col bg-white dark:bg-gray-900 px-3 py-4 gap-3 fixed top-0 z-40 left-0 right-0 md:hidden">
        <div className="flex justify-between items-center">
          <Menu />
          <Brand desktop={false} />
          <div className="flex gap-2">
            <User />
            <Shop />
            <Dark theme={theme} />
          </div>
        </div>
        <SearchHeader />
      </div>
    </>
  );
}

export default Header;
