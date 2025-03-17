"use client";
import { useEffect, useState } from "react";
import Moon from "@/app/_components/_icons/Moon";
import Sun from "@/app/_components/_icons/Sun";

function Dark() {
  function getDarkModeInLocaleStorage(): boolean {
    return localStorage.getItem("darkMode") === "dark" ? true : false;
  }

  const [dark, setDark] = useState<boolean>(getDarkModeInLocaleStorage());

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "light");
    }
  }, [dark]);
  return (
    <button
      type="button"
      onClick={() => {
        setDark((d) => !d);
      }}
    >
      {dark ? <Sun /> : <Moon />}
    </button>
  );
}

export default Dark;
