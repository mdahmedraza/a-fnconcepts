
import {
  Code,          // Website
  Smartphone,     // App
  Bot,            // Generative AI
  Megaphone,      // Digital Marketing
  Palette,         // Designing & Editing
  Search
} from "lucide-react";

import Button from "./Button";

const stats = [
    {
        icon: <Code size={40} />,
        heading: "Website Development",
        para: "Custom, responsive websites built with modern technologies like React, Node.js, and cloud deployment.",
        list: ["MERN Stack", "Responsive Design", "SEO Optimized"]
    },
    {
        icon: <Smartphone size={40} />,
        heading: "Mobile App Development",
        para: "Native and cross-platform mobile applications for iOS and Android with seamless user experiences.",
        list: ["React Native", "Flutter", "Native iOS/Android"]
    },
    {
        icon: <Palette size={40} />,
        heading: "Graphic Design",
        para: "Creative visual solutions including branding, marketing materials, and digital graphics.",
        list: ["Brand Identity", "Marketing Materials", "Digital Graphics"]
    },
    {
        icon: <Bot size={40} />,
        heading: "AI Software Solutions",
        para: "Cutting-edge AI and machine learning solutions to automate processes and enhance decision-making.",
        list: ["Machine Learning", "AI Automation", "Data Analytics"]
    },
    {
        icon: <Megaphone size={40} />,
        heading: "Digital Marketing",
        para: "Comprehensive SEO, SMO, and SMM strategies to boost your online visibility and growth.",
        list: ["SEO Optimization", "Social Media", "PPC Campaigns"]
    },
    {
        icon: <Search size={40} />,
        heading: "Search Engine Optimization",
        para: "Comprehensive SEO, SMO, and SMM strategies to boost your online visibility and growth.",
        list: ["SEO Optimization", "Social Media", "PPC Campaigns"]
    },
  ];


 

const Services=()=>{
    return(
        <div id='skills' className='w-full lg:h-auto p-2'>
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
                <h1 className='py-4 text-gray-700'>Our <span className='text-[#5651e5]'>Services</span></h1>
                    <p className='py-2 text-gray-600 text-[25px]'>Comprehensive IT solutions designed to elevate your business and<br />drive digital transformation</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[20px]">
                    {/* <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <p>Box 1</p>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <p>Box 1</p>
                    </div> */}
                     {stats.map(({ icon, heading, para, list }, idx) => (
                        <div
                        key={idx}
                        className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'
                        >
                         <div className='rounded-md shadow-lg shadow-gray-400  cursor-pointer h-20 w-20 flex items-center justify-center bg-[#E9D5FF]'>
                                {icon}
                            </div>
                            <p className='py-4 text-black-600 max-w-[90%] text-[22px] font-bold'>{heading}</p>
                            <p  className='py-4 text-gray-600 max-w-[90%] text-[20px]'>{para}</p>
                             <ul className="list-disc list-inside space-y-1 text-gray-700 marker:text-[#5651e5]">
            {list.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
<Button />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Services;