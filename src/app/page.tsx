
import { Button } from "@/components/ui/button";
import AnimatedText from "./../components/theme/AnimatedText"
import {  Github, Linkedin, Twitter } from "lucide-react";
import { SiFreelancer } from "react-icons/si";

import Image from "next/image";
import Link from "next/link";
import { BsWhatsapp } from "react-icons/bs";

export default function Home() {
  return (
    <div className="container max-w-[1440px] mx-auto" id="googlefont">
  <Link href="/">
    <Button className="bg-[#f03a6a] hover:bg-[#e0577c] hover:text-white duration-300 w-16 md:w-28 h-10 rounded-2xl shadow-md hover:font-bold mt-4 fixed top-3 left-5">
      Home
    </Button>
  </Link>
  <div className="">
    {/* background img  */}
    <Image
      src="/images/backimg.jpg"
      alt=""
      width={500}
      height={500}
      className="w-full max-w-[1440px] mx-auto h-screen absolute"
    />

    <hr className="border border-white mt-2 relative mx-20" />
    {/* profile section  */}
    <div className="max-w-lg h-screen mx-auto relative pt-3">
      <h1 className="text-xl md:text-3xl font-bold text-center text-white pt-3">
        Mussarat Shamsher
      </h1>
      <div className="flex justify-center items-center">
        <AnimatedText />
      </div>

      {/* buttons  section */}
      <div className="flex flex-col gap-5 md:gap-3 mt-4 md:mt-8 ">
        <Link href="/about">
          <Button className="w-full mx-auto h-14 bg-transparent shadow-lg hover:shadow-xl border border-black
          text-lg bg-gradient-to-r from-[#f03a6a] to-[#ff7e5f] rounded-3xl pt-5 mb-2 button">
            ABOUT ME
          </Button>
        </Link>

        <Link href="/portfolio">
          <Button className="w-full mx-auto h-14 border-white bg-transparent shadow-lg hover:shadow-xl 
           text-lg bg-gradient-to-r from-[#c3345a] to-[#ff5f6c] rounded-3xl pt-5 mb-2 button">
            SKILLS & PROJECTS
          </Button>
        </Link>

        <Link href="/contact">
          <Button className="w-full mx-auto h-14 border-white bg-transparent shadow-lg hover:shadow-xl 
           text-lg bg-gradient-to-r from-[#f03a6a] to-[#ff7e5f] rounded-3xl pt-5 mb-2 button">
            CONTACT
          </Button>
        </Link>

        {/* social links navigation */}
        <div className="w-full mx-auto flex gap-2 md:gap-4 pt-3 justify-center animate_animated animate__backInUp">
          <Link
            href="https://www.linkedin.com/in/mussarat-shamsher-b7b4072b8/"
            target="blank"
            className="animate__animated animate__backInUp animate__delay-2s p-3 md:p-5 border shadow-md 
     rounded-full hover:shadow-lg shadow-gray-200 hover:shadow-gray-800 hover:bg-white hover:text-black">
            <Linkedin className="hover:scale-125 duration-300 " />
          </Link>

          <Link
            href="https://github.com/mussaratshamsher"
            target="blank"
            className="animate__animated animate__backInUp animate__delay-2s p-3 md:p-5 border shadow-md 
 rounded-full hover:shadow-lg shadow-gray-200 hover:shadow-gray-800 hover:bg-white hover:text-black">
            <Github className="hover:scale-125 duration-300" />
          </Link>

          <Link
            href="https://x.com/_mandaco_/"
            target="blank"
            className="animate__animated animate__backInUp animate__delay-2s p-3 md:p-5 border shadow-md
rounded-full hover:shadow-lg shadow-gray-200 hover:shadow-gray-800 hover:bg-white hover:text-black">
            <Twitter className="hover:scale-125 duration-300 " />
          </Link>

          <Link
            href="https://wa.me/+923182593455"
            target="blank"
            className="animate__animated animate__backInUp animate__delay-2s py-3 px-4 md:py-5 md:px-6 border shadow-md 
  rounded-full hover:shadow-lg shadow-gray-200 hover:shadow-gray-800 hover:bg-white hover:text-black">
            <BsWhatsapp className="hover:scale-125 duration-300 font-bold" />
          </Link>

          <Link
            href="https://www.freelancer.com/u/MussaratShamsher" target="blank"
     className="animate__animated animate__backInUp animate__delay-2s py-3 px-4 md:py-5 md:px-6 border shadow-md 
 rounded-full hover:shadow-lg shadow-gray-200 hover:shadow-gray-800 hover:bg-white hover:text-black">
            <SiFreelancer className="hover:scale-125 duration-300" />
          </Link>
        </div>
      </div>
    </div>
  </div>
</div>

  );
}
