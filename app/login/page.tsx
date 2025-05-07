"use client";

import SignUp from "@/app/_components/SignUp";
import SignIn from "@/app/_components/SignIn";
import { useState } from "react";
function Page() {
  const [isSignUp, setIsSignUp] = useState<boolean>(true);
  return (
    <div className="bg-gray-50 dark:bg-gray-900 p-5 rounded-md flex flex-col gap-4 max-w-[400px] mx-auto">
      <h3 className="text-gray-800 dark:text-gray-50 text-lg">
        {isSignUp ? "ثبت نام" : "ورود"}
      </h3>

      {isSignUp ? <SignUp /> : <SignIn />}
      <div className="flex justify-between">
        <button
          type="button"
          className="text-[10px] dark:text-gray-50 "
          onClick={() => {
            setIsSignUp(!isSignUp);
          }}
        >
          <span>برای </span>
          <span className="text-[12px]">{!isSignUp ? "ثبت نام" : "ورود"}</span>
          <span> اینجا را فشار دهید</span>
        </button>
      </div>
    </div>
  );
}

export default Page;
