import Image from "next/image";

import image1 from '../assets/developer.jpg'
import image2 from '../assets/designer.png';
import image3 from '../assets/strategy.webp';


const stats = [
    {
        image: image1,
        heading: "Development Team",
        para: "Full-stack developers specializing in modern web technologies and scalable solutions."
    },
    {
        image: image2,
        heading: "Design Team",
        para: "Creative designers focused on user experience and beautiful, functional interfaces."
    },
    {
        image: image3,
        heading: "Strategy Team",
        para: "Digital strategists who align technology solutions with business objectives."
    },
  ];


 

const Team=()=>{
    return(
        <div className='w-full h-auto p-2'>
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
                <h1 className='py-4 text-gray-700'>Our <span className='text-[#5651e5]'>Expert Team</span></h1>
                    <p className='py-2 text-gray-600 text-[25px]'>Meet our passionate team of developers, designers, and digital strategists<br />who bring your vision to life.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[20px]">

                     {stats.map(({ image, heading, para }, idx) => (
                        <div
                        key={idx}
                        className='max-w-sm mx-auto bg-white rounded-2xl shadow-md p-6 text-center'
                        >
                         <Image
        src={image}
        alt="Design Team"
        className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
      />
                           {/* Heading */}
      <h2 className="text-lg font-bold">{heading}</h2>

      {/* Paragraph */}
      <p className="text-gray-600 mt-2">
        {para}
      </p>
                        </div>
                    ))}



                     


                </div>
            </div>
        </div>
    )
}
export default Team;