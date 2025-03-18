import SliderCard from "@/app/_components/SliderCard";
import Title from "@/app/_components/Title";
import NavLink from "@/app/_components/NavLink";

interface PropsCarouselShop {
  title: string;
}

function CarouselCard({ title }: PropsCarouselShop) {
  return (
    <div className="flex flex-col gap-5">
      <div className="w-full flex justify-between items-center">
        <Title>{title}</Title>
        <NavLink href="/" hover={false} lg={true}>
          مشاهده همه
        </NavLink>
      </div>
      <SliderCard />
    </div>
  );
}

export default CarouselCard;
