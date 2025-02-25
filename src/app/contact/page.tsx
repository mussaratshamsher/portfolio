
import ContactForm from '@/components/theme/ContactForm'
import React from 'react'

export default function contactForm() {
  return (
    <div className='grid max-w-lg mx-auto border-2 rounded-2xl shadow-md p-10 my-5 md:my-10 '>
        
    <h1 className=' text-lg md:text-2xl'> <b>Feel free to reach me out</b></h1>
      <ContactForm/>
    </div>
  )
}
