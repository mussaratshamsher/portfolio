import React from 'react'


const tech = [
    { id: 1, name:'Frontend', skills:'HTML, CSS, Tailwind CSS, Bootstrap, JavaScript, TypeScript, Next.js'},
    {id: 2, name:'UI Components', skills:'ShadCN UI, Framer Motion, DaisyUI, Swipperjs, React Slick, Headless UI'},
    {id: 3, name:'Backend & APIs', skills:'Python, REST APIs'},
    {id: 4, name:'AI & ML', skills:'OpenAI SDK, Chainlit, Agentic AI (in-progress)'},
    {id: 5, name:'Data Handling', skills:'JSON, Pandas (basic), API integration'},
    {id: 6, name:'Tools & Platforms', skills:'Git, GitHub, VS Code, Streamlit, Vercel, Anaconda'},
    {id: 7, name:'Design Systems', skills:'Figma to Code Conversion, Responsive Design Principles'},
    {id:8, name:'Testing & Debugging', skills:'VS Code Debugger, Browser DevTools, Postman, Lighthouse'},
]
export default function TechStack() {
  return (
    <div className="h-auto flex flex-col items-center justify-center p-2 md:p-4 rounded-lg shadow-md">
       <h1 className=" text-xl lg:text-3xl font-bold text-center" id="googlefont">🛠️ My Tech Stack</h1>
        <p className="text-lg mb-6">Here are the technologies and tools I work with:</p>
        
        <div className='h-auto grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 lg:gap-10 mt-2 lg:mt-10' id='googlefont'>
            {tech.map((item) => (
                <div key={item.id} className="w-50 h-40 border-2 border-gray-300 rounded-2xl text-base md:text-lg p-5 shadow-md shadow-gray-200 bg-black
 text-white flex flex-col items-center justify-center text-justify hover:bg-slate-900 transition duration-300 ease-in-out hover:scale-105 "> 
                    <h1 className="text-lg md:font-semibold underline">{item.name}</h1>
                     <h2 className='font-thin text-justify  text-sm md:text-base'>{item.skills}</h2>
                </div>
                
                 ))}                          
        </div>
          <hr className='mx-5 md:mx-10 mt-5'/>
           <hr className='mx-5 md:mx-10'/>

    </div>
  )
}
