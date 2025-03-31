"use client";
import { usePathname } from "next/navigation";

function Footer() {
  const path = usePathname();

  if (path === "/login") return;

  return <div>footer</div>;
}

export default Footer;
