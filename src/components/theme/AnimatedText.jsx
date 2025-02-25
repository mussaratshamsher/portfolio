"use client" 
import React, { useEffect, useState } from 'react';  

const texts = ["Web Developer", "UI/UX Designer", "Frontend Developer"];  

const AnimatedText = () => {  
  const [displayedText, setDisplayedText] = useState('');  
  const [index, setIndex] = useState(0);  

  useEffect(() => {  
    const interval = setInterval(() => {  
      if (index < texts.length) {  
        setDisplayedText(texts[index]);  
        setIndex(index + 1);  
      } else {  
        setIndex(0);  
      }  
    }, 2000); // Change text every 2 seconds  

    return () => clearInterval(interval);  
  }, [index]);  

  return (  
    <div className='text-gradient text-white font-bold text-2xl mb-2 mt-4 md:mt-7'>  
      {displayedText}  
    </div>  
  );  
};  

export default AnimatedText;