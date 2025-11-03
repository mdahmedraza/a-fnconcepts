// import Image from "next/image";

// // Dummy images – replace with your employees' real images
// import devImg from "../assets/myimg.jpg";
// import designImg from "../assets/m2.jpg";
// import strategistImg from "../assets/m3.jpg";
// import supportImg from "../assets/m4.jpg";

// const team = [
//   {
//     image: devImg,
//     name: "Ahmed Raza",
//     role: "Senior Full-Stack Developer",
//     description:
//       "Expert in MERN stack, React Native building scalable and efficient web applications and android application tailored to client needs.",
//   },
//   {
//     image: designImg,
//     name: "Tripti Agrawal",
//     role: "Senior Designer",
//     description:
//       "Passionate about creating intuitive and engaging digital experiences with clean, modern design.",
//   },
//   {
//     image: strategistImg,
//     name: "Kshitij Shoundik",
//     role: "Digital Marketing Executive",
//     description:
//       "Aligns technology with business goals, helping clients leverage IT for sustainable growth.",
//   },
//   {
//     image: supportImg,
//     name: "Akshay Raj",
//     role: "Team Manager",
//     description:
//       "Dedicated to ensuring smooth communication, timely delivery, and long-term client satisfaction.",
//   },
// ];

// const Team = () => {
//   return (
//     <div className="w-full h-auto py-16 bg-[#0f172a]" id="team">
//       <div className="max-w-[1240px] mx-auto text-center">
//         <h1 className="text-center text-3xl sm:text-4xl font-bold text-[#ffffff]">
//           Our <span className="text-[#60a5fa]">Expert Team</span>
//         </h1>
//         <p className="text-gray-400 text-center max-w-[700px] mx-auto mt-4 text-lg">
//           Meet our passionate team of developers, designers, and digital
//           strategists who bring your vision to life.
//         </p>

//         {/* Scrolling container */}
//         <div className="overflow-hidden relative mt-12">
//           <div className="flex gap-8 animate-scroll hover:[animation-play-state:paused]">
//             {team.concat(team).map(({ image, name, role, description }, idx) => (
//               <div
//                 key={idx}
//                 className="bg-[#1e293b] min-w-[260px] max-w-[260px] rounded-2xl shadow-lg shadow-black/50 p-6"
//               >
//                 <Image
//                   src={image}
//                   alt={name}
//                   className="w-24 h-24 rounded-full mx-auto object-cover shadow-md"
//                 />
//                 <h2 className="text-lg font-semibold text-gray-100 mt-4">{name}</h2>
//                 <p className="text-[#5651e5] font-medium text-sm">{role}</p>
//                 <p className="text-gray-400 text-sm mt-3">{description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Custom animation styles */}
//       <style jsx>{`
//         @keyframes scroll {
//           0% {
//             transform: translateX(0%);
//           }
//           100% {
//             transform: translateX(-50%);
//           }
//         }
//         .animate-scroll {
//           display: flex;
//           width: max-content;
//           animation: scroll 20s linear infinite;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Team;




import Image from "next/image";

import image1 from "../assets/developer.jpg";
import image2 from "../assets/designer.png";
import image3 from "../assets/strategy.webp";

const stats = [
  {
    image: image1,
    heading: "Development Team",
    para: "Full-stack developers specializing in modern web technologies and scalable solutions.",
  },
  {
    image: image2,
    heading: "Design Team",
    para: "Creative designers focused on user experience and beautiful, functional interfaces.",
  },
  {
    image: image3,
    heading: "Digital Marketing Team",
    para: "Experts who craft data-driven campaigns to boost brand visibility and engagement.",
  },
];

const Team = () => {
  return (
    <div className="w-full py-20 bg-[#0f172a] text-white -mb-[5px]">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <h1 className="text-center text-3xl sm:text-4xl font-bold">
          Our <span className="text-[#60a5fa]">Expert Team</span>
        </h1>
        <p className="text-gray-400 text-center max-w-[700px] mx-auto mt-4 text-lg">
          Meet our passionate team of developers, designers, and digital
          strategists who bring your vision to life.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-12 px-4">
          {stats.map(({ image, heading, para }, idx) => (
            <div
              key={idx}
              className="bg-[#1e293b] rounded-2xl shadow-lg p-8 text-center hover:scale-105 transition-transform duration-300"
            >
              <div className="flex justify-center">
                <Image
                  src={image}
                  alt={heading}
                  className="w-24 h-24 rounded-full object-cover border-4 border-[#60a5fa] shadow-md"
                />
              </div>
              <h2 className="text-xl font-semibold mt-6">{heading}</h2>
              <p className="text-gray-400 mt-3 text-sm leading-relaxed">
                {para}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;



// import Image from "next/image";

// import image1 from '../assets/developer.jpg'
// import image2 from '../assets/designer.png';
// import image3 from '../assets/strategy.webp';


// const stats = [
//     {
//         image: image1,
//         heading: "Development Team",
//         para: "Full-stack developers specializing in modern web technologies and scalable solutions."
//     },
//     {
//         image: image2,
//         heading: "Design Team",
//         para: "Creative designers focused on user experience and beautiful, functional interfaces."
//     },
//     {
//         image: image3,
//         heading: "Strategy Team",
//         para: "Digital strategists who align technology solutions with business objectives."
//     },
//   ];


 

// const Team=()=>{
//     return(
//         <div className='w-full h-auto p-2'>
//             <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
//                 <h1 className='py-4 text-gray-700'>Our <span className='text-[#5651e5]'>Expert Team</span></h1>
//                     <p className='py-2 text-gray-600 text-[25px]'>Meet our passionate team of developers, designers, and digital strategists<br />who bring your vision to life.</p>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[20px]">

//                      {stats.map(({ image, heading, para }, idx) => (
//                         <div
//                         key={idx}
//                         className='max-w-sm mx-auto bg-white rounded-2xl shadow-md p-6 text-center'
//                         >
//                          <Image
//         src={image}
//         alt="Design Team"
//         className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
//       />
//       <h2 className="text-lg font-bold">{heading}</h2>

//       <p className="text-gray-600 mt-2">
//         {para}
//       </p>
//                         </div>
//                     ))}



                     


//                 </div>
//             </div>
//         </div>
//     )
// }
// export default Team;