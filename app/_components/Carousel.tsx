"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Carousel() {
  return (
    <Swiper
      pagination={true}
      navigation={true}
      autoplay={{ delay: 2000 }}
      modules={[Pagination, Navigation, Autoplay]}
      className="w-full h-full rounded-lg md:rounded-2xl"
    >
      <SwiperSlide className="relative w-full h-full">
        <Image
          src="/imgs/main-slider-1.jpg"
          fill
          alt="image slider"
        />
      </SwiperSlide>
      <SwiperSlide className="relative w-full h-full">
        <Image
          src="/imgs/main-slider-2.jpg"
          fill
          alt="image slider"
        />
      </SwiperSlide>
      <SwiperSlide className="relative w-full h-full">
        <Image
          src="/imgs/main-slider-3.jpg"
          fill
          alt="image slider"
        />
      </SwiperSlide>
    </Swiper>
  );
}

export default Carousel;
