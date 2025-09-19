
import Image from 'next/image';


import Link from 'next/link';

import {
  Globe,          // Website
  Smartphone,     // App
  Bot,            // Generative AI
  Megaphone,      // Digital Marketing
  Palette         // Designing & Editing
} from "lucide-react";

const Main=()=>{
    return(
        <div id='home' className="w-full h-screen text-center bg-[#E9D5FF]">
            <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
                <div>
                    <p className='uppercase text-sm tracking-widest text-gray-600'>LET'S BUILD SOMETHING TOGETHER</p>
                    <h1 className='py-4 text-gray-700'>Grow your <span className='text-[#5651e5]'>business</span> deigtally</h1>
                    <h1 className='py-4 text-gray-700'>to next level online with <span className='text-[#5651e5]'>FNConcepts.</span></h1>
                    <p className='py-4 text-gray-600 max-w-[70%] m-auto text-[25px]'>
                        Transform your digital presence with cutting-edge web development, mobile apps, AI software, and comprehensive digital marketing strategies.
                    </p>
                    <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <Link href='/#contact'>
                            <Globe size={40} />
                            </Link>
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <Link href='/#contact'>
                            <Smartphone size={40} />
                            </Link>
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <Link href='/#contact'>
                            <Bot size={40} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Main;