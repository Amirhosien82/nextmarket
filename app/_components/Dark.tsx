"use client";
import { useEffect, useState } from "react";
import Moon from "@/app/_components/_icons/Moon";
import Sun from "@/app/_components/_icons/Sun";

function Dark() {
  const [dark, setDark] = useState(
    localStorage.getItem("darkMode") === "dark" ? true : false || false
  );
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
