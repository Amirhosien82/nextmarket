"user client";

import React, {
  cloneElement,
  createContext,
  useContext,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { OpenContext, OpenProps, WindowProps } from "@/app/_models/types";

const ContextApi = createContext<OpenContext | undefined>(undefined);

function Offcanvas({ children }: WindowProps) {
  const [open, setOpen] = useState(false);
  return (
    <ContextApi.Provider value={{ open, setOpen }}>
      {children}
    </ContextApi.Provider>
  );
}

function Open({ children }: OpenProps) {
  const context = useContext(ContextApi);
  if (!context) {
    throw new Error("Open must be used within a OffCanvas");
  }
  const { setOpen } = context;
  return cloneElement(children, {
    onClick: () => {
      setOpen(true);
    },
  });
}

function Window({ children }: OpenProps) {
  const context = useContext(ContextApi);
  if (!context) {
    throw new Error("Open and setOpen must be used within a Offcanvas");
  }
  const { setOpen, open } = context;

  return createPortal(
    <div
      className={`fixed w-full z-50 top-0 bottom-0  bg-white dark:bg-gray-900 transition-all duration-700  ${
        open ? "left-0" : "-left-[5000px]"
      }`}
    >
      {cloneElement(children, {
        close: () => {
          setOpen(false);
        },
      })}
    </div>,
    document.body
  );
}

Offcanvas.Open = Open;
Offcanvas.Window = Window;

export default Offcanvas;
