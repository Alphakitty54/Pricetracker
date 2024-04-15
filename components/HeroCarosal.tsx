"use client";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

const heroImages = [
  { imgUrl: "/asset/images/hero-1.svg", alt: "smartwatch" },
  { imgUrl: "/asset/images/hero-2.svg", alt: "bag" },
  { imgUrl: "/asset/images/hero-3.svg", alt: "lamp" },
  { imgUrl: "/asset/images/hero-4.svg", alt: "air fryer" },
  { imgUrl: "/asset/images/hero-5.svg", alt: "chair" },
];

const HeroCarosal = () => {
  return (
    <div>
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        interval={2000}
        showArrows={false}
        showStatus={false}
      >
        {heroImages.map((image) => (
          <Image
            src={image.imgUrl}
            alt={image.alt}
            width={400}
            height={400}
            className="object-contain"
            key={image.alt}
          />
        ))}
      </Carousel>
      <Image
        src="/asset/icons/hand-drawn-arrow.svg"
        alt="arrow"
        width={175}
        height={175}
        className="max-xl:hidden absolute -leftl-[15%] bottom=0 z"
      />
    </div>
  );
};

export default HeroCarosal;
