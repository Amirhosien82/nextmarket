import SliderShop from "@/app/_components/SliderShop";
import Title from "@/app/_components/Title";
import NavLink from "@/app/_components/NavLink";

interface PropsCarouselShop {
  search: string;
  title: string;
  products: {
    images: {
      id: string;
      url: string;
      productId: string;
    }[];
    id: string;
    name: string;
    price: number | null;
    discount: number;
    count: number;
    about: string;
    special: boolean;
    new: boolean;
    date: Date;
    sold: number;
    colors: string;
    props: string;
  }[];
}

function CarouselShop({ title, products, search }: PropsCarouselShop) {
  return (
    <div className="flex flex-col gap-5">
      <div className="w-full flex justify-between items-center">
        <Title>{title}</Title>
        <NavLink href={search} hover={false} lg={true}>
          مشاهده همه
        </NavLink>
      </div>
      <SliderShop products={products} />
    </div>
  );
}

export default CarouselShop;
