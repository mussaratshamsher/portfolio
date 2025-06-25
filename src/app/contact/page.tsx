
import ContactForm from '@/components/theme/ContactForm'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

export default function contactForm() {
  return (
  <div>
  <Link href="/">
    <Button className="bg-[#f03a6a] hover:bg-[#e0577c] hover:text-white duration-300 w-16 md:w-28 h-10 rounded-2xl shadow-md hover:font-bold mt-4 fixed top-3 left-5">
      Home
    </Button>
  </Link>
  <div className="grid max-w-lg mx-auto border-2 rounded-2xl shadow-md p-10 my-5 md:my-10">
    <h1 className="text-lg md:text-2xl">
      <b>Feel free to reach me out</b>
    </h1>
    <ContactForm />
  </div>
</div>

  )
}
