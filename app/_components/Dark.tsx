"use client";
import { useState } from "react";
import Moon from "@/app/_components/_icons/Moon";
import Sun from "@/app/_components/_icons/Sun";
import cookie from "js-cookie";

interface IDarkProps {
  theme: "dark" | "";
}

function Dark({ theme }: IDarkProps) {
  const [dark, setDark] = useState<boolean>(theme === "dark");

  return (
    <button
      type="button"
      onClick={() => {
        setDark((d) => !d);
        if (!dark) {
          document.documentElement.classList.add("dark");
          cookie.set("theme", "dark");
        } else {
          document.documentElement.classList.remove("dark");
          cookie.set("theme", "light");
        }
      }}
    >
      {dark ? <Sun /> : <Moon />}
    </button>
  );
}

export default Dark;
