// import AnimatedText from '@/components/theme/AnimatedText'
// import { Button } from '@/components/ui/button'
// import Image from 'next/image'
// import Link from 'next/link'
// import React from 'react'

import ScrollOverlap from "@/components/theme/ScrollOverlap";

// export default function About() {
//   return (
//     <div>    
// <div className='grid grid-cols-1 md:grid-cols-2 mx-3 lg:mx-20 mt-10'>

//     {/* section 1  */}
// <Image src={'/images/backimg.jpg'} alt="" width={500} height={500} 
//     className="w-96 h-80 md:h-[400px] rounded-tl-3xl rounded-br-3xl border shadow-lg
//      shadow-gray-200 mx-auto"/>

//  {/* section 2   */}
//  <div>
//  <h1 className="text-xl md:text-3xl font-bold text-center">Mussarat Shamsher <br />
//  Building Tech that Matters</h1>

//  <div className="flex justify-center items-center"> <AnimatedText/></div>

 

//  <Link href='/'><Button className=' w-16 md:w-28 h-10 border border-gray-400 shadow-lg
//   shadow-gray-400 rounded-xl mt-5'>Home</Button> </Link>      

//   </div>  
//   {/* section 2 end  */}

//     </div> 
//     </div>
//   )
// }





export default function About() {
  return (
    <main className="h-auto overflow-hidden items-center justify-center">
      {/* section 1 */}
      <ScrollOverlap bgColor="bg-blue-700">
        <div className="flex flex-col items-center justify-center h-auto">
        <h1 className="text-xl md:text-3xl font-bold text-center" id="googlefont">Meet Mussarat Shamsher <br />
 Building Tech that Matters</h1>
        <p className='text-justify mx-20 text-base font-thin'>I’m a passionate AI Developer with a Master’s degree in Economics, now fully immersed in the evolving 
  world of tech and innovation. As a learner in the Certified Cloud Applied Generative AI Engineer & Developer course, I’m bridging 
  the gap between data-driven economics and cutting-edge AI solutions.
With a solid foundation in HTML, CSS, Tailwind CSS, Bootstrap, TypeScript, Next.js, and Python, I specialize in building modern,
 responsive, and visually striking web applications. I also work extensively with ShadCN UI components, animation libraries,
  and design systems that elevate user experiences across devices.Currently exploring the realms of Agentic AI and the OpenAI SDK, 
  I’m focused on creating intelligent, scalable solutions that solve real-world problems — from dynamic web apps to generative AI-powered
   tools. </p>
   <hr className='mx-5 md:mx-10 mt-5'/>
 <hr className='mx-5 md:mx-10'/>
      </div>
      </ScrollOverlap>

      {/* section 2 */}
      <ScrollOverlap bgColor="bg-green-700">
       <h1 className="text-xl md:text-3xl font-bold text-center" id="googlefont">My Tech Stack</h1>
      </ScrollOverlap>
      {/* section 3 */}
      <ScrollOverlap bgColor="bg-green-700">
        <h1 className="text-xl md:text-3xl font-bold text-center" id="googlefont">Services I Provide </h1>
      </ScrollOverlap>

      {/* section 4 */}
      <ScrollOverlap bgColor="bg-purple-700">
        Why Hire Me?
        Whether you're looking for a frontend wizard, a full-stack problem solver, or someone who can integrate AI into your 
business ideas — I bring creativity, clarity, and commitment to every project.Let’s build something impactful together.
      </ScrollOverlap>
      
    </main>
  )
}
