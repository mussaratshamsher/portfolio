"use client";   

import { useEffect, useState } from "react";  

const Cursor = () => {  
  const [position, setPosition] = useState({ x: 0, y: 0 });  

  useEffect(() => {  
    const handleMouseMove = (e: MouseEvent) => {  
      setPosition({ x: e.clientX, y: e.clientY });  
    };  

    window.addEventListener("mousemove", handleMouseMove);  

    return () => {  
      window.removeEventListener("mousemove", handleMouseMove);  
    };  
  }, []);  

  return (  
    <div  
      className="fixed h-8 w-8 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-all duration-200 shadow-lg"  
      style={{  
        top: position.y,  
        left: position.x,  
        opacity: 0.8, // Add slight transparency for subtle fade effect  
      }}  
    />  
  );  
};  

export default Cursor;  