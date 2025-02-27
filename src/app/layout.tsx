import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import ModeToggle from '@/components/theme/ModeToggle'
import { Button } from '@/components/ui/button'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Cursor from "@/components/theme/Cursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mussarat Shamsher",
  description: "Frontend Developer, UI/UX Designer, Web Developer",
  icons: {  
   icon: "/images/logo.png",   
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

<head>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
  />
</head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange>


          {/* resume & dark mode navigation */}
      <div className="container max-w-[1440px] mx-auto relative">
        
         <Image src={'/images/backimg.jpg'} alt="" width={500} height={500} 
         className="h-20 w-full"/>
         <div className='flex justify-end -mt-14 gap-5 mr-10'>
         <ModeToggle/>
        <Link href='https://milestone1-personal-static-resume.vercel.app/' target="blank">
         <Button className="text-white bg-black w-24 p-5 rounded-3xl border
         shadow-md">Resume</Button></Link>
       </div>
<hr className="border border-black "/>
       </div>  
       <div className="container max-w-[1440px] mx-auto">  
       
        {children}
     <Cursor/>

        </div>
        </ThemeProvider>
       
      </body>

    
    </html>
  );
}
