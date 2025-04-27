import Slider from "@/app/_components/Slider";
import CarouselShop from "@/app/_components/CarouselShop";
import CarouselCard from "@/app/_components/CarouselCard";
import Category from "@/app/_components/Category";

async function Page() {
  const [specialProducts, newProducts, bestSellerProducts] = await Promise.all([
    fetch(
      "http://localhost:3000/api/products?special_products=1&page=1&limit=15"
    ).then((res) => res.json()),
    fetch("http://localhost:3000/api/products?orderby=0&page=1&limit=15").then(
      (res) => res.json()
    ),
    fetch("http://localhost:3000/api/products?orderby=1&page=1&limit=15").then(
      (res) => res.json()
    ),
  ]);

  return (
    <div className="flex flex-col gap-10">
      <Slider />
      <CarouselShop title="پیشنهادات ویژه" />
      <CarouselShop title="جدید ترین محصولات" />
      <Category />
      <CarouselShop title="پر فروش ترین محصولات" />
      <CarouselCard title="مطالب خواندنی" />
    </div>
  );
}

export default Page;
