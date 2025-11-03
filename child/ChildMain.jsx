
const Services = ({stats, ttl1, ttl2, desc}) => {
  return (
    <div id="skills" className="w-full py-20 bg-[#0f172a] -mb-[5px]">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full px-4">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-white">
          {ttl1} <span className="text-[#A78BFA]">{ttl2}</span>
        </h1>
        <p className="py-4 text-gray-300 text-lg text-center max-w-2xl mx-auto">
          {desc}
        </p>
{/* Grid */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
  {stats.map(({ icon, heading, para, list, btn }, idx) => (
    <div
      key={idx}
      className="p-3 bg-[#1e293b] shadow-md rounded-2xl hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
    >
      {/* Icon */}
      <div className="rounded-xl shadow-md shadow-purple-900/30 h-16 w-16 flex items-center justify-center bg-[#4C1D95] text-[#A78BFA] mb-4">
        {icon}
      </div>

      {/* Heading */}
      <h3 className="text-xl font-semibold text-white mb-4">{heading}</h3>

      {/* Description */}
      <p className=" text-gray-300 text-[15px] leading-relaxed">
        {para}
      </p>
    </div>
  ))}
</div>

      </div>
    </div>
  );
};

export default Services;