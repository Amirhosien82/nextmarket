"use client";

import { useState } from "react";

interface InputTypes {
  placeholder: string;
  textArea: boolean;
  value: string;
  onChange: (value: string) => void;
}

function Input({ placeholder, textArea, onChange, value }: InputTypes) {
  const [active, setActive] = useState(false);

  if (!textArea) {
    return (
      <div className="relative border rounded-md w-full dark:border-gray-700">
        <input
          type="text"
          className="p-3 outline-none border-0 w-full rounded-md dark:bg-gray-900 dark:text-gray-50"
          onFocus={() => {
            setActive(true);
          }}
          value={value}
          onChange={(e) => {
            onChange(e.target.value);
          }}
          onBlur={(e) => {
            if (e.target.value === "") setActive(false);
          }}
        />
        <span
          className={`absolute whitespace-nowrap text-gray-800 dark:text-gray-100 transition-all  bg-white dark:bg-gray-900 ${
            active
              ? "-top-3 right-2 text-sm"
              : "top-1/2 -translate-y-1/2 right-3"
          }`}
        >
          {placeholder}
        </span>
      </div>
    );
  } else {
    return (
      <div className="relative border rounded-md w-full dark:border-gray-700 h-full">
        <textarea
          className="p-3 outline-none border-0 w-full rounded-md dark:bg-gray-900 dark:text-gray-50 h-full resize-none"
          onFocus={() => {
            setActive(true);
          }}
          value={value}
          onChange={(e) => {
            onChange(e.target.value);
          }}
          onBlur={(e) => {
            if (e.target.value === "") setActive(false);
          }}
        ></textarea>
        <span
          className={`absolute whitespace-nowrap text-gray-800 dark:text-gray-100 transition-all bg-white dark:bg-gray-900 ${
            active ? "-top-3 right-2 text-sm" : "top-2 right-3"
          }`}
        >
          {placeholder}
        </span>
      </div>
    );
  }
}

export default Input;
