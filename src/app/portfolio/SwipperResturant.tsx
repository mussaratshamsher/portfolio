"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, FreeMode, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/free-mode";
import "./SwiperGallery.css"; // Make sure this is only styling and not breaking SSR

import type { Swiper as SwiperType } from "swiper";

const images = [
  {
    src: "/images/img4.JPG",
    link: "https://resturant-flavourfusion.vercel.app/",
  },
  {
    src: "/images/img5.JPG",
    link: "https://ui-ux-hackthon-lac.vercel.app/",
  },
  {
    src: "/images/img6.JPG",
    link: "https://hiredevelopers-hiredev.vercel.app/",
  },
  {
    src: "/images/img7.JPG",
    link: "https://karachi-tourist-places.vercel.app/",
  }
];

export default function SwiperResturant() {
  const [thumbsSwiper, setThumbsSwiper] = React.useState<SwiperType | null>(null);

  return (
    <div className="container max-w-[1440px] mx-auto">
      <div className="gallery-wrapper">
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          } as React.CSSProperties & Record<string, any>}
          modules={[Navigation, Thumbs, Autoplay]}
          spaceBetween={10}
          navigation
          autoplay={{ delay: 1500, disableOnInteraction: false }}
          thumbs={{ swiper: thumbsSwiper }}
          className="mySwiper2"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <a href={image.link} target="_blank" rel="noopener noreferrer">
                <img src={image.src} alt={`Slide ${index + 1}`} />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>

        <Swiper
         autoplay={{ delay: 2500, disableOnInteraction: true }}
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
                <img src={image.src} alt={`Thumb ${index + 1}`} />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
