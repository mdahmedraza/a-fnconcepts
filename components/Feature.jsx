import { View, Goal } from "lucide-react";

const stats = [
  {
    icon: <View size={40} />,
    heading: "Our Mission",
    para: "To democratize advanced technology by making cutting-edge IT solutions accessible and affordable for businesses of all sizes. We bridge the gap between innovation and implementation, ensuring every organization can leverage the power of modern technology to achieve their goals.",
  },
  {
    icon: <Goal size={40} />,
    heading: "Our Vision",
    para: "To become the leading IT partner in India and beyond, recognized for our innovation, reliability, and commitment to client success. We envision a future where technology barriers are eliminated, and every business can compete at the highest level.",
  },
];

const Feature = () => {
  return (
    <div className="w-full py-20 bg-[#0f172a] text-white -mb-[5px]">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          What Drives <span className="text-[#60a5fa]">FN Concepts</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 px-4">
          {stats.map(({ icon, heading, para }, idx) => (
            <div
              key={idx}
              className="p-8 rounded-xl shadow-xl bg-[#1e293b] hover:scale-105 ease-in duration-300"
            >
              {/* Icon */}
              <div className="mb-6 rounded-md shadow-lg shadow-gray-800 cursor-pointer h-20 w-20 flex items-center justify-center bg-[#60a5fa] text-white">
                {icon}
              </div>

              {/* Heading */}
              <p className="text-2xl font-semibold text-white mb-4">
                {heading}
              </p>

              {/* Paragraph */}
              <p className="text-gray-300 text-lg">{para}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feature;




// import {
//   View, Goal
// } from "lucide-react";

// import Button from "./Button";

// const stats = [
//     {
//         icon: <View size={40} />,
//         heading: "Our Mission",
//         para: "To democratize advanced technology by making cutting-edge IT solutions accessible and affordable for businesses of all sizes. We bridge the gap between innovation and implementation, ensuring every organization can leverage the power of modern technology to achieve their goals.",
//     },
//     {
//         icon: <Goal size={40} />,
//         heading: "Our Vision",
//         para: "To become the leading IT partner in India and beyond, recognized for our innovation, reliability, and commitment to client success. We envision a future where technology barriers are eliminated, and every business can compete at the highest level.",
//     },
//   ];


 

// const Feature=()=>{
//     return(
//         <div className='w-full lg:h-auto p-2'>
//             <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-[20px]">
//                      {stats.map(({ icon, heading, para, list }, idx) => (
//                         <div
//                         key={idx}
//                         className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'
//                         >
//                          <div className='mb-6 rounded-md shadow-lg shadow-gray-400  cursor-pointer  h-20 w-20 flex items-center justify-center bg-[#E9D5FF]'>
//                                 {icon}
//                             </div>
//                             <p className=' text-black-600 max-w-[90%] text-[22px] font-bold'>{heading}</p>
//                             <p  className='py-4 text-gray-600 max-w-[90%] text-[20px]'>{para}</p>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     )
// }
// export default Feature;