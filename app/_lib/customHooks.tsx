"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

function useSearch() {
  const router = useRouter();
  const search = useSearchParams();
  const path = usePathname();
  const URL = new URLSearchParams(search.toString());

  function setSearch(key: string, value: string) {
    URL.set(key, value);
    router.replace(`${path}?${URL.toString()}`);
  }

  function setSearchs(searchs: { key: string; value: string }[]) {
    searchs.forEach((s) => {
      URL.set(s.key, s.value);
    });
    router.replace(`${path}?${URL.toString()}`);
  }

  function getSearch(key: string) {
    const value = search.get(key);
    return value;
  }

  function clearSearch() {
    router.replace(path);
  }

  function removeSearch(key: string) {
    URL.delete(key);
    router.replace(`${path}?${URL.toString()}`);
  }

  return { setSearch, getSearch, setSearchs, clearSearch,removeSearch };
}

export { useSearch };
