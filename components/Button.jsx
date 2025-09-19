import { ArrowRight } from "lucide-react";

import Link from 'next/link';

export default function Button() {
  return (
    <div className="py-6">
      <Link href='/#contact'>
      <button className="
        w-full 
        border-2 border-blue-500 
        rounded-md 
         bg-transparent 
        text-[#00000099]
        flex items-center justify-center gap-2
        py-3 
        font-medium 
        transition-all 
        duration-300 
        hover:bg-transparent
        hover:text-white
      ">
        Get Started
        <ArrowRight size={20} />
      </button>
      </Link>
    </div>
  );
}
