import SliderShop from "@/app/_components/SliderShop";
import Title from "@/app/_components/Title";
import NavLink from "@/app/_components/NavLink";

interface PropsCarouselShop {
  title: string;
}

function CarouselShop({ title }: PropsCarouselShop) {
  return (
    <div className="flex flex-col gap-5">
      <div className="w-full flex justify-between items-center">
        <Title>{title}</Title>
        <NavLink href="/" hover={false} lg={true}>
          مشاهده همه
        </NavLink>
      </div>
      <SliderShop />
    </div>
  );
}

export default CarouselShop;
