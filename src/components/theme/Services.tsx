
import React from 'react'
import {
  MonitorSmartphone,
  LayoutTemplate,
  Code,
  Share,
  Bug,
  RefreshCw,
  MessageCircleQuestion,
  Wand2
} from 'lucide-react'

export const services = [
  {id: 1,icon: MonitorSmartphone,title: 'Responsive UI Development', description: 'Build pixel-perfect, mobile-friendly layouts with clean design.'},
  
  {id: 2,icon: LayoutTemplate,title: 'Figma to Functional UI',description: 'Convert Figma designs into responsive, fully coded interfaces.'},

  {id: 3,icon: Code,title: 'API Development (FastAPI)', description: 'Build scalable APIs with Python and connect them to frontends.'},

  {id: 4,icon: Share,title: 'App Integration',description: 'Seamlessly connect APIs, third-party tools, and frontend apps.'},

  {id: 5,icon: Bug,title: 'Web App Testing',description: 'Perform UI and functionality testing to ensure bug-free apps.'},

  {id: 6,icon: RefreshCw,title: 'Website Redesign',description: 'Modernize outdated designs for better usability and performance.'},

  {id: 7,icon: MessageCircleQuestion,title: 'Free Tech Consultation',description: 'Get honest advice on tech stacks, architecture, or redesigns.'},

  {id: 8,icon: Wand2,title: 'Learning Agent SDK',description: 'Exploring smart, content-generating agents to enhance workflows.'}
]


export default function TechStack() {
  return (
    <div>
         <hr className='mx-5 md:mx-10 mt-5'/>
        <hr className='mx-5 md:mx-10 mb-5 md:mb-10 lg:mb-20'/>
       <h1 className="text-xl lg:text-3xl font-bold text-center mt-2 md:mt-5 lg:mt-10" id="googlefont">💼 Services I Provide</h1>
        
        <div className="overflow-hidden w-full mt-3 md:mt-5 lg:mt-20 lg:mb-20 mb-5">
  <div className="animate-scroll flex gap-5">
    {[...services, ...services].map((item, index) => (
      <div key={index} className="flex-shrink-0 w-64 p-4 border rounded-2xl shadow-md bg-white dark:bg-zinc-900">
        <div className="flex flex-col items-center justify-center text-center">
          <item.icon className=" w-12 h-12 mb-2 text-[#cc2756]" aria-label={item.title} />
          <h1 className="text-lg font-semibold">{item.title}</h1>
          <p className="font-thin text-sm mt-2">{item.description}</p>
        </div>
      </div>
    ))}
  </div>
</div>

        <hr className='mx-5 md:mx-10 mt-5'/>
        <hr className='mx-5 md:mx-10'/>
    </div>
  )
}
