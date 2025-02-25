"use client";  

import { useEffect } from 'react';  

const skills = [  
  { name: 'HTML', value: 90 },  
  { name: 'CSS', value: 90 },  
  { name: 'Tailwind CSS', value: 95 },  
  { name: 'TypeScript', value: 85 },  
  { name: 'JavaScript', value: 80 },  
  { name: 'Next.js', value: 95 },  
];  

const SkillProgress = () => {  
  useEffect(() => {  
    const bars = document.querySelectorAll('.progress-bar') as NodeListOf<HTMLElement>; // Cast to NodeListOf<HTMLElement>  
    bars.forEach(bar => {  
      const value = bar.getAttribute('data-value');  
      if (value) {  
        bar.style.width = '0%';  
        setTimeout(() => {  
          bar.style.width = `${value}%`;  
        }, 100);  
      }  
    });  
  }, []);  

  return (  
    <div className="max-w-md mx-auto"> 
     <h1 className='text-lg md:text-2xl'><b> My Skills</b></h1> 
      {skills.map((skill) => (  
        <div key={skill.name} className="mb-4"> 
        <div className='flex justify-between'>
          <span className="block text-sm font-bold mb-1">{skill.name}</span>
          <span><b>{skill.value}% </b></span>
            </div> 
          <div className="bg-gray-200 rounded-full h-4">  
            <div  
              className="progress-bar bg-rose-500 h-full rounded-full"  
              data-value={skill.value}  
              style={{ width: '0%', transition: 'width 1s' }}  
            ></div>  
          </div>  
        </div>  
      ))}  
    </div>  
  );  
};  

export default SkillProgress;