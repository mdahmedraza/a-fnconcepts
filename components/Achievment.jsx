import Image from "next/image";

const stats = [
  { count: "3+", label: "Years of Experience" },
  { count: "50+", label: "Projects Completed" },
  { count: "2+", label: "Global Awards" },
  { count: "95%", label: "Client Satisfaction" },
];

const Achievment = ({ head }) => {
  return (
    <div className="w-full py-20 bg-[#0f172a] text-white -mb-[5px]">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        {/* Section Title */}
        <h2 className="py-4 text-center text-3xl sm:text-4xl font-bold">
          {head || "Our Achievements"}
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-8 px-4">
          {stats.map(({ count, label }, idx) => (
            <div
              key={idx}
              className="p-8 rounded-xl shadow-xl bg-[#1e293b] hover:scale-105 ease-in duration-300 text-center"
            >
              {/* Number inside circle */}
              <div className="w-24 h-24 mx-auto flex items-center justify-center rounded-full bg-[#60a5fa]/20 border-2 border-[#60a5fa] mb-6">
                <span className="text-[#60a5fa] text-3xl font-bold">
                  {count}
                </span>
              </div>

              {/* Label */}
              <h3 className="text-lg font-medium text-gray-300">{label}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievment;



// import Image from "next/image";

// const stats = [
//     { count: "3+", label: "Years of experience" },
//     { count: "50+", label: "Projects" },
//     { count: "2+", label: "Global Awards" },
//     { count: "95%", label: "Satisfaction" },
//   ];

// const Achievment=({head})=>{
//     return(
//         <div className='w-full p-2' style={{margin: '2rem 0px'}}>
//             <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
//                 <h2 className='py-4'>{head}</h2>
//                 <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                   
                    
                    


//     {stats.map(({ count, label }, idx) => (
//         <div
//           key={idx}
//            className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'
//         >
//             <div className='grid grid-cols-2 gap-4 justify-center items-center'>
//           <div className="w-20 h-20 flex items-center justify-center rounded-full bg-blue-100 shadow-md">
//             <span className="text-blue-600 text-xl font-bold">{count}</span>
//           </div>
//           <div className='flex flex-col items-center justify-center'>
//                                 <h3>{label}</h3>
//                             </div>
//           </div>
//         </div>
//       ))}
                   
                    


//                 </div>
//             </div>
//         </div>
//     )
// }
// export default Achievment;