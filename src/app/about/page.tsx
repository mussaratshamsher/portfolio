import { Button } from '@/components/ui/button'
import ScrollOverlap from '@/components/theme/ScrollOverlap'
import TechStack from '@/components/theme/TechStack'
import Services from '@/components/theme/Services'
import Link from 'next/link'
import { Github, Linkedin, Twitter } from 'lucide-react'
import { BsWhatsapp } from 'react-icons/bs'
import { SiFreelancer } from 'react-icons/si'

export default function About() {
  return (
    <main className="h-auto overflow-hidden bg-white dark:bg-black text-black dark:text-white">
      {/* fixed Button  */}
      <Link href="/"><Button className="bg-[#f03a6a] hover:bg-[#e0577c] hover:text-white duration-300 w-16 md:w-28 h-10 rounded-2xl shadow-lg shadow-gray-200 hover:font-bold mt-4 fixed top-3 left-5 z-50">Home</Button></Link>

      {/* section 1 */}
      <ScrollOverlap>
        <div className="flex flex-col mt-5 md:mt-10 lg:mt-20 mb-5 lg:mb-10">
          <h1 className="text-gradient text-xl md:text-2xl lg:text-4xl font-bold text-center" id="googlefont">Meet Mussarat Shamsher <br />
           <hr className="mx-10 md:hidden lg:hidden mb-5" />
            <span className="text-gradient text-lg md:text-xl mt-5 lg:mt-10">Building Tech that Matters</span></h1>
          <p className="text-justify mx-2 md:mx-10 lg:mx-20 text-base sm:font-thin font-semibold mt-5 lg:mt-10">I am a passionate AI Developer
            with a Master degree in Economics, now fully immersed in the evolving
            world of tech and innovation. As a learner in the Certified Cloud Applied Generative AI Engineer & Developer course, I am bridging
            the gap between data-driven economics and cutting-edge AI solutions.
            With a solid foundation in HTML, CSS, Tailwind CSS, Bootstrap, TypeScript, Next.js, and Python, I specialize in building modern,
            responsive, and visually striking web applications. I also work extensively with ShadCN UI components, animation libraries,
            and design systems that elevate user experiences across devices.Currently exploring the realms of Agentic AI and the OpenAI SDK,
            I am focused on creating intelligent, scalable solutions that solve real-world problems — from dynamic web apps to generative AI-powered
            tools. </p>
          <hr className="mx-5 md:mx-10 mt-5 md:mt-10 lg:mt-20" />
          <hr className="mx-5 md:mx-10" />
        </div>
      </ScrollOverlap>

      {/* section 2 */}
      <ScrollOverlap>
        <TechStack />
      </ScrollOverlap>

      {/* section 3 */}
      <ScrollOverlap>
        <Services />
      </ScrollOverlap>

      {/* section 4 */}
      <ScrollOverlap>
        <div className="flex flex-col mt-3 md:mt-5 lg:mt-20 mb-5 lg:mb-32">
          <h1 className="text-xl lg:text-3xl font-bold text-center mt-2 md:mt-5 lg:mt-10" id="googlefont">Why Hire Me?</h1>
          <p className="text-justify mx-2 md:mx-5 lg:mx-20 mt-5 lg:mt-10">
            Choose me for my passion for building modern web applications and my commitment to creating responsive and visually appealing user
            experiences. With a strong foundation in technologies like Next.js, TypeScript, and Python, I am well-equipped to tackle a variety
            of frontend and full-stack challenges. I am dedicated to continuous learning and bringing creativity, clarity, and commitment to every
            project. Whether you need a frontend wizard or a full-stack problem solver, I am ready to build something impactful together.
            <hr className="mx-5 md:mx-10 mt-10 lg:mt-20" />
            <hr className="mx-5 md:mx-10" />
          </p>
        </div>
      </ScrollOverlap>

      <ScrollOverlap>
        <div className="flex flex-col mt-3 md:mt-5 mb-5 lg:mb-32">
          <h1 className="text-xl lg:text-3xl font-bold text-center mt-2 md:mt-5 lg:mt-10" id="googlefont">Get in Touch</h1>
          <p className="text-justify mx-2 md:mx-5 lg:mx-20 mt-5 lg:mt-10">
            I am always open to new opportunities and collaborations. Whether you have a project in mind or just want to connect, feel free to reach out!

            {/*social links navigation  */}
            <div className="w-full mx-auto flex gap-2 md:gap-4 pt-3 justify-center animate_animated animate__backInUp mt-5 lg:mt-10">
<Link href="https://www.linkedin.com/in/mussarat-shamsher-b7b4072b8/" target="blank"
className="animate__animated animate__backInUp animate__delay-2s p-3 md:p-5 border shadow-md 
rounded-full hover:shadow-lg shadow-gray-200 hover:shadow-gray-300 text-[rgb(168,34,85)]
hover:bg-[rgb(168,34,85)] hover:text-white"><Linkedin className="hover:scale-125 duration-300" />
              </Link>
<Link href="https://github.com/mussaratshamsher" target="blank"
className="animate__animated animate__backInUp animate__delay-2s p-3 md:p-5 border shadow-md 
rounded-full hover:shadow-lg shadow-gray-200 hover:shadow-gray-300 text-[rgb(168,34,85)]
hover:bg-[rgb(168,34,85)] hover:text-white"><Github className="hover:scale-125 duration-300" />
              </Link>
 <Link href="https://x.com/_mandaco_/" target="blank"
className="animate__animated animate__backInUp animate__delay-2s p-3 md:p-5 border shadow-md
rounded-full hover:shadow-lg shadow-gray-200 hover:shadow-gray-300 text-[rgb(168,34,85)]
hover:bg-[rgb(168,34,85)] hover:text-white"> <Twitter className="hover:scale-125 duration-300" />
              </Link>
<Link href="https://wa.me/+923182593455" target="blank"
  className="animate__animated animate__backInUp animate__delay-2s py-3 px-4 md:py-5 md:px-6 border shadow-md
rounded-full hover:shadow-lg shadow-gray-200 hover:shadow-gray-300 text-[rgb(168,34,85)]
hover:bg-[rgb(168,34,85)] hover:text-white"><BsWhatsapp className="hover:scale-125 duration-300" />
              </Link>
<Link href="https://www.freelancer.com/u/MussaratShamsher" target="blank"
className="animate__animated animate__backInUp animate__delay-2s py-3 px-4 md:py-5 md:px-6 border shadow-md
 rounded-full hover:shadow-lg shadow-gray-200 hover:bg-[rgb(168,34,85)] ">
<SiFreelancer className="hover:scale-150 duration-300 delay-300 text-[rgb(168,34,85)]" />
          </Link>
         </div>
            <hr className="mx-5 md:mx-10 mt-10 lg:mt-20" />
            <hr className="mx-5 md:mx-10" />
          </p>
        </div>
      </ScrollOverlap>
    </main>
  )
}
