import Image from "next/image";
import Link from "next/link";
import { formatWithCommas } from "../_lib/formatWithCommas";

interface ProductProps {
  product: {
    images: string;
    id: string;
    name: string;
    price: number | null;
    discount: number;
    new: boolean;
  };
}

function Product({ product }: ProductProps) {
  const { discount, id, name, price, images, new: newProduct } = product;

  return (
    <Link
      href={`/shop/${id}`}
      className="relative overflow-hidden flex flex-col justify-center items-center px-3 py-2 pb-3 rounded-lg border border-gray-300 bg-white  dark:border-gray-600 dark:bg-gray-900"
    >
      <div
        className={`absolute bg-color-danger-200 py-1 text-lg z-20 -rotate-45 top-2 -left-[100px] w-64 ${
          newProduct || "opacity-0"
        }`}
      >
        <h3 className="text-center w-full text-gray-50 text-sm">جدید</h3>
      </div>

      <div className="relative aspect-square w-[90%]">
        <Image fill src={images.split("***").at(0) || ""} alt="image" />
      </div>
      <h3 className="text-right text-[14px] dark:text-gray-50 line-clamp-1">
        {name}
      </h3>
      <div className="flex justify-between items-center w-full px-2 mt-4 mb-2">
        <span
          className={`bg-color-danger-200 text-gray-50 rounded-full size-6 flex justify-center items-center text-[12px] ${
            (price || 0) === 0 && "opacity-0"
          }`}
        >
          {((discount / (price || 0)) * 100).toFixed(0)}%
        </span>

        <div className="text-left">
          <h3
            className={`text-gray-400 line-through decoration-2 decoration-color-danger-200 ${
              (price || 0) === 0 && "opacity-0"
            }`}
          >
            {formatWithCommas(price || 0)}
          </h3>

          <h3 className=" text-color-success-200 font-bold ">
            <span>{formatWithCommas(discount)}</span>
            <span>تومان</span>
          </h3>
        </div>
      </div>
    </Link>
  );
}

export default Product;
