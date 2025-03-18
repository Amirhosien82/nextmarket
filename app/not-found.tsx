import Title from "@/app/_components/Title";
import Link from "next/link";

function NotFound() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <h3 className="text-[100px] md:text-[200px] dark:text-gray-50">404</h3>
      <Title>صفحه ای به دنبال آن هستید پیدا نشد!</Title>
      <Link href="/" className="bg-color-success-200 hover:bg-color-success-100 rounded-md px-4 py-2 transition-all duration-300 text-gray-50 text-lg mt-6">بازگشت به صفحه اصلی</Link>
    </div>
  );
}

export default NotFound;
