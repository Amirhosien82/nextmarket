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

interface PageProps {
  params: { ShopId: string };
}

const fakeProduct = {
  images: [
    "https://roti-preview.taymakz.ir/assets/images/products/p1.png",
    "https://roti-preview.taymakz.ir/assets/images/products/p2.png",
    "https://roti-preview.taymakz.ir/assets/images/products/p3.png",
  ],
  title: "کفش پیاده روی مردانه نیو بالانس مدل Mdrftlm2",
  specifications: [
    { key: "جنس", value: "پارچه" },
    { key: "جنس", value: "پارچه" },
    { key: "جنس", value: "پارچه" },
  ],

  comments: [
    {
      suggestion: true,
      like: 100,
      dislike: 120,
      comment: "با این قیمت مناسبه و من پیشنهاد میکنم",
      title: "قیمت محصول",
    },
    {
      title: "قیمت محصول",
      suggestion: false,
      like: 100,
      dislike: 120,
      comment: "به درد نمیخوره اصلا مناسب نیست به شما هم پیشنهاد میکنم نخرید",
    },
    {
      title: "قیمت محصول",

      suggestion: true,
      like: 100,
      dislike: 120,
      comment: "با این قیمت مناسبه و من پیشنهاد میکنم",
    },
    {
      title: "قیمت محصول",

      suggestion: true,
      like: 100,
      dislike: 120,
      comment: "با این قیمت مناسبه و من پیشنهاد میکنم",
    },
    {
      suggestion: true,
      title: "قیمت محصول",
      like: 100,
      dislike: 120,
      comment: "با این قیمت مناسبه و من پیشنهاد میکنم",
    },
    {
      suggestion: true,
      like: 100,
      title: "قیمت محصول",
      dislike: 120,
      comment: "با این قیمت مناسبه و من پیشنهاد میکنم",
    },
    {
      suggestion: true,
      title: "قیمت محصول",
      like: 100,
      dislike: 120,
      comment: "با این قیمت مناسبه و من پیشنهاد میکنم",
    },
    {
      suggestion: true,
      title: "قیمت محصول",
      like: 100,
      dislike: 120,
      comment: "با این قیمت مناسبه و من پیشنهاد میکنم",
    },
    {
      suggestion: true,
      like: 100,
      dislike: 120,
      comment: "با این قیمت مناسبه و من پیشنهاد میکنم",
      title: "قیمت محصول",
    },
    {
      suggestion: true,
      like: 100,
      title: "قیمت محصول",
      dislike: 120,
      comment: "با این قیمت مناسبه و من پیشنهاد میکنم",
    },
    {
      suggestion: true,
      like: 100,
      title: "قیمت محصول",

      dislike: 120,
      comment: "با این قیمت مناسبه و من پیشنهاد میکنم",
    },
    {
      suggestion: true,
      like: 100,
      dislike: 120,
      title: "قیمت محصول",

      comment: "با این قیمت مناسبه و من پیشنهاد میکنم",
    },
  ],

  caption:
    "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
};

function Page({ params }: PageProps) {
  const { ShopId } = params;

  const { images, title, caption, specifications, comments } = fakeProduct;

  return (
    <>
      <div className="fixed right-0 left-0 bottom-0 flex justify-between items-center bg-white px-4 py-3 dark:bg-gray-900 z-50 md:hidden">
        <Button onClick={() => {}}>افزودن به سبد خرید</Button>
        <div className="flex flex-col">
          <div className="flex justify-between items-center">
            <h3 className="text-gray-400 line-through decoration-2 decoration-color-danger-200 ">
              100,000
            </h3>
            <span className="bg-color-danger-200 text-gray-50 rounded-full size-6 flex justify-center items-center text-[12px]">
              10%
            </span>
          </div>
          <h3 className=" text-color-success-200 font-bold ">
            <span>80,000</span>
            <span>تومان</span>
          </h3>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 bg-white p-8 h-full dark:bg-gray-900 ">
          <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-5 ">
            <div className=" w-full md:flex flex-col hidden">
              <div className="flex gap-4">
                <button type="button">
                  <Heart />
                </button>
                <button type="button">
                  <Copy />
                </button>
              </div>
              <SliderThumbs images={images} />
            </div>
            <div className="flex flex-col  md:hidden">
              <div className="flex gap-3">
                <button type="button">
                  <Heart />
                </button>
                <button type="button">
                  <Copy />
                </button>
              </div>
              <div className=" w-full aspect-square grid">
                <Slider images={images} />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="md:text-xl dark:text-gray-50">{title}</h3>
              <div className="flex gap-8">
                <h3 className="text-color-success-200 text-sm">
                  {ShopId}کد کالا :
                </h3>
                <h3 className="text-color-success-200 text-sm">
                  {comments.length} دیدگاه
                </h3>
              </div>
              <div className="flex gap-1 justify-start items-start sm:items-end">
                <Like />
                <h3 className="text-gray-400 text-sm">
                  80% از خریداران، خرید این کالا را پیشنهاد کرده‌اند
                </h3>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="dark:text-gray-50 mb-3">ویژگی های محصول</h3>
                {specifications.map(({ key, value }) => (
                  <div key={key} className="flex items-center gap-1">
                    <h3 className="text-gray-500 dark:text-gray-400">{key}</h3>
                    <h3 className="text-gray-500 dark:text-gray-400">:</h3>
                    <h3 className=" dark:text-gray-50">{value}</h3>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex justify-start gap-2 items-center px-5 py-3 rounded-md bg-[#e7f7f2]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
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
                <Counter id={+ShopId} quantity={1} />
                <div className="flex flex-col">
                  <h3 className="text-gray-400 line-through decoration-2 decoration-color-danger-200 ">
                    100,000
                  </h3>
                  <h3 className=" text-color-success-200 font-bold text-lg">
                    <span>80,000</span>
                    <span>تومان</span>
                  </h3>
                </div>
              </div>
              <Button onClick={() => {}}>افزودن به سبد خرید</Button>
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
          caption={caption}
          specifications={specifications}
          comments={comments}
        />
      </div>
    </>
  );
}

export default Page;
