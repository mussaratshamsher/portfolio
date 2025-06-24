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
    src: "/images/img23.JPG",
    link: "https://pythonchallange-mystery-adventure.streamlit.app/",
  },
  {
    src: "/images/img24.JPG",
    link: "https://image-to-ascii-art-convertor.streamlit.app/",
  },
  {
    src: "/images/img25.JPG",
    link: "https://pythonchallange-mood-analyzer.streamlit.app/",
  },
  {
    src: "/images/img26.JPG",
    link: "https://number-guess-game.streamlit.app/",
  },
  {
    src: "/images/img27.JPG",
    link: "https://joke-generator-by-musssarat.streamlit.app/",
  },
];

export default function SwiperGames() {
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
