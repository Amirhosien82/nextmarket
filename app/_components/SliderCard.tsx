"use client";

import Card from "@/app/_components/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

function SliderCard() {
  return (
    <div className="w-full h-auto grid">
      <Swiper
        breakpoints={{
          0: { slidesPerView: 1 },
          400: { slidesPerView: 2 },
          768: { slidesPerView: 2 },
          992: { slidesPerView: 3 },
          1200: { slidesPerView:4 },
        }}
        spaceBetween={250}
        navigation={true}
        autoplay={{ delay: 1500 }}
        modules={[Navigation, Autoplay]}
        className="w-full h-full"
      >
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default SliderCard;
