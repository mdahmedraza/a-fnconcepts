

import { Star } from "lucide-react";

const stats = [
  {
    name: "Amelia Brown",
    image:
      "https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?cs=srgb&dl=pexels-olly-3756681.jpg&fm=jpg",
    role: "Product Manager, NovaTech",
    review:
      "FNConcepts delivered a seamless app experience that boosted our customer engagement. Their attention to detail was truly impressive.",
  },
  {
    name: "Ravi Patel",
    image:
      "https://static.vecteezy.com/system/resources/previews/024/354/252/non_2x/businessman-isolated-illustration-ai-generative-free-photo.jpg",
    role: "Founder, GreenCore Solutions",
    review:
      "The AI tools developed by FNConcepts helped us optimize workflows and cut costs significantly. A game-changer for our business.",
  },
  {
    name: "Emily Carter",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQal-zoU3mjqRLlaGfm4m4b3OWZAyv6BYvJXQ&s",
    role: "Head of Marketing, Visionary Media",
    review:
      "Their design team created visuals that elevated our brand identity. Creative, responsive, and always exceeding expectations.",
  },
  {
    name: "Daniel Kim",
    image:
      "https://t4.ftcdn.net/jpg/03/25/73/59/360_F_325735908_TkxHU7okor9CTWHBhkGfdRumONWfIDEb.jpg",
    role: "CTO, CloudSphere Inc.",
    review:
      "FNConcepts built a scalable, secure platform for us that can handle rapid growth. Their technical expertise is unmatched.",
  },
  {
    name: "Sofia Lopez",
    image:
      "https://t3.ftcdn.net/jpg/01/91/85/06/360_F_191850653_IkzN9vZTtOtJ8NTKLKOp8PlaY8iCk6Ls.jpg",
    role: "CEO, BrightPath Academy",
    review:
      "From web development to digital marketing, FNConcepts has been our trusted partner. Professional and reliable at every step.",
  },
];

const Client = () => {
  return (
    <div className="w-full py-20 bg-[#0f172a] text-white overflow-hidden -mb-[5px]">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        {/* Section Heading */}
        <h1 className="text-3xl sm:text-4xl font-bold text-center">
          Our <span className="text-[#60a5fa]">Happy Clients</span>
        </h1>
        <p className="py-4 text-gray-400 text-lg text-center">
          Don't just take our word for it. Here's what our clients say about
          working with <span className="text-[#60a5fa]">FNConcepts</span>.
        </p>

        {/* Carousel */}
        <div className="relative w-full overflow-hidden mt-10">
          <div className="flex gap-6 animate-scroll">
            {stats.concat(stats).map(({ image, name, role, review }, idx) => (
              <div
                key={idx}
                className="min-w-[280px] sm:min-w-[320px] max-w-md bg-[#1e293b] text-white rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform duration-300"
              >
                {/* Client Info */}
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={image}
                    alt={name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-[#60a5fa]"
                  />
                  <div>
                    <h3 className="font-bold text-lg">{name}</h3>
                    <p className="text-sm text-gray-400">{role}</p>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4 text-[#60a5fa]">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" stroke="none" />
                  ))}
                </div>

                {/* Review */}
                <p className="text-gray-300 italic text-sm leading-relaxed">
                  {review}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animation CSS */}
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
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Client;


// import { Star } from "lucide-react";

// const stats = [

//   {
//     name: "Amelia Brown",
//     image: "https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?cs=srgb&dl=pexels-olly-3756681.jpg&fm=jpg",
//     role: "Product Manager, NovaTech",
//     review:
//       "FNConcepts delivered a seamless app experience that boosted our customer engagement. Their attention to detail was truly impressive.",
//   },
//   {
//     name: "Ravi Patel",
//     image: "https://static.vecteezy.com/system/resources/previews/024/354/252/non_2x/businessman-isolated-illustration-ai-generative-free-photo.jpg",
//     role: "Founder, GreenCore Solutions",
//     review:
//       "The AI tools developed by FNConcepts helped us optimize workflows and cut costs significantly. A game-changer for our business.",
//   },
//   {
//     name: "Emily Carter",
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQal-zoU3mjqRLlaGfm4m4b3OWZAyv6BYvJXQ&s",
//     role: "Head of Marketing, Visionary Media",
//     review:
//       "Their design team created visuals that elevated our brand identity. Creative, responsive, and always exceeding expectations.",
//   },
//   {
//     name: "Daniel Kim",
//     image: "https://t4.ftcdn.net/jpg/03/25/73/59/360_F_325735908_TkxHU7okor9CTWHBhkGfdRumONWfIDEb.jpg",
//     role: "CTO, CloudSphere Inc.",
//     review:
//       "FNConcepts built a scalable, secure platform for us that can handle rapid growth. Their technical expertise is unmatched.",
//   },
//   {
//     name: "Sofia Lopez",
//     image: "https://t3.ftcdn.net/jpg/01/91/85/06/360_F_191850653_IkzN9vZTtOtJ8NTKLKOp8PlaY8iCk6Ls.jpg",
//     role: "CEO, BrightPath Academy",
//     review:
//       "From web development to digital marketing, FNConcepts has been our trusted partner. Professional and reliable at every step.",
//   },
// ];

// const Client = () => {
//   return (
//     <div className="w-full h-auto p-2 overflow-hidden">
//       <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
//         <h1 className="py-4 text-gray-700">
//           Our <span className="text-[#5651e5]">Happy Clients</span>
//         </h1>
//         <p className="py-2 text-gray-600 text-[25px]">
//           Don't just take our word for it. Here's what our clients say about
//           working <br />
//           with FN concepts.
//         </p>

//         <div className="relative w-full overflow-hidden">
//           <div className="flex gap-6 animate-scroll">
//             {stats.concat(stats).map(({ image, name, role, review }, idx) => (
//               <div
//                 key={idx}
//                 className="min-w-[300px] max-w-md bg-white rounded-2xl shadow-md p-6"

//               >
//                 <div className="flex items-center gap-4 mb-4">
//                   <img
//                     src={image}
//                     alt="sdf"
//                     className="w-14 h-14 rounded-full object-cover"
//                   />
//                   <div>
//                     <h3 className="font-bold text-gray-900">{name}</h3>
//                     <p className="text-sm text-gray-500">{role}</p>
//                   </div>
//                 </div>

//                 <div className="flex gap-1 mb-4 text-purple-500">
//                   {[...Array(5)].map((_, i) => (
//                     <Star key={i} size={18} fill="currentColor" stroke="none" />
//                   ))}
//                 </div>

//                 <p className="text-gray-600 italic text-center">{review}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes scroll {
//           0% {
//             transform: translateX(0);
//           }
//           100% {
//             transform: translateX(-50%);
//           }
//         }
//         .animate-scroll {
//           display: flex;
//           width: max-content;
//           animation: scroll 25s linear infinite;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Client;
