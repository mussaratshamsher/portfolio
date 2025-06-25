import type { Metadata } from "next";
import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import ModeToggle from '@/components/theme/ModeToggle'
import { Button } from '@/components/ui/button'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
})

export const metadata: Metadata = {
   title: 'Mussarat Shamsher | Full Stack & Frontend Developer',
  description: 'Portfolio website showcasing my work as a frontend and full-stack web developer specializing in Next.js, TypeScript, and Tailwind CSS.',
  icons: {  
   icon: "/images/logo.png",   
  },
  keywords: ['Next.js developer', 'Frontend developer', 'Full-stack developer', 'Portfolio', 'Web development', 'Tailwind CSS', 'React developer'],
  authors: [{ name: 'Mussarat Shamsher' }],
  openGraph: {
    title: 'Mussarat Shamsher | Web Developer Portfolio',
    description: 'Discover projects, skills, and services offered by Mussarat Shamsher.',
    url: 'https://portfolio-mussarat-shamsher.vercel.app',
    siteName: 'Mussarat Portfolio',
    images: [
      {
        url: 'https://portfolio-mussarat-shamsher.vercel.app/og-image.png', // ✅ Create a nice Open Graph image for social shares
        width: 1200,
        height: 630,
        alt: 'Mussarat Portfolio Screenshot',
      },
    ],
    type: 'website',
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geistSans.className}>

<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <Link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,100..900;1,9..144,100..900&display=swap" rel="stylesheet"/>
  <Link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
  />
</head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} antialiased`}
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
        <Link href="https://milestone1-personal-static-resume.vercel.app/" target="blank">
         <Button className="text-white bg-black w-24 p-5 rounded-3xl border
         shadow-md">Resume</Button></Link>
       </div>
<hr className="border border-black "/>
       </div>   
       
        {children}
    
        </ThemeProvider>
         <script type="module">
  
</script>
      </body>

    
    </html>
  );
}
