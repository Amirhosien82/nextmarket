import Slider from "@/app/_components/Slider";
import CarouselShop from "@/app/_components/CarouselShop";
import CarouselCard from "@/app/_components/CarouselCard";
import Category from "@/app/_components/Category";
import { getProducts } from "@/app/_lib/productService";

async function Page() {
  const [specialProducts, newProducts, bestSellerProducts] = await Promise.all([
    getProducts({ special_products: true, limit: 15 }),
    getProducts({ orderby: "0", limit: 15 }),
    getProducts({ orderby: "1", limit: 15 }),
  ]);

  return (
    <div className="flex flex-col gap-10">
      <Slider />
      <CarouselShop
        title="پیشنهادات ویژه"
        products={specialProducts.products}
        search={"/shop?special_products=1"}
      />
      <CarouselShop
        title="جدید ترین محصولات"
        products={newProducts.products}
        search={"/shop?orderBy=0"}
      />
      <Category />
      <CarouselShop
        title="پر فروش ترین محصولات"
        products={bestSellerProducts.products}
        search={"/shop?orderBy=1"}
      />
      <CarouselCard title="مطالب خواندنی" />
    </div>
  );
}

export default Page;
