import SliderCard from "@/app/_components/SliderCard";
import Title from "@/app/_components/Title";
import NavLink from "@/app/_components/NavLink";

interface PropsCarouselShop {
  title: string;
  blogs:
    | {
        blogs: {
          image: string;
          id: string;
          message: string;
          created_at: Date;
          view: number;
          hottest: boolean;
        }[];
        count: number | null;
      }
    | undefined;
}

function CarouselCard({ title, blogs }: PropsCarouselShop) {
  return (
    <div className="flex flex-col gap-5">
      <div className="w-full flex justify-between items-center">
        <Title>{title}</Title>
        <NavLink href="/blog" hover={false} lg={true}>
          مشاهده همه
        </NavLink>
      </div>
      <SliderCard blogs={blogs} />
    </div>
  );
}

export default CarouselCard;
