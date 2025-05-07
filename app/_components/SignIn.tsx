"use client";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useState } from "react";
import { auth } from "@/app/_lib/auth";
import { useRouter } from "next/navigation";

type FormData = {
  email: string;
  password: string;
};

function SignIn() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  async function onSubmit(data: FormData) {
    setIsLoading(true);
    try {
      await auth.signIn(data);
      toast.success("ورود با موفقیت انجام شد");
      reset();
      router.push("/");
    } catch {
      toast.error("خطا در ورود");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <input
          type="text"
          placeholder="ایمیل"
          aria-invalid={errors.email ? "true" : "false"}
          aria-describedby="phoneOrEmail-error"
          {...register("email", {
            required: "لطفاایمیل خود را وارد کنید",
            pattern: {
              value: /^[a-zA-Z0-9]+.*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "ایمیل معتبر نیست",
            },
          })}
          className={`outline-0 bg-gray-100 rounded-md px-4 py-2 placeholder:text-gray-400 w-full border focus:bg-white dark:bg-gray-800 dark:text-gray-50 ${
            errors?.email
              ? "border-red-500"
              : "focus:border-gray-300 dark:border-gray-600"
          }`}
        />
        {errors.email && (
          <span id="email-error" className="text-red-500 text-sm">
            {errors.email.message}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <input
          type="password"
          placeholder="رمز عبور"
          aria-invalid={errors.password ? "true" : "false"}
          aria-describedby="password-error"
          {...register("password", {
            required: "لطفاً رمز عبور را وارد کنید",
            minLength: {
              value: 8,
              message: "رمز عبور باید حداقل ۸ کاراکتر باشد",
            },
          })}
          className={`outline-0 bg-gray-100 rounded-md px-4 py-2 placeholder:text-gray-400 w-full border focus:bg-white dark:bg-gray-800 dark:text-gray-50 ${
            errors?.password
              ? "border-red-500"
              : "focus:border-gray-300 dark:border-gray-600"
          }`}
        />
        {errors.password && (
          <span id="password-error" className="text-red-500 text-sm">
            {errors.password.message}
          </span>
        )}
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className={`bg-color-success-200 rounded-md px-4 py-2 transition-all duration-300 text-white ${
          isLoading ? "opacity-50 cursor-wait" : ""
        }`}
      >
        {isLoading ? "در حال ورود..." : "ورود"}
      </button>
    </form>
  );
}

export default SignIn;
