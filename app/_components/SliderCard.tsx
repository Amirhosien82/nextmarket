"use client";

import Card from "@/app/_components/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

interface ISliderCardProps {
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

function SliderCard({ blogs }: ISliderCardProps) {
  return (
    <div className="w-full h-auto grid">
      <Swiper
        breakpoints={{
          0: { slidesPerView: 1 },
          576: { slidesPerView: 2 },
          992: { slidesPerView: 3 },
          1200: { slidesPerView: 4 },
        }}
        spaceBetween={10}
        navigation={true}
        autoplay={{ delay: 1500 }}
        modules={[Navigation, Autoplay]}
        className="w-full h-full"
      >
        {blogs?.blogs.map((item) => (
          <SwiperSlide key={item.id}>
            <Card {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SliderCard;
