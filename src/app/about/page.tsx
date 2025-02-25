import AnimatedText from '@/components/theme/AnimatedText'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function About() {
  return (
    <div>    
<div className='grid grid-cols-1 md:grid-cols-2 mx-3 lg:mx-20 mt-10'>

    {/* section 1  */}
<Image src={'/images/backimg.jpg'} alt="" width={500} height={500} 
    className="w-96 h-80 md:h-[400px] rounded-tl-3xl rounded-br-3xl border shadow-lg
     shadow-gray-200 mx-auto"/>

 {/* section 2   */}
 <div>
 <h1 className="text-xl md:text-3xl font-bold text-center">Mussarat Shamsher</h1>
 <div className="flex justify-center items-center"> <AnimatedText/></div>

 <p>As a passionate Masters in Economics graduate, I thrive at the intersection of data and innovation.
  Currently, I am diving deep into the world of technology as I pursue Certified Cloud Applied Generative
  AI Engineer and Developer course, where I am honing my skills to transform complex economic models into 
  scalable, cloud-based solutions.With a strong analytical mindset and a flair for creative 
  problem-solving, I leverage my economic expertise to drive impactful AI-driven strategies.
   My journey is fueled by commitment to continuous learning and desire to harness the power of 
   generative AI to tackle real-world challenges.</p>

 <Link href='/'><Button className=' w-16 md:w-28 h-10 border border-gray-400 shadow-lg
  shadow-gray-400 rounded-xl mt-5'>Home</Button> </Link>      

  </div>  
  {/* section 2 end  */}

    </div> 
    </div>
  )
}
