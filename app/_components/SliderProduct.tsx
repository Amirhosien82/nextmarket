"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface SliderProps {
  images: string[];
}
function Slider({ images }: SliderProps) {
  return (
    <Swiper
      pagination={true}
      modules={[Pagination]}
      className="w-full h-full rounded-lg md:rounded-2xl"
    >
      {images.map((img, index) => (
        <SwiperSlide key={index} className="relative w-full h-full">
          <Image src={img} fill alt="image slider" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Slider;
