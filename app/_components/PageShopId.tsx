"use client";
import Clock from "@/app/_components/_icons/Clock";
import Copy from "@/app/_components/_icons/Copy";
import Heart from "@/app/_components/_icons/Heart";
import Like from "@/app/_components/_icons/Like";
import Suport from "@/app/_components/_icons/Suport";
import Tick from "@/app/_components/_icons/Tick";
import Truck from "@/app/_components/_icons/Truck";
import Button from "@/app/_components/Button";
import Counter from "@/app/_components/Counter";
import Multi from "@/app/_components/MultiParts";
import Slider from "@/app/_components/SliderProduct";
import SliderThumbs from "@/app/_components/SliderThumbs ";
import { formatWithCommas } from "@/app/_lib/formatWithCommas";
import { useState } from "react";
import toast from "react-hot-toast";
import { useAppContext } from "@/app/context/Context";

interface PageShopIdProps {
  comments:
    | {
        id: number;
        title: string;
        comment: string;
        like: number;
        dislike: number;
        fullName: string;
        productId: string;
      }[];
  id: string;
  about: string;
  colors: string;
  count: number;
  discount: number;
  name: string;
  newProduct: boolean;
  price: number;
  props: string;
  images: string;
}

function PageShopId({
  id,
  about,
  colors,
  count,
  discount,
  name,
  newProduct,
  price,
  props,
  images,
  comments,
}: PageShopIdProps) {
  const specifications = JSON.parse(props);

  const [colorSelect, setColorSelect] = useState<string>(colors.split("-")[0]);
  const {
    card,
    addToCart,
    removeFromCart,
    updateQuantity,
    addToFavorites,
    removeFromFavorites,
    favorites,
    loading,
    loadingQuantity,
  } = useAppContext();

  const Find = card.find((item) => item.id === id);
  const FindFavorites = favorites.find((item) => item.id === id);

  function update(count: number) {
    updateQuantity({ id: id || "", quantity: count });
  }

  return (
    <>
      <div className="fixed right-0 left-0 bottom-0 flex justify-between items-center bg-white px-4 py-3 dark:bg-gray-900 z-50 md:hidden">
        {count > 0 ? (
          !!Find ? (
            <button
              type="button"
              className="bg-color-danger-200 hover:bg-color-danger-100 rounded-md px-4 py-2 transition-all duration-300 text-gray-50"
              onClick={() => {
                removeFromCart(id);
              }}
            >
              {loading ? (
                <span className="mr-3 size-5 animate-spin ...">
                  درحال حذف کردن
                </span>
              ) : (
                "حذف از سبد خرید"
              )}
            </button>
          ) : (
            <Button
              onClick={() => {
                addToCart({
                  id,
                  count,
                  image: images.split("***")[0],
                  discount,
                  name,
                  price,
                  quantity: 1,
                });
              }}
            >
              {loading ? (
                <span className="mr-3 size-5 animate-spin"></span>
              ) : (
                "افزودن به سبد خرید"
              )}
            </Button>
          )
        ) : (
          <h3 className="bg-color-danger-200 text-lg px-10 py-2 text-center text-gray-50 rounded-md">
            ناموجود
          </h3>
        )}
        <div className="flex flex-col">
          {price && price > 0 && (
            <div className="flex justify-between items-center">
              <h3 className="text-gray-400 line-through decoration-2 decoration-color-danger-200">
                {formatWithCommas(price)}
              </h3>

              <span
                className={`bg-color-danger-200 text-gray-50 rounded-full size-6 flex justify-center items-center text-[12px] ${
                  price === 0 && "opacity-0"
                }`}
              >
                {((discount / price) * 100).toFixed(0)}%
              </span>
            </div>
          )}
          <h3 className=" text-color-success-200 font-bold ">
            <span>{formatWithCommas(discount)}</span>
            <span>تومان</span>
          </h3>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 bg-white p-8 h-full dark:bg-gray-900 ">
          <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-5 ">
            <div className=" w-full md:flex flex-col hidden">
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => {
                    if (FindFavorites) {
                      try {
                        (async () => {
                          await removeFromFavorites(id);
                          toast.success(
                            "با موفقیت از لیست مورد علاقه ها حذف شد"
                          );
                        })();
                      } catch {
                        toast.error("نتوانست از لیست مورد علاقه ها حذف شود");
                      }
                    } else {
                      try {
                        (async () => {
                          await addToFavorites({
                            id,
                            count,
                            discount,
                            image: images.split("***")[0],
                            name,
                            price,
                          });
                          toast.success(
                            "با موفقیت به لیست مورد علاقه ها اضافه شد"
                          );
                        })();
                      } catch {
                        toast.error("نتوانست به لیست مورد علاقه ها اضافه شود");
                      }
                    }
                  }}
                >
                  <Heart />
                </button>
                <button
                  type="button"
                  onClick={() => {
                    try {
                      navigator.clipboard.writeText(window.location.href);
                      toast.success("آدرس با موفقیت ذخیره شد");
                    } catch {
                      toast.error("آدرس نتوانست ذخیره شود");
                    }
                  }}
                >
                  <Copy />
                </button>
              </div>
              <SliderThumbs images={images.split("***")} />
            </div>
            <div className="flex flex-col  md:hidden">
              <div className="flex gap-3">
                <button type="button">
                  <Heart />
                </button>
                <button
                  type="button"
                  onClick={() => {
                    try {
                      navigator.clipboard.writeText(window.location.href);
                      toast.success("آدرس با موفقیت ذخیره شد");
                    } catch {
                      toast.error("آدرس نتوانست ذخیره شود");
                    }
                  }}
                >
                  <Copy />
                </button>
              </div>
              <div className=" w-full aspect-square grid">
                <Slider images={images.split("***")} />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="md:text-xl dark:text-gray-50">{name}</h3>

              <div className="flex gap-14 items-center">
                <h3 className="text-color-success-200 text-sm">
                  {comments.length} دیدگاه
                </h3>
                {newProduct && (
                  <h3 className="text-color-danger-200 rounded-md text-[15px] font-bold ">
                    جدید
                  </h3>
                )}
              </div>

              <div className="flex gap-1 justify-start items-start sm:items-end">
                <Like />
                <h3 className="text-gray-400 text-sm">
                  20% از خریداران، خرید این کالا را پیشنهاد کرده‌اند
                </h3>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="dark:text-gray-50 mb-3">ویژگی های محصول</h3>
                {specifications
                  .slice(0, 3)
                  .map(({ key, value }: { key: string; value: string }) => (
                    <div key={key} className="flex items-center gap-1">
                      <h3 className="text-gray-500 dark:text-gray-400">
                        {key}
                      </h3>
                      <h3 className="text-gray-500 dark:text-gray-400">:</h3>
                      <h3 className=" dark:text-gray-50">{value}</h3>
                    </div>
                  ))}
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex gap-3">
                <h3 className="dark:text-gray-50 text-lg">رنگ : </h3>
                {colors.split("-").map((color, index) => (
                  <button
                    key={index}
                    className={`relative size-7 rounded-full border border-gray-40 ${
                      color === colorSelect &&
                      "before:absolute before:contents-[''] before:w-5 before:h-3 before:border-b-4 before:border-l-4 before:border-gray-200 before:left-[6px] before:top-1 -rotate-45"
                    }`}
                    style={{ backgroundColor: color }}
                    disabled={color === colorSelect}
                    onClick={() => {
                      setColorSelect(color);
                    }}
                  ></button>
                ))}
              </div>

              <div className="flex justify-start gap-2 items-center px-5 py-3 rounded-md bg-[#e7f7f2]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6 text-color-success-200"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                  />
                </svg>
                <h3 className="text-color-success-200">
                  تضمین سلامت فیزیکی و اصالت کالا
                </h3>
              </div>
              <div className="flex justify-between items-center">
                <Counter
                  maxCount={count}
                  setCounter={update}
                  quantity={count > 0 ? Find?.quantity || 1 : 0}
                  loading={loadingQuantity}
                  disabled={!Find?.id}
                />
                <div className="flex flex-col">
                  {price && price > 0 && (
                    <h3 className="text-gray-400 line-through decoration-2 decoration-color-danger-200 ">
                      {formatWithCommas(price)}
                    </h3>
                  )}
                  <h3 className=" text-color-success-200 font-bold text-lg">
                    <span>{formatWithCommas(discount)}</span>
                    <span>تومان</span>
                  </h3>
                </div>
              </div>
              {count > 0 ? (
                !!Find ? (
                  <button
                    type="button"
                    className="bg-color-danger-200 hover:bg-color-danger-100 rounded-md px-4 py-2 transition-all duration-300 text-gray-50"
                    onClick={() => {
                      removeFromCart(id);
                    }}
                  >
                    {loading ? (
                      <span className="mr-3 size-5 animate-spin ...">
                        درحال حذف کردن
                      </span>
                    ) : (
                      "حذف از سبد خرید"
                    )}
                  </button>
                ) : (
                  <Button
                    onClick={() => {
                      addToCart({
                        id,
                        count,
                        image: images.split("***")[0],
                        discount,
                        name,
                        price,
                        quantity: 1,
                      });
                    }}
                  >
                    {loading
                      ? "درحال افزودن به سبد خرید"
                      : "افزودن به سبد خرید"}
                  </Button>
                )
              ) : (
                <h3 className="bg-color-danger-200 text-lg w-full py-2 text-center text-gray-50 rounded-md">
                  ناموجود
                </h3>
              )}
            </div>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <div className="w-full flex border p-3 rounded-md gap-2 justify-start items-center dark:border-gray-700">
              <Clock />
              <h3 className="text-gray-400 ">هفت روز ضمانت بازگشت کالا</h3>
            </div>

            <div className="w-full flex border p-3 rounded-md gap-2 justify-start items-center dark:border-gray-700">
              <Tick />
              <h3 className="text-gray-400 ">تضمین اصالت کالا</h3>
            </div>

            <div className="w-full flex border p-3 rounded-md gap-2 justify-start items-center dark:border-gray-700">
              <Suport />
              <h3 className="text-gray-400 ">پشتیبانی 24 ساعته</h3>
            </div>

            <div className="w-full flex border p-3 rounded-md gap-2 justify-start items-center dark:border-gray-700">
              <Truck />
              <h3 className="text-gray-400 ">تحویل فوری</h3>
            </div>
          </div>
        </div>

        <Multi
          caption={about}
          specifications={specifications}
          comments={comments}
        />
      </div>
    </>
  );
}

export default PageShopId;
