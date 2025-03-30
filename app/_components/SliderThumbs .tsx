"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Image from "next/image";

interface SliderProps {
  images: string[];
}

export default function SliderThumbs({ images }: SliderProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <>
      <Swiper
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        modules={[FreeMode, Thumbs]}
        className="w-4/5 aspect-square rounded-lg md:rounded-2xl"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index} className="relative w-full h-full">
            <Image 
              src={img} 
              fill 
              alt="image slider" 
              className="object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        slidesPerView={4}
        spaceBetween={8}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="w-full mt-2"
      >
        {images.map((img, index) => (
          <SwiperSlide
            key={index}
            className="relative border p-1 rounded-md before:contents-[''] before:absolute before:inset-0 before:backdrop-blur-[2px]"
          >
            <Image 
              src={img} 
              width={150} 
              height={150} 
              alt="image slider" 
              className="object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}