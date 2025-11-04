import Image from "next/image";
import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpg";
import p4 from "../assets/p4.jpg";
import c1 from "../assets/c1.png";
import c2 from "../assets/c2.png";
import c3 from "../assets/c3.jpg";
import c4 from "../assets/c4.png";

const Partners = ({ head }) => {
  return (
    <div
      id="partners"
      className="w-full py-16 bg-[#0f172a]"
      
    >
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full px-4">
        {/* Heading */}
        <h1 className="py-4 text-center text-3xl sm:text-4xl font-bold text-white">
          Our <span className="text-[#A78BFA]">Partners</span>
        </h1>

        {/* Partner Logos Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          {[p1, p2, p3, p4, c1, c2, c3, c4].map((partner, idx) => (
            <div
              key={idx}
              className="p-6 bg-[#1e293b] rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 flex justify-center items-center"
            >
              <Image
                className="rounded-xl object-contain"
                src={partner}
                alt={`partner-${idx}`}
                width={200}
                height={120}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
