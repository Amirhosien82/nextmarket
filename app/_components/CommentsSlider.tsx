"use client";

import Comment from "@/app/_components/Comment";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

interface SliderProps {
  comments: {
    suggestion: boolean;
    comment: string;
    like: number;
    dislike: number;
    title: string;
  }[];
}

function Slider({ comments }: SliderProps) {
  return (
    <div className="w-full h-auto grid">
      <Swiper
        breakpoints={{
          0: { slidesPerView: 1 },
          400: { slidesPerView: 2 },
          576: { slidesPerView: 3 },
          992: { slidesPerView: 4 },
          1200: { slidesPerView: 6 },
        }}
        autoplay={{ delay: 3000 }}
        modules={[Autoplay]}
        spaceBetween={10}
        className="w-full h-full"
      >
        {comments.map((comment, i) => (
          <SwiperSlide key={i}>
            <Comment comments={comment} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider;
