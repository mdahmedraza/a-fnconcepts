const About = () => {
  return (
    <div
      id="about"
      className="w-full flex items-center py-20 bg-[#0f172a] text-white -mb-[5px]"
    >
      <div className="p-2 w-full md:max-w-[1240px] m-auto md:grid md:grid-cols-3 md:gap-8">
        {/* Text Section */}
        <div className="md:col-span-2">
          <h1 className="py-4 text-3xl sm:text-4xl font-bold">
            About <span className="text-[#60a5fa]">FN Concepts</span>
          </h1>
          <p className="py-2 text-gray-300 text-lg sm:text-xl">
            Founded in 2025, <span className="text-[#a78bfa] font-semibold">FN Concepts</span> is a
            Digital Marketing & IT Solutions Agency, dedicated to providing
            advanced technology solutions that empower businesses to thrive in
            the digital age.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex justify-center items-center mt-8 md:mt-0">
          <div className="w-full h-auto max-w-[340px] shadow-xl shadow-gray-800 rounded-xl flex items-center justify-center p-4 bg-[#1e293b]">
            <img
              className="rounded-xl"
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
              alt="about FN Concepts"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;





// const About = () => {
//   return (
//     <div id="about" className="w-full flex items-center py-16">
//       <div className="p-2 w-full md:max-w-[1240px] m-auto md:grid md:grid-cols-3 md:gap-8">
        
//         <div className="md:col-span-2">
//           <h1 className="py-4 text-gray-700">
//             About <span className="text-[#5651e5]">FN concepts</span>
//           </h1>
//           <p className="py-2 text-gray-600 text-[25px]">
//             Founded in 2025, FN concepts Digital Marketing & IT Solutions Agency, is dedicated to providing
//             affordable, advanced technology solutions that empower businesses
//             to thrive in the digital age.
//           </p>
//         </div>

//         <div className="flex justify-center items-center">
//           <div className="w-full h-auto max-w-[340px] shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
//             <img
//               className="rounded-xl"
//               src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
//               alt="about me"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;


