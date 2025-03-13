"user client";

import React, {
  cloneElement,
  createContext,
  useContext,
  useState,
} from "react";
import { createPortal } from "react-dom";

const ContextApi = createContext();

function Offcanvas({ children }) {
  const [open, setOpen] = useState(false);
  return (
    <ContextApi.Provider value={{ open, setOpen }}>
      {children}
    </ContextApi.Provider>
  );
}

function Open({ children }) {
  const { setOpen } = useContext(ContextApi);
  return cloneElement(children, {
    onClick: () => {
      setOpen(true);
    },
  });
}

function Window({ children }) {
  const { setOpen, open } = useContext(ContextApi);
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
