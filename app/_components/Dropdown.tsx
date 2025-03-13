"user client";

import React, {
  cloneElement,
  createContext,
  useContext,
  useRef,
  useState,
} from "react";

const ContextApi = createContext();

function Dropdown({ children }) {
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
  const ref = useRef();

  const { setOpen, open } = useContext(ContextApi);

  document.addEventListener(
    "click",
    (e) => {
      if (e.target && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    },
    { capture: true }
  );

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
