"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, FreeMode, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/free-mode";
import "./SwiperGallery.css"; 

import type { Swiper as SwiperType } from "swiper";
import Image from "next/image";

const images = [
  {
    src: "/images/img1.JPG",
    link: "https://functional-hackthon--two.vercel.app/",
  },
  {
    src: "/images/img2.JPG",
    link: "https://figma-assign-ecommerce.vercel.app/",
  },
  {
    src: "/images/img3.JPG",
    link: "https://hackthonecommerce.vercel.app/",
  },
  {
    src: "/images/img1.JPG",
    link: "https://functional-hackthon--two.vercel.app/",
  }
];

export default function SwiperEcom() {
  const [thumbsSwiper, setThumbsSwiper] = React.useState<SwiperType | null>(null);

  return (
    <div className="container max-w-[1440px] mx-auto">
      <div className="gallery-wrapper">
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          } as React.CSSProperties & Record<string, string>}
          modules={[Navigation, Thumbs, Autoplay]}
          spaceBetween={10}
          navigation
          autoplay={{ delay: 1500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          thumbs={{ swiper: thumbsSwiper }}
          className="mySwiper2"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <a href={image.link} target="_blank" rel="noopener noreferrer">
                <Image src={image.src} alt={`Slide ${index + 1}`} width={100} height={100}/>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>

        <Swiper
          onSwiper={setThumbsSwiper}
          modules={[FreeMode, Thumbs]}
          spaceBetween={10}
          slidesPerView={4}
          freeMode
          watchSlidesProgress
          className="mySwiper"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <a href={image.link} target="_blank" rel="noopener noreferrer">
                <Image src={image.src} alt={`Thumb ${index + 1}`} width={100} height={100}/>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
