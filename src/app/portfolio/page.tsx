import ProjectSlider from '@/components/theme/ProjectSlider'
import SkillProgress from '@/components/theme/SkillProgress'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

export default function Portfolio() {
  return (
    <div className='p-3 md:p-0'>
    <div className='grid grid-cols-1 md:grid-cols-2 mt-10 md:mt-20 md:px-20'>

{/* section 1  */}

   <div>  <h1 className='text-lg md:text-2xl'><b>My Story</b></h1>
    <p className='my-5 '> I possess a strong foundation in web development, with expertise in several key technologies.
         My proficiency in HTML and CSS ensures that I can create visually appealing and well-structured web 
         pages. I have a solid command of Tailwind CSS, which allows me to design responsive layouts efficiently 
         with utility-first styling. My knowledge of TypeScript and JavaScript empowers me to develop dynamic and
          interactive web applications, ensuring robust functionality and type safety. Additionally, I am skilled 
          in Next.js, enabling me to build modern, server-rendered applications that enhance performance and SEO. 
          My diverse skill set allows me to contribute effectively to front-end development and deliver 
          high-quality user experiences.</p>
   </div>
  {/* section 2  */}
   <div>
    <SkillProgress/>
      </div>

    </div>
    {/* skills end   */}

<hr className='mx-5 md:mx-10'/>
<hr className='mx-5 md:mx-10'/>

{/* projects section  */}
<div className='grid grid-cols-1 md:grid-cols-2 md:px-20 py-5 gap-10'>

<div> <ProjectSlider/></div>

<div> <h1 className='text-lg md:text-2xl font-bold mt-3 md:mt-10 mb-2 md:mb-5 p-2'>My Projects</h1>
<p>In my recent web development projects, I have effectively utilized a combination of HTML, CSS, Tailwind CSS, 
  TypeScript, JavaScript, and Next.js to create responsive and visually appealing user interfaces. By employing
  Tailwind CSS, I enhanced the design process with utility-first styling, resulting in fast and maintainable code.
 My proficiency in TypeScript ensured robust and error-free applications, while JavaScript allowed me to 
implement dynamic functionalities. One standout project involved developing a portfolio website using Next.js,
where I integrated server-side rendering for improved performance and SEO. These experiences not only honed my 
 technical skills but also reinforced my ability to deliver high-quality web solutions.</p>
 <Link href='/'><Button className='bg-[#f03a6a] hover:bg-[#e0577c] hover:text-white duration-300
 w-16 md:w-28 h-10 rounded-2xl mt-2 md:mt-5 shadow-md hover:font-bold'>Home</Button></Link>
</div>

</div>
    </div>
  )
}
