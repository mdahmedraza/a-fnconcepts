import Image from 'next/image';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import InternationalBtn from './international-btn/InternationalBtn';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  return (
    <div
      className={
        shadow
          ? 'fixed w-full h-20 shadow-lg z-[100] bg-[#0f0f11]/90 backdrop-blur-md transition-colors duration-300'
          : 'fixed w-full h-20 z-[100] bg-transparent'
      }
    >
      <div className="flex justify-between items-center w-full h-full px-4 md:px-16">
        {/* Logo */}
        <Link href="/">
          <Image src={logo} alt="Future Navi Concepts" width={140} height="auto" priority />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-6">
            <Link href="/">
              <li className="text-sm uppercase text-white hover:text-[#5651e5] transition-colors">
                Home
              </li>
            </Link>
            <Link href="/#about">
              <li className="text-sm uppercase text-white hover:text-[#5651e5] transition-colors">
                About
              </li>
            </Link>
            <Link href="/#skills">
              <li className="text-sm uppercase text-white hover:text-[#5651e5] transition-colors">
                Services
              </li>
            </Link>
            <Link href="/#projects">
              <li className="text-sm uppercase text-white hover:text-[#5651e5] transition-colors">
                Projects
              </li>
            </Link>
          </ul>
          {/* Contact button only visible on desktop */}
          <Link href="/#contact">
            <InternationalBtn title="Contact" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div onClick={handleNav} className="md:hidden text-white cursor-pointer">
          <Bars3Icon className="h-7 w-7" />
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={nav ? 'md:hidden fixed inset-0 bg-black/70' : ''}>
        <div
          className={
            nav
              ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#1c1c1f] p-6 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-6 ease-in duration-500'
          }
        >
          {/* Header */}
          <div className="flex w-full items-center justify-between">
            <Image src={logo} alt="logo" width={120} height="auto" />
            <div
              onClick={handleNav}
              className="rounded-full shadow-lg shadow-gray-700 p-3 cursor-pointer text-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </div>
          </div>
          <div className="border-b border-gray-600 my-4">
            <p className="text-gray-300">Let's build something legendary together</p>
          </div>

          {/* Links */}
          <ul className="uppercase text-gray-200">
            <Link href="/">
              <li
                onClick={() => setNav(false)}
                className="py-4 text-sm hover:text-[#5651e5] transition-colors"
              >
                Home
              </li>
            </Link>
            <Link href="/#about">
              <li
                onClick={() => setNav(false)}
                className="py-4 text-sm hover:text-[#5651e5] transition-colors"
              >
                About
              </li>
            </Link>
            <Link href="/#skills">
              <li
                onClick={() => setNav(false)}
                className="py-4 text-sm hover:text-[#5651e5] transition-colors"
              >
                Services
              </li>
            </Link>
            <Link href="/#projects">
              <li
                onClick={() => setNav(false)}
                className="py-4 text-sm hover:text-[#5651e5] transition-colors"
              >
                Projects
              </li>
            </Link>
            <Link href="/#contact">
              <li
                onClick={() => setNav(false)}
                className="py-4 text-sm hover:text-[#5651e5] transition-colors"
              >
                Contact
              </li>
            </Link>
          </ul>

          {/* Socials */}
          <div className="pt-16">
            <p className="uppercase tracking-widest text-[#5651e5]">Let's Connect</p>
            <div className="flex items-center gap-6 mt-4">
              <div
                className="rounded-full shadow-md shadow-gray-600 p-2 cursor-pointer hover:scale-105 ease-in duration-300 text-white"
                onClick={() => (window.location.href = 'https://www.facebook.com/share/171YeEd3Ja/')}
              >
                <FaFacebookF className="h-5 w-5" />
              </div>
              <div
                className="rounded-full shadow-md shadow-gray-600 p-2 cursor-pointer hover:scale-105 ease-in duration-300 text-white"
                onClick={() =>
                  (window.location.href =
                    'https://www.instagram.com/futurenaviconcepts?utm_source=qr&igsh=dWJqNmJ3Z3Q2d3Ju')
                }
              >
                <FaInstagram className="h-5 w-5" />
              </div>
              <div
                className="rounded-full shadow-md shadow-gray-600 p-2 cursor-pointer hover:scale-105 ease-in duration-300 text-white"
                onClick={() =>
                  (window.location.href =
                    'https://www.linkedin.com/in/future-navi-concepts-b04197346?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app')
                }
              >
                <FaLinkedinIn className="h-5 w-5" />
              </div>
              <div
                className="rounded-full shadow-md shadow-gray-600 p-2 cursor-pointer hover:scale-105 ease-in duration-300 text-white"
                onClick={() =>
                  (window.location.href =
                    'https://x.com/FN__Concepts?t=fo41DFkj_KV9fu3VW6oe_g&s=08')
                }
              >
                <FaTwitter className="h-5 w-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;




// import Image from 'next/image';
// import Link from 'next/link';
// import { Bars3Icon, XMarkIcon, UserIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
// import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
// import {useState, useEffect} from 'react';
// import logo from '../assets/logo.png';
// import InternationalBtn from './international-btn/InternationalBtn';

// const Navbar=()=>{
//     const [nav, setNav]=useState(false);
//     const [shadow, setShadow]=useState(false);
//     const handleNav=()=>{
//         setNav(!nav)
//     }
//     useEffect(()=>{
//         const handleShadow=()=>{
//             if(window.scrollY>=90){
//                 setShadow(true);
//             }else{
//                 setShadow(false);
//             }
//         };
//         window.addEventListener('scroll', handleShadow)
//     },[])
//     return(
//         <div className={shadow? 'fixed w-full h-20 shadow-xl z-[100] bg-white/10 backdrop-blur-md': 'fixed w-full h-20 z-[100]'}>
//             <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
//                 <Image src={logo} alt='logo' width='140' height='auto' />
//                 <div style={{display: "flex", alignItems: "center", gap: "40px"}}>
//                     <ul className='hidden md:flex'>
//                         <Link href='/'>
//                             <li className="ml-10 text-sm uppercase hover:border-b text-[#ffffff]">Home</li>
//                         </Link>
//                         <Link href='/#about'>
//                             <li className="ml-10 text-sm uppercase hover:border-b text-[#ffffff]">About</li>
//                         </Link>
//                         <Link href='/#skills'>
//                             <li className="ml-10 text-sm uppercase hover:border-b text-[#ffffff]">Services</li>
//                         </Link>
//                         <Link href='/#projects'>
//                             <li className="ml-10 text-sm uppercase hover:border-b text-[#ffffff]">Projects</li>
//                         </Link>
//                     </ul>
//                     <Link href='/#contact'>
//                             <InternationalBtn title="contact" />
//                         </Link>
//                     <div onClick={handleNav} className="md:hidden">
//                         <Bars3Icon className="h-6 w-6" />
//                     </div>
//                 </div>
//             </div>
//             <div className={nav?'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70':''}>
//                 <div 
//                 className={
//                     nav
//                     ?'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-3 ease-in duration-500'
//                     :'fixed left-[-100%] top-0 p-3 ease-in duration-500'}>
//                     <div>
//                         <div className='flex w-full items-center justify-between'>
//                             <Image src={logo} alt='logo' width='120' height='auto' />
//                             <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
//                                 <XMarkIcon className='h-5 w-5' />
//                             </div>
//                         </div>
//                         <div className='border-b border-gray-300 my-4'>
//                             <p>Let's build something legendary together</p>
//                         </div>
//                     </div>
//                     <div className='py-4 flex flex-col'>
//                         <ul className='uppercase'>
//                             <Link href='/'>
//                                 <li onClick={()=>setNav(false)} className='py-4 text-sm'>Home</li>
//                             </Link>
//                             <Link href='/#about'>
//                                 <li onClick={()=>setNav(false)} className='py-4 text-sm'>About</li>
//                             </Link>
//                             <Link href='/#skills'>
//                                 <li onClick={()=>setNav(false)} className='py-4 text-sm'>Services</li>
//                             </Link>
//                             <Link href='/#projects'>
//                                 <li onClick={()=>setNav(false)} className='py-4 text-sm'>Projects</li>
//                             </Link>
//                             <Link href='/#contact'>
//                                 <li onClick={()=>setNav(false)} className='py-4 text-sm'>Contact</li>
//                             </Link>
//                         </ul>
//                         <div className='pt-20'>
//                             <p className='uppercase tracking-widest text-[#5651e5]'>
//                                 Let's Connect
//                             </p>
//                             <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                                
//                                 <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300' onClick={() => window.location.href = "https://www.facebook.com/share/171YeEd3Ja/"}>
//                                     <FaFacebookF className='h-5 w-5' />
//                                 </div>
//                                 <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'  onClick={() => window.location.href = "https://www.instagram.com/futurenaviconcepts?utm_source=qr&igsh=dWJqNmJ3Z3Q2d3Ju"}>
//                                     <FaInstagram className='h-5 w-5' />
//                                 </div>
//                                 <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
//                                     <FaLinkedinIn className='h-5 w-5'  onClick={() => window.location.href = "https://www.linkedin.com/in/future-navi-concepts-b04197346?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"} />
//                                 </div>
//                                 <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
//                                     <FaTwitter className='h-5 w-5'  onClick={() => window.location.href = "https://x.com/FN__Concepts?t=fo41DFkj_KV9fu3VW6oe_g&s=08"} />
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }
// export default Navbar;