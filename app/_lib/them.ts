import { cookies } from "next/headers";

export function getTheme() {
  const theme = cookies().get("theme")?.value;
  return theme === "dark" ? "dark" : "";
}
