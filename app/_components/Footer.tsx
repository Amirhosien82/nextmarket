"use client";
import { usePathname } from "next/navigation";
import Global from "@/app/_components/_icons/Global";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  const path = usePathname();

  if (path === "/login") return;

  return (
    <div className="w-full bg-white dark:bg-gray-900 px-3 md:px-28 py-4 md:py-5 flex flex-col gap-5 relative">
      <div className="absolute left-1/2 -translate-x-1/2 -top-3">
        <Global />
      </div>
      <div className="flex flex-col items-center gap-3 md:flex-row-reverse w-full md:justify-between">
        <button className="md:py-3 md:px-5 py-2 px-3 text-sm md:text-[16px] border rounded-md dark:text-gray-50 dark:border-gray-700">
          بازشگت به بالا
        </button>
        <div className="flex flex-col items-center gap-3 md:gap-4 md:flex-row">
          <h3 className="dark:text-gray-50 text-sm">
            تلفن پشتیبانی 0000000 - 021
          </h3>
          <h3 className="dark:text-gray-50 hidden md:block">|</h3>
          <h3 className="dark:text-gray-50 text-sm">
            ۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم
          </h3>
        </div>
      </div>
      <div className="flex flex-col items-center gap-6 w-full md:flex-row md:justify-between bg-gray-100 p-5 rounded-md dark:bg-gray-800">
        <h3 className="dark:text-gray-50 text-sm">
          از جدیدترین تخفیف ها با خبر شوید
        </h3>
        <div className="relative rounded-md md:w-80">
          <input
            type="text"
            placeholder="ایمیل شما"
            className="outline-0 bg-white rounded-md p-2 placeholder:text-gray-400 dark:bg-gray-900 dark:text-gray-50 w-full"
          />
          <button
            type="button"
            className="bg-color-success-100 hover:bg-color-success-200 transition-all text-gray-50 px-4 py-1 rounded-md text-sm absolute top-1/2 -translate-y-1/2 left-1"
          >
            ثبت
          </button>
        </div>
      </div>
      <div className="flex w-full md:flex-row flex-col gap-5 justify-between items-center">
        <div className="flex flex-col md:flex-row gap-5 md:gap-40">
          <div className="flex flex-col gap-1">
            <h3 className="dark:text-gray-50 text-lg">نکست مارکت</h3>
            <Link href="/" className="dark:text-gray-500 text-gray-500 text-sm">
              صفحه اصلی
            </Link>

            <Link
              href="/shop"
              className="dark:text-gray-500 text-gray-500 text-sm"
            >
              فروشگاه
            </Link>

            <Link href="/" className="dark:text-gray-500 text-gray-500 text-sm">
              سبد خرید
            </Link>

            <Link
              href="/about-us"
              className="dark:text-gray-500 text-gray-500 text-sm"
            >
              درباره ما
            </Link>
          </div>
          <h3 className="dark:text-gray-300 text-gray-700 text-sm text-justify leading-7 max-w-96">
            با سلام و احترام، به وب‌سایت نِکست مارکت، طراحی و توسعه‌یافته توسط
            امیرحسین شکری، برنامه‌نویس فرانت‌اند، خوش آمدید. این وب‌سایت
            به‌عنوان نمونه‌ای برای نمایش توانایی‌ها و
            <Link className="text-color-success-100" href="/about-us">
              مشاهده ادامه
            </Link>
          </h3>
        </div>
        <div className="flex gap-4">
          <Image src="/imgs/namad.png" width={100} height={100} alt="namad" />
          <Image
            src="/imgs/samandehi.png"
            width={100}
            height={100}
            alt="samandehi"
          />
        </div>
      </div>
      <div className="w-full flex justify-center items-center border-t dark:border-gray-600">
        <h3 className="dark:text-gray-300 text-gray-700 text-sm pt-4">
          کلیه حقوق این سایت متعلق به فروشگاه نکست مارکت می‌باشد.
        </h3>
      </div>
    </div>
  );
}

export default Footer;
