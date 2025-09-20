
// import { Star } from "lucide-react";

// import Button from "./Button";

// const stats = [
//     {
//         image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
//         heading: "Priya Sharma",
//         profession: "Founder, StartUp Hub",
//         para: '"The level of support and attention to detail from ITGenixs is exceptional. They truly understand business needs and deliver accordingly."'
//     },
//     {
//         image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
//         heading: "Priya Sharma",
//         profession: "Founder, StartUp Hub",
//         para: '"The level of support and attention to detail from ITGenixs is exceptional. They truly understand business needs and deliver accordingly."'
//     },
//     {
//         image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
//         heading: "Priya Sharma",
//         profession: "Founder, StartUp Hub",
//         para: '"The level of support and attention to detail from ITGenixs is exceptional. They truly understand business needs and deliver accordingly."'
//     },
//     {
//         image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
//         heading: "Priya Sharma",
//         profession: "Founder, StartUp Hub",
//         para: '"The level of support and attention to detail from ITGenixs is exceptional. They truly understand business needs and deliver accordingly."'
//     },
//     {
//         image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
//         heading: "Priya Sharma",
//         profession: "Founder, StartUp Hub",
//         para: '"The level of support and attention to detail from ITGenixs is exceptional. They truly understand business needs and deliver accordingly."'
//     },
//     {
//         image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
//         heading: "Priya Sharma",
//         profession: "Founder, StartUp Hub",
//         para: '"The level of support and attention to detail from ITGenixs is exceptional. They truly understand business needs and deliver accordingly."'
//     },
//   ];


 

// const Client=()=>{
//     return(
//         <div className='w-full h-auto p-2'>
//             <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
//                 <h1 className='py-4 text-gray-700'>Our <span className='text-[#5651e5]'>Happy Clients</span></h1>
//                     <p className='py-2 text-gray-600 text-[25px]'>Don't just take our word for it. Here's what our clients say about working <br />with FNConcepts.</p>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[20px]">

//                      {stats.map(({ image, heading, profession, para }, idx) => (
                      
//                         <div key={idx} className="max-w-md mx-auto bg-white rounded-2xl shadow-md p-6">
//       <div className="flex items-center gap-4 mb-4">
//         <img
//           src={image}
//           alt="Priya Sharma"
//           className="w-14 h-14 rounded-full object-cover"
//         />
//         <div>
//           <h3 className="font-bold text-gray-900">{heading}</h3>
//           <p className="text-sm text-gray-500">{profession}</p>
//         </div>
//       </div>

//       <div className="flex gap-1 mb-4 text-purple-500">
//         {[...Array(5)].map((_, i) => (
//           <Star key={i} size={18} fill="currentColor" stroke="none" />
//         ))}
//       </div>

//       <p className="text-gray-600 italic text-center">
//         {para}
//       </p>
//     </div>
//                     ))}



                     


//                 </div>
//             </div>
//         </div>
//     )
// }
// export default Client;


import { Star } from "lucide-react";

const stats = [
  {
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?...",
    heading: "Priya Sharma",
    profession: "Founder, StartUp Hub",
    para: '"The level of support and attention to detail from ITGenixs is exceptional. They truly understand business needs and deliver accordingly."'
  },
  {
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?...",
    heading: "Priya Sharma",
    profession: "Founder, StartUp Hub",
    para: '"The level of support and attention to detail from ITGenixs is exceptional. They truly understand business needs and deliver accordingly."'
  },
  // add more...
];

const Client = () => {
  return (
    <div className="w-full h-auto p-2 overflow-hidden">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <h1 className="py-4 text-gray-700">
          Our <span className="text-[#5651e5]">Happy Clients</span>
        </h1>
        <p className="py-2 text-gray-600 text-[25px]">
          Don't just take our word for it. Here's what our clients say about
          working <br />
          with FNConcepts.
        </p>

        {/* Carousel wrapper */}
        <div className="relative w-full overflow-hidden">
          {/* Moving track */}
          <div className="flex gap-6 animate-scroll">
            {stats.concat(stats).map(({ image, heading, profession, para }, idx) => (
              <div
                key={idx}
                className="min-w-[300px] max-w-md bg-white rounded-2xl shadow-md p-6"

              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={image}
                    alt={heading}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-bold text-gray-900">{heading}</h3>
                    <p className="text-sm text-gray-500">{profession}</p>
                  </div>
                </div>

                <div className="flex gap-1 mb-4 text-purple-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" stroke="none" />
                  ))}
                </div>

                <p className="text-gray-600 italic text-center">{para}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tailwind custom animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          display: flex;
          width: max-content;
          animation: scroll 25s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Client;
