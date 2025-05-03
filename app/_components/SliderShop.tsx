"use client";

import Product from "@/app/_components/Product";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

interface SliderShopProps {
  products: {
    images: {
      url: string;
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

function SliderShop({ products = [] }: SliderShopProps) {
  return (
    <div className="w-full h-auto grid">
      <Swiper
        breakpoints={{
          0: { slidesPerView: 2 },
          576: { slidesPerView: 3 },
          768: { slidesPerView: 3 },
          992: { slidesPerView: 4 },
          1200: { slidesPerView: 5 },
          1400: { slidesPerView: 7 },
        }}
        spaceBetween={10}
        navigation={true}
        autoplay={{ delay: 1500 }}
        modules={[Navigation, Autoplay]}
        className="w-full h-full"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <Product product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SliderShop;
