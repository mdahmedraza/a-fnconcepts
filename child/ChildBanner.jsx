import React from "react";
import Link from "next/link";

const Banner = ({heading1, heading2, para}) => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center text-center text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1920&q=80')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative max-w-3xl px-4">
        <h1 className="py-4 text-white text-4xl sm:text-5xl font-bold max-w-[90%] m-auto leading-tight">
            {heading1} {" "}
            <span className="text-[#34d399] drop-shadow-lg">{heading2}</span>.
          </h1>

          <p className="py-6 text-gray-300 max-w-[700px] m-auto text-lg">
            {para}
          </p>
        <div className="mt-8">
          <Link href="/#contact">
             
          <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-blue-600 hover:opacity-90 transition shadow-lg">
            Contact Us
          </button>
           </Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;
