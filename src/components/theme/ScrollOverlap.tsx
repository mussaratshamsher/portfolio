'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, ReactNode } from 'react'

interface ScrollOverlapProps {
  children: ReactNode
  bgColor?: string
  textColor?: string
}

export default function ScrollOverlap({ children, bgColor = 'bg-black', textColor = 'text-white' }: ScrollOverlapProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  return (
    <section ref={ref} className="h-screen sticky top-0 z-10">
      <motion.div
        style={{ scale, opacity }}
        className={`w-full h-screen ${bgColor} ${textColor} flex items-center justify-center`}
      >
        {children}
      </motion.div>
    </section>
  )
}
