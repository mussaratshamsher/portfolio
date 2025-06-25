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
    src: "/images/img8.JPG",
    link: "https://portfolio-mussarat-shamsher.vercel.app/",
  },
  {
    src: "/images/img9.JPG",
    link: "https://portfolio-tailwind-blush.vercel.app/ ",
  },
  {
    src: "/images/img10.JPG",
    link: "https://css-portfolio-tan.vercel.app/",
  },
  {
    src: "/images/img11.JPG",
    link: "https://test-python-web.streamlit.app/",
  },
  {
    src: "/images/img12.JPG",
    link: "https://milestone1-personal-static-resume.vercel.app/",
  }
];

export default function SwiperPortfolio() {
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
                <Image src={image.src} alt={`Thumb ${index + 1}`} width={100} height={100}/>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
