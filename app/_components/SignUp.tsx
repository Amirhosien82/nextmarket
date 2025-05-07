"use client";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { auth } from "@/app/_lib/auth";
import { useState } from "react";
import { useRouter } from "next/navigation";

type FormData = {
  fullName: string;
  phone: string;
  email: string;
  address?: string;
  password: string;
  repetPassword: string;
};

function SignUp() {
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const {
    getValues,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  async function onSubmit(data: FormData) {
    setIsLoading(true);
    try {
      await auth.signUp(data);
      toast.success("ثبت نام با موفقیت انجام شد");

      reset();
      router.push("/");
    } catch {
      toast.error("خطا در ثبت نام");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 ">
      <input
        type="text"
        placeholder="نام و نام خانوادگی"
        {...register("fullName", {
          required: "لطفاً نام و نام خانوادگی را وارد کنید",
          pattern: {
            value: /^([ا-ی]+\s?)+$/,
            message: "فقط حروف فارسی مجاز است",
          },
        })}
        className={`outline-0 bg-gray-100 rounded-md px-4 py-2 placeholder:text-gray-400 w-full border  focus:bg-white  dark:bg-gray-800 dark:text-gray-50 ${
          errors?.fullName
            ? "border-color-danger-200"
            : "focus:border-gray-300 dark:border-gray-600"
        }`}
      />
      {errors.fullName && (
        <span className="text-red-500 text-sm">{errors.fullName.message}</span>
      )}

      <input
        type="text"
        {...register("phone", {
          required: "لطفاً شماره تلفن همراه را وارد کنید",
          pattern: {
            value: /^(09)\d{9}$/,
            message: "شماره تلفن همراه  (09xxxxxxxxx) معتبر نیست",
          },
        })}
        placeholder="تلفن همراه"
        className={`outline-0 bg-gray-100 rounded-md px-4 py-2 placeholder:text-gray-400 w-full border  focus:bg-white  dark:bg-gray-800 dark:text-gray-50 ${
          errors?.phone
            ? "border-color-danger-200"
            : "focus:border-gray-300 dark:border-gray-600"
        }`}
      />
      {errors.phone && (
        <span className="text-red-500 text-sm">{errors.phone.message}</span>
      )}

      <input
        type="text"
        placeholder="ایمیل"
        {...register("email", {
          required: "لطفاایمیل خود را وارد کنید",
          pattern: {
            value: /^[a-zA-Z0-9]+.*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: "ایمیل معتبر نیست",
          },
        })}
        className={`outline-0 bg-gray-100 rounded-md px-4 py-2 placeholder:text-gray-400 w-full border  focus:bg-white  dark:bg-gray-800 dark:text-gray-50 ${
          errors?.email
            ? "border-color-danger-200"
            : "focus:border-gray-300 dark:border-gray-600"
        }`}
      />
      {errors.email && (
        <span className="text-red-500 text-sm">{errors.email.message}</span>
      )}
      <input
        type="text"
        {...register("address", {
          pattern: {
            value: /^([ا-ی]+\s?)+$/,
            message: "فقط حروف فارسی مجاز است",
          },
        })}
        placeholder="آدرس"
        className={`outline-0 bg-gray-100 rounded-md px-4 py-2 placeholder:text-gray-400 w-full border  focus:bg-white  dark:bg-gray-800 dark:text-gray-50 ${
          errors?.address
            ? "border-color-danger-200"
            : "focus:border-gray-300 dark:border-gray-600"
        }`}
      />
      {errors.address && (
        <span className="text-red-500 text-sm">{errors.address.message}</span>
      )}

      <input
        type="password"
        {...register("password", {
          required: "لطفاً رمز عبور را وارد کنید",
          minLength: {
            value: 8,
            message: "رمز عبور باید حداقل ۸ کاراکتر باشد",
          },
        })}
        placeholder="رمز عبور"
        className={`outline-0 bg-gray-100 rounded-md px-4 py-2 placeholder:text-gray-400 w-full border  focus:bg-white  dark:bg-gray-800 dark:text-gray-50 ${
          errors?.password
            ? "border-color-danger-200"
            : "focus:border-gray-300 dark:border-gray-600"
        }`}
      />
      {errors.password && (
        <span className="text-red-500 text-sm">{errors.password.message}</span>
      )}
      <input
        type="password"
        {...register("repetPassword", {
          required: "لطفاً تکرار رمز عبور را وارد کنید",
          validate: (value) =>
            value === getValues("password") || "رمزهای عبور مطابقت ندارند",
        })}
        placeholder="تکرار رمز عبور"
        className={`outline-0 bg-gray-100 rounded-md px-4 py-2 placeholder:text-gray-400 w-full border  focus:bg-white  dark:bg-gray-800 dark:text-gray-50 ${
          errors?.repetPassword
            ? "border-color-danger-200"
            : "focus:border-gray-300 dark:border-gray-600"
        }`}
      />
      {errors.repetPassword && (
        <span className="text-red-500 text-sm">
          {errors.repetPassword.message}
        </span>
      )}

      <button
        type="submit"
        disabled={isLoading}
        className="bg-color-success-200 hover:bg-color-success-100 rounded-md px-4 py-2 transition-all duration-300 text-gray-50"
      >
        {isLoading ? "در حال ثبت نام..." : "ثبت نام"}
      </button>
    </form>
  );
}

export default SignUp;
