import Image from "next/image";
import Link from "next/link";

function Product() {
  return (
    <Link
      href="/"
      className="flex flex-col justify-center items-center px-3 pb-3 w-52 rounded-lg border border-gray-300 bg-white dark:border-white dark:bg-gray-800"
    >
      <div className="relative aspect-square w-[90%]">
        <Image
          fill
          src="https://roti-preview.taymakz.ir/assets/images/products/p1.png"
          alt="image"
        />
      </div>
      <h3 className="text-center text-sm dark:text-gray-50">
        کفش پیاده روی مردانه نیو بالانس مدل M520LN7
      </h3>
      <div className="flex justify-between items-center w-full px-2 mt-4 mb-2">
        <span className="bg-color-danger-200 text-gray-50 rounded-full  px-[6px] py-[3px] text-[10px]">
          10%
        </span>
        <div className="text-left">
          <h3 className="text-gray-400 line-through decoration-2 decoration-color-danger-200 text-sm">
            100,000
          </h3>
          <h3 className="text-[14px] text-color-success-200 font-bold ">
            <span>80,000</span>
            <span>تومان</span>
          </h3>
        </div>
      </div>
    </Link>
  );
}

export default Product;
