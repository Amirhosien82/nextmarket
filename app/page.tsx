import Slider from "@/app/_components/Slider";
import CarouselShop from "@/app/_components/CarouselShop";

function Page() {
  return (
    <div className="flex flex-col gap-10">
      <Slider />
      <CarouselShop title="پیشنهادات ویژه" />
      <CarouselShop title="جدید ترین محصولات" />
    </div>
  );
}

export default Page;
