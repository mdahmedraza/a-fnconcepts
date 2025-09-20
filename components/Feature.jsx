
import {
  View, Goal
} from "lucide-react";

import Button from "./Button";

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


 

const Feature=()=>{
    return(
        <div className='w-full lg:h-auto p-2'>
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-[20px]">
                    {/* grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[20px] p-5 */}
                     {stats.map(({ icon, heading, para, list }, idx) => (
                        <div
                        key={idx}
                        className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'
                        >
                         <div className='mb-6 rounded-md shadow-lg shadow-gray-400  cursor-pointer  h-20 w-20 flex items-center justify-center bg-[#E9D5FF]'>
                                {icon}
                            </div>
                            <p className=' text-black-600 max-w-[90%] text-[22px] font-bold'>{heading}</p>
                            <p  className='py-4 text-gray-600 max-w-[90%] text-[20px]'>{para}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Feature;