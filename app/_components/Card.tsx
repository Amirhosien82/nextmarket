import Image from "next/image";

function Card() {
  return (
    <div className="flex flex-col gap-4 w-80 p-2 rounded-lg border border-gray-300 bg-white dark:border-white dark:bg-gray-800">
      <div className="relative aspect-video w-full rounded-lg overflow-hidden rounded-bl-3xl">
        <Image
          src="https://roti-preview.taymakz.ir/assets/images/blog/blog1.jpg"
          alt="image"
          fill
        />
      </div>
      <h3 className="text-right text-sm dark:text-gray-50">
        مزایا و معایب گوشی‌های سری گلکسی S21
      </h3>
      <h3 className="text-left text-xs text-color-success-200 mb-2">
        29 / شهریور / 1403
      </h3>
    </div>
  );
}

export default Card;
