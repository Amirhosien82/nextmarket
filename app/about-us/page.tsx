import HeadTitle from "@/app/_components/HeadTitle";

function Page() {
  return (
    <div className="flex flex-col items-start gap-4">
      <HeadTitle>درباره ما</HeadTitle>
      <h3 className="text-lg dark:text-gray-50 text-justify leading-9">
        با سلام و احترام، به وب‌سایت نِکست مارکت، طراحی و توسعه‌یافته توسط
        امیرحسین شکری، برنامه‌نویس فرانت‌اند، خوش آمدید. این وب‌سایت به‌عنوان
        نمونه‌ای برای نمایش توانایی‌ها و تسلط من در استفاده از فریمورک قدرتمند
        Next.js ساخته شده است. در نِکست مارکت تلاش کرده‌ام تا با به‌کارگیری
        جدیدترین تکنولوژی‌ها، از جمله TypeScript و Tailwind CSS، و رعایت اصول
        بهینه‌سازی، تجربه‌ای کاربرپسند و مدرن را برای شما به ارمغان بیاورم.
        امیدوارم از بازدید این وب‌سایت لذت ببرید و برای شما تجربه‌ای دلپذیر و
        مفید باشد. از بازخوردهای شما استقبال می‌کنم.
      </h3>
      <a
        className="cursor-pointer bg-color-success-200 hover:bg-color-success-100 rounded-md px-4 py-2 transition-all duration-300 text-gray-50 text-lg mt-6"
        download
        href="/shokri/amirhosienShokri.pdf"
      >
        دریافت رزومه
      </a>
    </div>
  );
}

export default Page;
