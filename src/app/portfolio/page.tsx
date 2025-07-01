
import SkillProgress from '@/components/theme/SkillProgress'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

import SwipperResturant from './SwipperResturant';
import SwipperEcom from './SwipperEcom';
import SwipperPortfolio from './SwipperPortfolio';
import SwipperEdu from './SwipperEdu';
import SwipperUtility from './SwipperUtility';
import SwipperGames from './SwipperGames';


export default function Portfolio() {
  return (
    <div className="p-3 md:px-5 lg:px-10 bg-white dark:bg-black text-black dark:text-white
    container max-w-[1440px] mx-auto">

      {/* Buttons for 2xl and below  */}
  <Link href="/">
    <Button className="bg-[#f03a6a] hover:bg-[#e0577c] hover:text-white duration-300 w-16 md:w-28 h-10 
    rounded-2xl shadow-md hover:font-bold mt-4 fixed top-3 left-5 lg:hidden"> Home</Button>
  </Link>
  {/* buttons end here  */}
    <div className="grid grid-cols-1 md:grid-cols-2 mt-10 md:mt-20">

{/* section 1  */}

   <div>  <h1 className='text-lg md:text-2xl'  id='googlefont'><b>My Story</b></h1>
    <p className='my-5 text-justify indent-10 md:indent-20 mx-2 md:mx-0'> I possess a strong foundation in web development, with expertise in 
  several key technologies. My proficiency in HTML and CSS ensures that I can create visually appealing and well-structured web 
 pages. I have a solid command of Tailwind CSS, which allows me to design responsive layouts efficiently with utility-first styling. 
 My knowledge of TypeScript empowers me to develop dynamic and interactive web applications, ensuring robust functionality and type safety.
 Additionally, I am skilled in Next.js, enabling me to build modern, server-rendered applications that enhance performance and SEO. 
 My diverse skill set allows me to contribute effectively to front-end development and deliver high-quality user experiences.I am also 
 proficient in Python, which allows me to develop robust applications and automate tasks with ease. Currently, I am expanding my knowledge
  in Agentic AI, focusing on developing intelligent systems that can operate autonomously, adapting and learning from data to improve 
  decision-making and performance.</p>
           <Link href='/'><Button className='bg-[#f03a6a] hover:bg-[#e0577c] hover:text-white duration-300
 w-16 md:w-28 h-10 rounded-2xl shadow-md hover:font-bold mb-2 justify-between'>Home</Button></Link>
   </div>
  {/* section 2  */}
   <div>
    <SkillProgress/>
      </div>

    </div>
    {/* skills end   */}

<hr className="mx-5 md:mx-10"/>
<hr className="mx-5 md:mx-10"/>

{/* projects section  */}
  
<div className='px-10 md:px-20 lg:px-40'>
 <h1 className='text-lg md:text-2xl font-bold mt-3 p-2' id='googlefont'>About My Projects</h1>
<p className='text-justify mx-2 md:0'>In my recent web development projects, I have effectively combined HTML, CSS, Tailwind CSS, TypeScript, 
 and Next.js to craft responsive, user-friendly interfaces. By utilizing Tailwind CSS, I streamlined the design process with utility-first
styling, resulting in clean and maintainable code. My strong proficiency in TypeScript enabled me to build reliable, bug-free applications,
 while JavaScript empowered me to implementdynamic and interactive features. A notable project was the development of a portfolio website 
 using Next.js, where I integrated server-side rendering to boost both performance and SEO. Additionally, I am proficient in Python, which
  I use to build robust applications and automate tasks efficiently. Currently, I am learning Agentic AI, exploring the development of 
  intelligent systems that can autonomously learn and adapt from data to enhance decision-making and optimize performance. This diverse
 skill set allows me to contribute to both web development and AI-driven projects, delivering high-quality solutions in various domains.</p>
</div>
 <hr className='mx-5 md:mx-10 mt-5'/>
 <hr className='mx-5 md:mx-10'/>

         {/* Swipper Business & Ecommerce Gallery */}
<div className='grid grid-cols-1 lg:grid-cols-2 mt-5 lg:mt-10'>

  <div className='flex flex-col mt-5'>
     <h1 className="text-lg md:text-2xl font-bold " id='googlefont'>Business & Ecommerce</h1>  
     <p className='text-justify mt-2 md:mt-4 indent-10 md:indent-20 mx-2 md:0'>
    My unique e-commerce web applications that showcase my skills in frontend development, UI implementation, and responsive design.
 Hackthon Ecommerce is a dynamic storefront featuring a clean layout, interactive navigation, and responsive product cards. It includes 
 features like category filtering, product previews, pricing information, and a user-friendly shopping experience. The design is minimalistic
yet functional, aimed at delivering a smooth browsing experience on all devices. Figma Assign Ecommerce is a pixel-perfect recreation of a
 Figma design assignment. These projects allowed me to sharpen my skills in layout precision, spacing, font scaling, and visual hierarchy.
I followed strict design fidelity to ensure every section matched the provided UI mockups exactly. Built with Next.js and Tailwind CSS, it
 highlights my strength in translating design to code while maintaining performance and responsiveness. I also implemented reusable 
 components and organized code to reflect best practices in frontend engineering. Functional Hackthon is a layout-centric project that 
 emphasizes modular design and UI reusability. It includes structured content sections, smooth transitions, and clean component separation
  to aid in scalability and future updates.This project reflects my grasp of UI composition, reusable layout patterns, and frontend
optimization. The tech stack includes React, Tailwind CSS,css, TypeScript, and Next.js, enabling fast builds and responsive behavior.</p>

     <Link href='/'><Button className='bg-[#f03a6a] hover:bg-[#e0577c] hover:text-white duration-300
 w-16 md:w-28 h-10 rounded-2xl shadow-md hover:font-bold mt-4'>Home</Button></Link>    
  </div>
  <div className="App"> 
      <SwipperEcom />
  </div>
</div>
<hr className='mx-5 md:mx-10 mt-5'/>
 <hr className='mx-5 md:mx-10'/>

         {/* Swipper Resturant & Company Gallery */}
<div className='grid grid-cols-1 lg:grid-cols-2 mt-5 lg:mt-10'>
   <div className="App"> 
      <SwipperResturant />
  </div>
  <div className='flex flex-col mt-5'>
    <h1 className="text-lg md:text-2xl font-bold " id='googlefont'>Resturant and Company Websites</h1>  
     <p className='text-justify mt-2 md:mt-4 indent-10 md:indent-20 mx-2 md:0'>
I have developed several responsive and visually engaging web projects using modern frontend technologies.
Flavour Fusion Restaurant Website features smooth navigation, menu highlights, image galleries, and a contact footer.
Built with Next.js, React, Tailwind CSS, and Framer Motion, it ensures elegant UX and optimized performance.
UI/UX Hackathon Project is a pixel-perfect design challenge replica focused on clean layouts, spacing, and responsive behavior.
These two sites reflect my design-to-code translation skills and understanding of modern UI principles. Hire Developers Platform is a 
business-oriented landing page highlighting developer hiring services with structured CTAs. It showcases my ability to build 
corporate-ready, professional layouts with a strong UX focus. Karachi Tourist Places is a content-based city guide displaying top tourist 
attractions in Karachi. It features a responsive grid, attractive visuals, and clean typography for an informative browsing experience.
All projects were built with Next.js, React, and Tailwind CSS, and deployed using Vercel. Each site is fully responsive, mobile-friendly, 
and optimized for performance. I emphasized reusable components, scalable code structure, and clean UI/UX design. From static landing pages
to dynamic content layouts, these projects demonstrate my versatility in frontend development. They reflect my ability to work from Figma 
designs, implement modern frameworks, and deploy efficiently. Collectively, these showcase my frontend expertise, design sense, and 
development efficiency.</p>
     <Link href='/'><Button className='bg-[#f03a6a] hover:bg-[#e0577c] hover:text-white duration-300
 w-16 md:w-28 h-10 rounded-2xl shadow-md hover:font-bold mt-4'>Home</Button></Link>    
  </div>
  </div>
<hr className='mx-5 md:mx-10 mt-5'/>
 <hr className='mx-5 md:mx-10'/>

   {/* Swipper Portfolio Website Gallery */}
<div className='grid grid-cols-1 lg:grid-cols-2 mt-5 lg:mt-10'>

  <div className='flex flex-col mt-5'>
     <h1 className="text-lg md:text-2xl font-bold " id='googlefont'>Portfolio & Resume Websites</h1>  
     <p className='text-justify mt-2 md:mt-4 indent-10 md:indent-20 mx-2 md:0'>
My primary portfolio website built with modern web technologies including Next.js and Tailwind CSS.
This site includes detailed case studies, animated sections, image galleries, and contact forms.
It is fully responsive, performance-optimized, and designed to convert visitors into leads or clients.
Custom components and scalable styling were used for maintainability and extensibility.      
Tailwind Portfolio Website. A modern and responsive developer portfolio built using Tailwind CSS with smooth 
scrolling, dark mode support, and clean layout. The site emphasizes simplicity and clarity, displaying key 
sections like About, Projects, and Contact with subtle animations. It uses a mobile-first design ensuring 
optimal viewing across all devices. The color palette and font choices reflect a minimalist yet professional tone.
CSS Portfolio Site. A creative single-page portfolio designed entirely with HTML and pure CSS, without relying on JavaScript frameworks.
It demonstrates my ability to build elegant layouts and animations using foundational web technologies.
The page structure is lightweight, fast-loading, and compatible across major browsers.
Python Web Test App. A dynamic web app built using Streamlit to showcase Python backend capabilities.
The project includes real-time user interaction with Streamlit widgets, form handling, and data visualization.
It is a reflection of my proficiency in Python, APIs, and rapid prototyping using modern tools.
Static Resume Website. A static HTML-based personal resume hosted live for easy sharing with recruiters and clients.
The site highlights my education, skills, experience, and project links in a neatly formatted layout.
It is fast, SEO-friendly, and deployable in seconds—ideal for professional branding.
</p>
     <Link href='/'><Button className='bg-[#f03a6a] hover:bg-[#e0577c] hover:text-white duration-300
 w-16 md:w-28 h-10 rounded-2xl shadow-md hover:font-bold mt-4'>Home</Button></Link>    
  </div>
  <div className="App"> 
      <SwipperPortfolio/>
  </div>
</div>
<hr className='mx-5 md:mx-10 mt-5'/>
 <hr className='mx-5 md:mx-10'/>

     {/* Swipper Educational Website Gallery */}
<div className='grid grid-cols-1 lg:grid-cols-2 mt-5 lg:mt-10'>
   <div className="App"> 
      <SwipperEdu />
  </div>
  <div className='flex flex-col mt-5'>
    <h1 className="text-lg md:text-2xl font-bold " id='googlefont'>Educational Projects</h1>  
     <p className='text-justify mt-2 md:mt-4 indent-10 md:indent-20 mx-2 md:0'>
Multilingual AI Agent App provides real-time language translation powered by advanced AI models. It supports multiple languages and can 
seamlessly switch between them, making global communication accessible.The app features an intuitive interface and uses Streamlit reactive
 UI for instant feedback. Secure Data Encryption App allows users to encrypt and decrypt sensitive text data securely. It uses Python 
cryptography libraries to implement AES encryption, ensuring data privacy. A clean UI lets users easily input text and receive encrypted 
output with minimal steps. Python Challenge Quiz App is a fun and educational platform to test Python programming knowledge.It randomly 
selects coding-related questions and evaluates user input in real-time. This app is perfect for learners to reinforce Python concepts 
through practice. Python Assignment. Anagram Checker App allows users to check if two words are anagrams. It handles edge cases like case 
sensitivity and space handling effectively. This app is useful for both educational and practical scenarios in coding interviews.All apps 
feature responsive layouts for desktop and mobile accessibility. Each project is deployed on Streamlit Cloud for easy sharing and real-time
 use. These apps showcase my skills in Python, Streamlit, cryptography, and AI-powered interfaces.</p>
     <Link href='/'><Button className='bg-[#f03a6a] hover:bg-[#e0577c] hover:text-white duration-300
 w-16 md:w-28 h-10 rounded-2xl shadow-md hover:font-bold mt-4'>Home</Button></Link>    
  </div>
  </div>
<hr className='mx-5 md:mx-10 mt-5'/>
 <hr className='mx-5 md:mx-10'/>

{/* Swipper Utility Website Gallery */}
<div className='grid grid-cols-1 lg:grid-cols-2 mt-5 lg:mt-10'>

  <div className='flex flex-col mt-5'>
     <h1 className="text-lg md:text-2xl font-bold " id='googlefont'>Utility Projects</h1>  
     <p className='text-justify mt-2 md:mt-4 indent-10 md:indent-20 mx-2 md:0'>
Caesar Cipher Encoder/Decoder App.A classic cryptography tool built in Streamlit that allows users to encode and decode messages using the Caesar Cipher technique, reinforcing concepts of string manipulation and encryption.
Personal Library Management System. A simple and effective tool for users to add, view, and manage a list of books. It features a clean UI and highlights CRUD operations using Python and Streamlit.
Python Assignment Challenge App. This app serves as a practice platform featuring Python-based challenges to sharpen programming logic and problem-solving skills for beginners and intermediate learners.
QR Code Generator.A sleek and interactive Streamlit app that instantly converts any text or URL into a downloadable QR code. Useful for digital linking, event promotion, and contactless sharing.
Unit Converter App. A versatile tool that converts values between different units of measurement such as temperature, length, and weight. This project displays clean UI logic and modular Python programming.
To-Do App. A minimalist productivity tracker that allows users to add, view, and mark daily tasks as complete. Built using Python lists and session state in Streamlit, it highlights real-time UI updates.
Each app follows responsive design practices and showcases efficient use of Streamlit widgets like sliders, inputs, buttons, and layout containers.
Integrated st.session_state and modular coding patterns for enhanced user interaction and app persistence.
Projects are deployed and publicly accessible, ensuring high availability and showcasing deployment skills using Streamlit Cloud.
Apps demonstrate effective user interface design, ensuring a smooth and intuitive experience.
Clear documentation and consistent naming conventions improve code readability and maintainability.
</p>
     <Link href='/'><Button className='bg-[#f03a6a] hover:bg-[#e0577c] hover:text-white duration-300
 w-16 md:w-28 h-10 rounded-2xl shadow-md hover:font-bold mt-4'>Home</Button></Link>    
  </div>
  <div className="App"> 
      <SwipperUtility/>
  </div>
</div>
<hr className='mx-5 md:mx-10 mt-5'/>
 <hr className='mx-5 md:mx-10'/>

{/* Swipper Games and Fun Website Gallery */}
<div className='grid grid-cols-1 lg:grid-cols-2 mt-5 lg:mt-10'>
   <div className="App"> 
      <SwipperGames />
  </div>
  <div className='flex flex-col mt-5'>
    <h1 className="text-lg md:text-2xl font-bold " id='googlefont'>Games and Fun</h1>  
     <p className='text-justify mt-2 md:mt-4 indent-10 md:indent-20 mx-2 md:0'>
Mystery Adventure Game An interactive text-based Python game built with Streamlit, engaging users in a decision-driven mystery journey 
with multiple outcomes. Combines storytelling with logical branching to enhance user experience and keep engagement high.
Emphasizes creativity in narrative flow and dynamic user inputs for personalized adventures.
Image to ASCII Art Converter A unique tool that converts uploaded images into artistic ASCII text output using Python image 
processing libraries. Demonstrates proficiency in handling image data and applying transformations for creative representation.
Allows users to download or view the ASCII art with adjustable scaling options for detailed visual results.
Mood Analyzer An AI-powered tool that detects the user mood based on text input using natural language processing (NLP) techniques.
Utilizes sentiment analysis libraries to provide accurate emotional feedback.
Useful for mental health check-ins or entertainment purposes, highlighting my understanding of text-based AI modeling.
Number Guess Game A classic interactive number-guessing game where users test their intuition against randomized numbers.
Designed with beginner-friendly UI and real-time feedback, demonstrating logic implementation and control flow in Python.
Joke Generator. A fun app that delivers random jokes on button clicks using a joke API integration.
Showcases API handling and asynchronous content delivery within Streamlit. Clean layout and playful interaction make it a lightweight 
yet engaging microapp. Together, these apps reflect my ability to blend creativity, user engagement, and core Python logic into fun, 
functional web applications using Streamlit.
</p>
     <Link href='/'><Button className='bg-[#f03a6a] hover:bg-[#e0577c] hover:text-white duration-300
 w-16 md:w-28 h-10 rounded-2xl shadow-md hover:font-bold mt-4'>Home</Button></Link>    
  </div>
  </div>
<hr className='mx-5 md:mx-10 mt-5'/>
<hr className='mx-5 md:mx-10 mb-10'/>   

   
    </div>
  )
}
