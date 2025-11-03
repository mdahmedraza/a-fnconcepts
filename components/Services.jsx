import {
  Code,
  Smartphone,
  Bot,
  Megaphone,
  Palette,
  PenTool,
} from "lucide-react";

import Button from "./Button";

const stats = [
  {
    icon: <Code size={32} />,
    heading: "Website Development",
    para: "Custom, responsive websites built with modern technologies and cloud deployment.",
    list: ["MERN Stack", "Responsive Design", "SEO Optimized"],
    btn: '/website'
  },
  {
    icon: <Smartphone size={32} />,
    heading: "Mobile App Development",
    para: "Native and cross-platform mobile apps for iOS and Android with seamless user experiences.",
    list: ["React Native", "Flutter", "Native iOS/Android"],
    btn: '/application'
  },
  {
    icon: <PenTool size={32} />,
    heading: "Graphic Design",
    para: "Creative visual solutions including branding, marketing materials, and digital graphics.",
    list: ["Brand Identity", "Marketing Materials", "Digital Graphics"],
    btn: '/graphic-desing'
  },
  {
    icon: <Bot size={32} />,
    heading: "AI Software Solutions",
    para: "Cutting-edge AI and machine learning solutions to automate processes and enhance decision-making.",
    list: ["Machine Learning", "AI Automation", "Data Analytics"],
    btn: '/ai-solutions'
  },
  {
    icon: <Megaphone size={32} />,
    heading: "SEO & Digital Marketing",
    para: "Comprehensive SEO, SMO, and SMM strategies to boost your online visibility and growth.",
    list: ["SEO Optimization", "Social Media", "PPC Campaigns"],
    btn: '/digital-marketing'
  },
  {
    icon: <Palette size={32} />,
    heading: "UI/UX Design",
    para: "Beautiful, intuitive designs that enhance user engagement and drive conversions.",
    list: ["User Research", "Prototyping", "Design Systems"],
    btn: '/ui-ux-design'
  },
];

const Services = () => {
  return (
    <div id="skills" className="w-full py-20 bg-[#0f172a] -mb-[5px]">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full px-4">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-white">
          Our <span className="text-[#A78BFA]">Services</span>
        </h1>
        <p className="py-4 text-gray-300 text-lg text-center max-w-2xl mx-auto">
          Comprehensive IT solutions designed to elevate your business and drive
          digital transformation.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
          {stats.map(({ icon, heading, para, list, btn }, idx) => (
            <div
              key={idx}
              className="p-6 bg-[#1e293b] shadow-md rounded-2xl hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
            >
              {/* Icon */}
              <div className="rounded-xl shadow-md shadow-purple-900/30 h-16 w-16 flex items-center justify-center bg-[#4C1D95] text-[#A78BFA] mb-4">
                {icon}
              </div>

              {/* Heading */}
              <h3 className="text-xl font-semibold text-white">
                {heading}
              </h3>

              {/* Description */}
              <p className="py-3 text-gray-300 text-[15px] leading-relaxed">
                {para}
              </p>

              {/* Features List */}
              <ul className="list-disc list-inside space-y-1 text-gray-400 marker:text-[#A78BFA] mb-4">
                {list.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              {/* Button */}
              <Button btn={btn} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;








// import {
//   Code,        
//   Smartphone,    
//   Bot,           
//   Megaphone,   
//   Palette,        
//   Search
// } from "lucide-react";

// import Button from "./Button";

// const stats = [
//     {
//         icon: <Code size={40} />,
//         heading: "Website Development",
//         para: "Custom, responsive websites built with modern technologies like React, Node.js, and cloud deployment.",
//         list: ["MERN Stack", "Responsive Design", "SEO Optimized"]
//     },
//     {
//         icon: <Smartphone size={40} />,
//         heading: "Mobile App Development",
//         para: "Native and cross-platform mobile applications for iOS and Android with seamless user experiences.",
//         list: ["React Native", "Flutter", "Native iOS/Android"]
//     },
//     {
//         icon: <Palette size={40} />,
//         heading: "Graphic Design",
//         para: "Creative visual solutions including branding, marketing materials, and digital graphics.",
//         list: ["Brand Identity", "Marketing Materials", "Digital Graphics"]
//     },
//     {
//         icon: <Bot size={40} />,
//         heading: "AI Software Solutions",
//         para: "Cutting-edge AI and machine learning solutions to automate processes and enhance decision-making.",
//         list: ["Machine Learning", "AI Automation", "Data Analytics"]
//     },
//     {
//         icon: <Megaphone size={40} />,
//         heading: "Digital Marketing",
//         para: "Comprehensive SEO, SMO, and SMM strategies to boost your online visibility and growth.",
//         list: ["SEO Optimization", "Social Media", "PPC Campaigns"]
//     },
//     {
//         icon: <Search size={40} />,
//         heading: "Search Engine Optimization",
//         para: "Comprehensive SEO, SMO, and SMM strategies to boost your online visibility and growth.",
//         list: ["SEO Optimization", "Social Media", "PPC Campaigns"]
//     },
//   ];


 

// const Services=()=>{
//     return(
//         <div id='skills' className='w-full lg:h-auto p-2'>
//             <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
//                 <h1 className='py-4 text-gray-700'>Our <span className='text-[#5651e5]'>Services</span></h1>
//                     <p className='py-2 text-gray-600 text-[25px]'>Comprehensive IT solutions designed to elevate your business and<br />drive digital transformation</p>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[20px]">
                   
//                      {stats.map(({ icon, heading, para, list }, idx) => (
//                         <div
//                         key={idx}
//                         className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'
//                         >
//                          <div className='rounded-md shadow-lg shadow-gray-400  cursor-pointer h-20 w-20 flex items-center justify-center bg-[#E9D5FF]'>
//                                 {icon}
//                             </div>
//                             <p className='py-4 text-black-600 max-w-[90%] text-[22px] font-bold'>{heading}</p>
//                             <p  className='py-4 text-gray-600 max-w-[90%] text-[20px]'>{para}</p>
//                              <ul className="list-disc list-inside space-y-1 text-gray-700 marker:text-[#5651e5]">
//             {list.map((item, i) => (
//               <li key={i}>{item}</li>
//             ))}
//           </ul>
// <Button />
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     )
// }
// export default Services;