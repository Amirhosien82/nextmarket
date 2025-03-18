import Image from "next/image";
import Carousel from "./Carousel";

function Slider() {
  return (
    <div className="grid grid-cols-1 aspect-video md:grid-cols-[2fr,1fr] gap-5 md:aspect-[3/1]">
      <Carousel />
      <div className="h-full flex flex-col gap-5">
        <div className="relative w-full h-1/2">
          <Image fill src="/./imgs/main-banner-top.jpg" className="rounded-2xl" alt="img" />
        </div>
        <div className="relative w-full h-1/2 ">
          <Image fill src="/./imgs/main-bot.gif" className="rounded-2xl" alt="img" />
        </div>
      </div>
    </div>
  );
}

export default Slider;
