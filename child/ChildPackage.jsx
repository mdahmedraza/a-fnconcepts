import { CheckCircle } from "lucide-react";
import Button from "../components/Button";

// const service = [
//   {
//     heading: "Basic Package",
//     price: "₹10,000 – ₹15,000",
//     list: ["WordPress / Shopify Website (Up to 5 Pages)", "Mobile Responsive Design", "Basic SEO Setup", "Product Listing (10 items)", "1-Month Support"],
//     btn: "/website",
//   },
//   {
//     heading: "Standard Package",
//     price: "₹18,000 – ₹25,000",
//     list: ["Dynamic Website (up to 10 Pages)", "On-Page SEO", "Product Listing (up to 30 items)", "Google My Business Setup", "1 Month Social Media Posting"],
//     btn: "/application",
//   },
//   {
//     heading: "Premium Package",
//     price: "₹28,000 – ₹40,000",
//     list: ["Ecommerce or Business Website", "Advanced SEO (On-page + Off-page)", "Product Catalog Listing", "Meta & Google Ads Setup", "Monthly Reporting & Support"],
//     btn: "/graphic-desing",
//   },
// ];

const ChildPackage = ({service, ttl1, ttl2, desc}) => {
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
          {service.map(({ heading, price, list, btn }, idx) => (
            <div
              key={idx}
              className="p-6 bg-[#1e293b] border-2 border-transparent rounded-2xl hover:border-[#60a5fa] hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
            >
              {/* Heading */}
              <h3 className="text-xl font-semibold text-white text-center mb-4">
                {heading}
              </h3>
              <h2 className="text-2xl font-semibold text-center mb-4 text-[#A78BFA]">
                {price}
              </h2>

              {/* Features List */}
              <ul className="space-y-2 text-gray-400 mb-4">
                {list.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle
                      size={18}
                      className="text-[#A78BFA] flex-shrink-0"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <div className="text-center">
                <Button btn={btn} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChildPackage;
