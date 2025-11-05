"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Code, Smartphone, Bot, ChevronLeft, ChevronRight } from "lucide-react";

const Main = () => {
  const slides = [
    {
      id: 1,
      type: "clean",
      top: "INNOVATE • BUILD • SCALE",
      center: "Driving Digital Growth with AI, Development, and Design.",
      bottom:
        "FN Concepts delivers cutting-edge software solutions, AI innovations, and digital strategies that empower businesses to achieve excellence in the modern era.",
      buttons: [
        { type: "icon", icon: <Code size={40} className="text-[#60a5fa]" /> },
        { type: "icon", icon: <Smartphone size={40} className="text-[#a78bfa]" /> },
        { type: "icon", icon: <Bot size={40} className="text-[#34d399]" /> },
      ],
    },
    {
      id: 2,
      type: "image",
      bg: "https://zeetechlabs.com/wp-content/uploads/sites/320/2021/12/Banner-Marketing-Connecticut-1.jpeg",
      top: "TRANSFORM YOUR IDEAS",
      center: "Smart, Scalable & Stunning Software Solutions.",
      bottom:
        "From concept to deployment, we engineer experiences that redefine digital success.",
      buttons: [
        { type: "text", text: "Our Work" },
        { type: "text", text: "Get Started" },
      ],
    },
    {
      id: 3,
      type: "image",
      bg: "https://d1ub0o53i85pdh.cloudfront.net/uploads/2021/09/Facebook-Linkedin-image-template-10.jpg",
      top: "EMPOWER YOUR BUSINESS",
      center: "Next-Gen AI & Web Technologies at Your Fingertips.",
      bottom:
        "We help you stay ahead with intelligent automation, smart designs, and robust engineering.",
      buttons: [
        { type: "text", text: "Learn More" },
        { type: "text", text: "Contact Us" },
      ],
    },
  ];

  // state
  const [index, setIndex] = useState(0); // current slide index (0-based)
  const [isAnimating, setIsAnimating] = useState(false); // blocks rapid navigation
  const timerRef = useRef(null);

  // touch refs
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  // AUTOPLAY: start on mount and restart on manual nav
  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function startAutoPlay() {
    stopAutoPlay();
    timerRef.current = setInterval(() => {
      goNext();
    }, 5000);
  }
  function stopAutoPlay() {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }

  // navigation helpers (prevent rapid clicks)
  const goPrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setIndex((i) => (i === 0 ? slides.length - 1 : i - 1));
    stopAutoPlay();
    setTimeout(() => {
      setIsAnimating(false);
      startAutoPlay();
    }, 700);
  };

  const goNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setIndex((i) => (i + 1) % slides.length);
    stopAutoPlay();
    setTimeout(() => {
      setIsAnimating(false);
      startAutoPlay();
    }, 700);
  };

  // Touch swipe: record start, update end, decide on touchend
  const onTouchStart = (e) => {
    touchStartX.current = e.touches?.[0]?.clientX ?? null;
    touchEndX.current = null;
  };
  const onTouchMove = (e) => {
    touchEndX.current = e.touches?.[0]?.clientX ?? null;
  };
  const onTouchEnd = () => {
    const start = touchStartX.current;
    const end = touchEndX.current;
    if (start == null || end == null) {
      touchStartX.current = null;
      touchEndX.current = null;
      return;
    }
    const diff = start - end;
    if (Math.abs(diff) > 50) {
      if (diff > 0) goNext();
      else goPrev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div
      id="home"
      className={`relative w-full h-screen text-center overflow-hidden flex items-center`}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Slides wrapper - using translateX can be added later; currently we swap background/style per slide */}
      {slides.map((s, i) => {
        const active = i === index;
        return (
          <div
            key={s.id}
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 ease-in-out ${
              active ? "opacity-100 z-30" : "opacity-0 z-10 pointer-events-none"
            }`}
            style={{
              background:
                s.type === "image"
                  ? `url(${s.bg}) center/cover no-repeat`
                  : "linear-gradient(to bottom right, #0f172a, #1e293b, #0f172a)",
            }}
          >
            {/* overlay for readability (pointer-events-none so arrows/buttons remain clickable) */}
            <div className="absolute inset-0 bg-black/50 pointer-events-none" />

            {/* subtle grid for clean slide */}
            {s.type === "clean" && (
              <div className="absolute inset-0 opacity-20 bg-[linear-gradient(45deg,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(-45deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:40px_40px] pointer-events-none" />
            )}

            {/* floating shapes removed glow but keep shapes on clean slide */}
            {s.type === "clean" && (
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute w-8 h-8 bg-[#60a5fa] rounded-full opacity-20 animate-bounce top-10 left-10" />
                <div className="absolute w-10 h-10 bg-[#34d399] opacity-20 animate-[float_6s_ease-in-out_infinite] bottom-16 left-1/3" />
                <div
                  className="absolute w-0 h-0 border-l-[20px] border-r-[20px] border-b-[35px]
                  border-l-transparent border-r-transparent border-b-[#a78bfa]
                  opacity-20 animate-[float_8s_linear_infinite] top-1/4 right-12"
                />
              </div>
            )}

            {/* content */}
            <div className="relative max-w-[1240px] w-full mx-auto px-4 flex flex-col justify-center items-center text-white z-40 pointer-events-none">
              {/* top p */}
              <p
                className={`uppercase text-sm tracking-[4px] text-gray-300 mb-3 transform transition-all duration-700 ${
                  active ? "opacity-100 translate-y-0 animate-from-bottom" : "opacity-0 translate-y-6"
                }`}
                style={{ willChange: "transform, opacity" }}
              >
                {s.top}
              </p>

              {/* center h1 */}
              <h1
                className={`py-4 text-4xl sm:text-5xl font-bold max-w-[90%] m-auto leading-tight text-center transform transition-all duration-700 ${
                  active ? "opacity-100 translate-x-0 animate-from-left" : "opacity-0 -translate-x-6"
                }`}
                style={{ willChange: "transform, opacity" }}
              >
                {s.center}
              </h1>

              {/* bottom p */}
              <p
                className={`py-6 text-gray-200 max-w-[700px] m-auto text-lg transform transition-all duration-700 ${
                  active ? "opacity-100 translate-y-0 animate-from-top" : "opacity-0 -translate-y-6"
                }`}
                style={{ willChange: "transform, opacity" }}
              >
                {s.bottom}
              </p>

              {/* buttons: pointer-events-auto so buttons are clickable even though parent has pointer-events-none */}
              <div className="flex items-center justify-center gap-6 py-4 pointer-events-auto">
                {s.buttons.map((btn, bi) =>
                  btn.type === "icon" ? (
                    <div
                      key={bi}
                      className="rounded-full shadow-lg shadow-[#5651e5]/40 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-[#1e293b]/80"
                    >
                      <Link href="/#contact">{btn.icon}</Link>
                    </div>
                  ) : (
                    <button
                      key={bi}
                      className={`px-6 py-3 rounded-full bg-[#1e293b]/80 text-gray-100 border border-[#5651e5]/30 shadow-lg shadow-[#5651e5]/40 transition-all duration-700 hover:scale-105 ${
                        active
                          ? bi === 0
                            ? "animate-btn-from-left opacity-100 translate-x-0"
                            : "animate-btn-from-right opacity-100 translate-x-0"
                          : bi === 0
                          ? "opacity-0 -translate-x-6"
                          : "opacity-0 translate-x-6"
                      }`}
                    >
                      {btn.text}
                    </button>
                  )
                )}
              </div>
            </div>
          </div>
        );
      })}

      {/* Left arrow - ensure high z and pointer events */}
      <button
        onClick={goPrev}
        className="absolute left-6 md:left-10 top-1/2 -translate-y-1/2 z-50 p-3 md:p-4 bg-[#1e293b]/80 hover:bg-[#1e293b] rounded-full text-white shadow-lg shadow-[#5651e5]/40 transition-all hover:scale-110 pointer-events-auto"
      >
        <ChevronLeft size={32} className="text-[#60a5fa]" />
      </button>

      {/* Right arrow */}
      <button
        onClick={goNext}
        className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 z-50 p-3 md:p-4 bg-[#1e293b]/80 hover:bg-[#1e293b] rounded-full text-white shadow-lg shadow-[#5651e5]/40 transition-all hover:scale-110 pointer-events-auto"
      >
        <ChevronRight size={32} className="text-[#60a5fa]" />
      </button>

      {/* dots (optional) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-50 flex gap-3 pointer-events-auto">
        {slides.map((_, di) => (
          <button
            key={di}
            onClick={() => {
              if (isAnimating) return;
              setIndex(di);
              stopAutoPlay();
              startAutoPlay();
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === di ? "bg-[#60a5fa] scale-125" : "bg-gray-600"
            }`}
          />
        ))}
      </div>

      {/* animation keyframes */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(0);
          }
        }
        @keyframes fromBottom {
          0% {
            transform: translateY(20px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
        @keyframes fromLeft {
          0% {
            transform: translateX(-36px);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes fromTop {
          0% {
            transform: translateY(-20px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
        @keyframes btnFromLeft {
          0% {
            transform: translateX(-36px);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes btnFromRight {
          0% {
            transform: translateX(36px);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .animate-from-bottom {
          animation: fromBottom 650ms cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .animate-from-left {
          animation: fromLeft 700ms cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .animate-from-top {
          animation: fromTop 650ms cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .animate-btn-from-left {
          animation: btnFromLeft 650ms cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .animate-btn-from-right {
          animation: btnFromRight 650ms cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
      `}</style>
    </div>
  );
};

export default Main;




// import Link from 'next/link';
// import { Code, Smartphone, Bot } from "lucide-react";

// const Main = () => {
//   return (
//     <div
//       id="home"
//       className="relative w-full h-screen text-center bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] overflow-hidden flex items-center -mb-[5px]"
//     >
//       {/* Subtle Grid Background */}
//       <div className="absolute inset-0 opacity-20 bg-[linear-gradient(45deg,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(-45deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:40px_40px]"></div>

//       {/* Glow Accent */}
//       <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-[#5651e5] opacity-20 blur-3xl animate-pulse"></div>

//       {/* Animated Shapes */}
//       <div className="absolute inset-0">
//         {/* Circle */}
//         <div className="absolute w-8 h-8 bg-[#60a5fa] rounded-full opacity-20 animate-bounce top-10 left-10"></div>
//         {/* Square */}
//         <div className="absolute w-10 h-10 bg-[#34d399] opacity-20 animate-[float_6s_ease-in-out_infinite] bottom-16 left-1/3"></div>
//         {/* Triangle */}
//         <div className="absolute w-0 h-0 
//             border-l-[20px] border-r-[20px] border-b-[35px] border-l-transparent border-r-transparent border-b-[#a78bfa] 
//             opacity-20 animate-[float_8s_linear_infinite] top-1/4 right-12"></div>
//       </div>

//       {/* Content */}
//       <div className="relative max-w-[1240px] w-full h-full mx-auto px-4 flex justify-center items-center">
//         <div>
//           <p className="uppercase text-sm tracking-[4px] text-gray-400">
//             INNOVATE • BUILD • SCALE
//           </p>
//           <h1 className="py-4 text-white text-4xl sm:text-5xl font-bold max-w-[90%] m-auto leading-tight">
//             Driving Digital Growth with{" "}
//             <span className="text-[#60a5fa] drop-shadow-lg">AI</span>,{" "}
//             <span className="text-[#a78bfa] drop-shadow-lg">Development</span>,{" "}
//             and <span className="text-[#34d399] drop-shadow-lg">Design</span>.
//           </h1>

//           <p className="py-6 text-gray-300 max-w-[700px] m-auto text-lg">
//             FN Concepts delivers cutting-edge software solutions, AI
//             innovations, and digital strategies that empower businesses to
//             achieve excellence in the modern era.
//           </p>

//           {/* Icons Section */}
//           <div className="flex items-center justify-center gap-6 py-4">
//             <div className="rounded-full shadow-lg shadow-[#5651e5]/40 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-[#1e293b]">
//               <Link href="/#contact">
//                 <Code size={40} className="text-[#60a5fa]" />
//               </Link>
//             </div>
//             <div className="rounded-full shadow-lg shadow-[#5651e5]/40 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-[#1e293b]">
//               <Link href="/#contact">
//                 <Smartphone size={40} className="text-[#a78bfa]" />
//               </Link>
//             </div>
//             <div className="rounded-full shadow-lg shadow-[#5651e5]/40 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-[#1e293b]">
//               <Link href="/#contact">
//                 <Bot size={40} className="text-[#34d399]" />
//               </Link>
//             </div>
//           </div>

//           {/* Call to Action */}
          
//         </div>
//       </div>

//       {/* Custom keyframes for floating */}
//       <style jsx>{`
//         @keyframes float {
//           0% {
//             transform: translateY(0px);
//           }
//           50% {
//             transform: translateY(-20px);
//           }
//           100% {
//             transform: translateY(0px);
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Main;

