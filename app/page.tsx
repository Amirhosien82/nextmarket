import Slider from "@/app/_components/Slider";
import CarouselShop from "@/app/_components/CarouselShop";
import CarouselCard from "@/app/_components/CarouselCard";

function Page() {
  return (
    <div className="flex flex-col gap-10">
      <Slider />
      <CarouselShop title="پیشنهادات ویژه" />
      <CarouselShop title="جدید ترین محصولات" />
      <CarouselCard title="مطالب خواندنی" />
    </div>
  );
}

export default Page;
