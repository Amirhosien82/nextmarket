"user client";

import React, {
  cloneElement,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { OpenContext, OpenProps, WindowProps } from "@/app/_models/types";

const ContextApi = createContext<OpenContext | undefined>(undefined);

function Dropdown({ children }: WindowProps) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <ContextApi.Provider value={{ open, setOpen }}>
      {children}
    </ContextApi.Provider>
  );
}

function Open({ children }: OpenProps) {
  const context = useContext(ContextApi);
  if (!context) {
    throw new Error("Open must be used within a Dropdown");
  }
  const { setOpen } = context;
  return cloneElement(children, {
    onClick: () => {
      setOpen(true);
    },
  });
}

function Window({ children }: WindowProps) {
  const ref = useRef<HTMLDivElement>(null);

  const context = useContext(ContextApi);

  if (!context) {
    throw new Error("Open and setOpen must be used within a Dropdown");
  }

  const { setOpen, open } = context;

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside, { capture: true });
    return () => {
      document.removeEventListener("click", handleClickOutside, {
        capture: true,
      });
    };
  }, [setOpen]);

  return (
    <div
      ref={ref}
      className={`absolute z-[60] bg-white dark:bg-gray-900 top-9 left-0 rounded-2xl ${
        open ? "" : "hidden"
      }`}
    >
      {children}
    </div>
  );
}

Dropdown.Open = Open;
Dropdown.Window = Window;

export default Dropdown;
