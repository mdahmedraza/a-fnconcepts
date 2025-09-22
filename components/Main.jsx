import Link from 'next/link';
import { Code, Smartphone, Bot } from "lucide-react";

const Main = () => {
  return (
    <div
      id="home"
      className="relative w-full h-screen text-center bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] overflow-hidden flex items-center -mb-[5px]"
    >
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(45deg,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(-45deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:40px_40px]"></div>

      {/* Glow Accent */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-[#5651e5] opacity-20 blur-3xl animate-pulse"></div>

      {/* Animated Shapes */}
      <div className="absolute inset-0">
        {/* Circle */}
        <div className="absolute w-8 h-8 bg-[#60a5fa] rounded-full opacity-20 animate-bounce top-10 left-10"></div>
        {/* Square */}
        <div className="absolute w-10 h-10 bg-[#34d399] opacity-20 animate-[float_6s_ease-in-out_infinite] bottom-16 left-1/3"></div>
        {/* Triangle */}
        <div className="absolute w-0 h-0 
            border-l-[20px] border-r-[20px] border-b-[35px] border-l-transparent border-r-transparent border-b-[#a78bfa] 
            opacity-20 animate-[float_8s_linear_infinite] top-1/4 right-12"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-[1240px] w-full h-full mx-auto px-4 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-[4px] text-gray-400">
            INNOVATE • BUILD • SCALE
          </p>
          <h1 className="py-4 text-white text-4xl sm:text-5xl font-bold max-w-[90%] m-auto leading-tight">
            Driving Digital Growth with{" "}
            <span className="text-[#60a5fa] drop-shadow-lg">AI</span>,{" "}
            <span className="text-[#a78bfa] drop-shadow-lg">Development</span>,{" "}
            and <span className="text-[#34d399] drop-shadow-lg">Design</span>.
          </h1>

          <p className="py-6 text-gray-300 max-w-[700px] m-auto text-lg">
            FN Concepts delivers cutting-edge software solutions, AI
            innovations, and digital strategies that empower businesses to
            achieve excellence in the modern era.
          </p>

          {/* Icons Section */}
          <div className="flex items-center justify-center gap-6 py-4">
            <div className="rounded-full shadow-lg shadow-[#5651e5]/40 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-[#1e293b]">
              <Link href="/#contact">
                <Code size={40} className="text-[#60a5fa]" />
              </Link>
            </div>
            <div className="rounded-full shadow-lg shadow-[#5651e5]/40 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-[#1e293b]">
              <Link href="/#contact">
                <Smartphone size={40} className="text-[#a78bfa]" />
              </Link>
            </div>
            <div className="rounded-full shadow-lg shadow-[#5651e5]/40 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-[#1e293b]">
              <Link href="/#contact">
                <Bot size={40} className="text-[#34d399]" />
              </Link>
            </div>
          </div>

          {/* Call to Action */}
          
        </div>
      </div>

      {/* Custom keyframes for floating */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(0px);
          }
        }
      `}</style>
    </div>
  );
};

export default Main;





// import Image from 'next/image';


// import Link from 'next/link';

// import {
//   Code,       
//   Smartphone,    
//   Bot,        
// } from "lucide-react";

// const Main=()=>{
//     return(
//         <div id='home' className="w-full h-auto text-center bg-[#E9D5FF] py-20">
//             <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
//                 <div>
                    
//                     <p className='uppercase text-sm tracking-widest text-gray-600'>LET'S BUILD SOMETHING TOGETHER</p>
//                     <h1 className='py-4 text-gray-700 max-w-[90%] m-auto'>Grow your <span className='text-[#5651e5]'>business</span> deigtally to next level online with <span className='text-[#5651e5]'>FN concepts.</span></h1>
                    
//                     <p className='py-4 text-gray-600 max-w-[70%] m-auto text-[25px]'>
//                         Transform your digital presence with cutting-edge web development, mobile apps, AI software, and comprehensive digital marketing strategies.
//                     </p>
//                     <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
//                         <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
//                             <Link href='/#contact'>
//                             <Code size={40} />
//                             </Link>
//                         </div>
//                         <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
//                             <Link href='/#contact'>
//                             <Smartphone size={40} />
//                             </Link>
//                         </div>
//                         <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
//                             <Link href='/#contact'>
//                             <Bot size={40} />
//                             </Link>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }
// export default Main;
