"use client"

import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import Slider from "react-slick";
import Link from 'next/link';

export default function ProjectSlider() {

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    delay: 500,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    
  };

  return (
    <div className='container max-w-lg mx-auto'>
<Slider {...settings}>
      <div>
        <h3><Link href='https://functional-hackthon-jet.vercel.app/' target='blank'>
        <Image src={'/images/project1.JPG'} alt='' width={2000} height={2000}
        className='shadow-lg rounded-md'/></Link></h3>
      </div>
      <div>
      <h3><Link href='https://hiredevelopers-hiredev.vercel.app/' target='blank'>
      <Image src={'/images/project2.JPG'} alt='' width={2000} height={2000}
       className='shadow-lg rounded-md'/></Link></h3>
      </div>
      <div>
      <h3><Link href='https://resturant-flavourfusion.vercel.app/' target='blank'>
      <Image src={'/images/project3.JPG'} alt='' width={2000} height={2000}
       className='shadow-lg rounded-md'/></Link></h3>
      </div>
      <div>
      <h3><Link href='https://ui-ux-hackthon-lac.vercel.app/' target='blank'>
      <Image src={'/images/project4.JPG'} alt='' width={2000} height={2000}
       className='shadow-lg rounded-md'/></Link></h3>
      </div>
      <div>
      <h3><Link href='https://figma-assign-ecommerce.vercel.app/' target='blank'>
      <Image src={'/images/project5.JPG'} alt='' width={2000} height={2000}
       className='shadow-lg rounded-md'/></Link></h3>
      </div>
      <div>
      <h3><Link href='https://karachi-tourist-places.vercel.app/' target='blank'>
      <Image src={'/images/project6.JPG'} alt='' width={2000} height={2000}
       className='shadow-lg rounded-md'/></Link></h3>
      </div>
      <div>
      <h3><Link href='https://css-portfolio-tan.vercel.app/' target='blank'>
        <Image src={'/images/project7.JPG'} alt='' width={2000} height={2000}
         className='shadow-lg rounded-md'/></Link></h3>
      </div>
      <div>
      <h3><Link href='https://figma-assign2-iota.vercel.app/' target='blank'>
      <Image src={'/images/project8.JPG'} alt='' width={2000} height={2000}
       className='shadow-lg rounded-md'/></Link></h3>
      </div>
      
    </Slider>





    </div>
  )
}
