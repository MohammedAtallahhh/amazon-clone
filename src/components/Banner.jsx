import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";

const Banner = () => {
  const slides = [
    "https://links.papareact.com/gi1",
    "https://links.papareact.com/6ff",
    "https://links.papareact.com/7ma",
  ];

  return (
    <div className="relative">
      <div className="absolute w-full h-12 md:h-20 lg:h-32 bottom-0 z-20 bg-gradient-to-t from-gray-100 to-transparent" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        {slides.map((s) => (
          <div className="relative w-full h-[220px] md:h-[350px] lg:h-[450px] xl:h-[500px]">
            <Image priority src={s} alt="" layout="fill" />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
