

import { ArrowUpTrayIcon } from "@heroicons/react/24/solid";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import Location from "./Location";

const Contact = () => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNumber, setEnteredNumber] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredSubject, setEnteredSubject] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    const data = {
      name: enteredName,
      number: enteredNumber,
      email: enteredEmail,
      subject: enteredSubject,
      message: enteredMessage,
    };
    axios
      .post("https://a-fnconcepts-server.onrender.com/api/users", data)
      .then((response) => {
        alert("Message Sent Successfully ✅");
      })
      .catch((error) => {
        console.log(error);
      });

    setEnteredEmail("");
    setEnteredMessage("");
    setEnteredName("");
    setEnteredNumber("");
    setEnteredSubject("");
  };

  return (
    <div id="contact" className="w-full bg-[#0f172a] text-gray-200 -mb-[5px]">
      <div className="max-w-[1240px] mx-auto px-4 py-16 w-full">
        {/* Heading */}
        <p className="text-xl tracking-widest uppercase text-[#A78BFA]">Contact</p>
        <h2 className="py-4 text-3xl sm:text-4xl font-bold">Get in Touch</h2>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Form */}
          <div className="col-span-3 w-full h-auto bg-[#1e293b] rounded-xl p-6 shadow-lg shadow-black/30">
            <form onSubmit={submitHandler}>
              <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                <div className="flex flex-col">
                  <label className="uppercase text-sm py-2">Name</label>
                  <input
                    className="border rounded-lg p-3 bg-transparent border-gray-600 focus:outline-none focus:border-[#A78BFA]"
                    onChange={(e) => setEnteredName(e.target.value)}
                    value={enteredName}
                    type="text"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="uppercase text-sm py-2">Phone Number</label>
                  <input
                    className="border rounded-lg p-3 bg-transparent border-gray-600 focus:outline-none focus:border-[#A78BFA]"
                    onChange={(e) => setEnteredNumber(e.target.value)}
                    value={enteredNumber}
                    type="text"
                  />
                </div>
              </div>
              <div className="flex flex-col py-2">
                <label className="uppercase text-sm py-2">Email</label>
                <input
                  className="border rounded-lg p-3 bg-transparent border-gray-600 focus:outline-none focus:border-[#A78BFA]"
                  onChange={(e) => setEnteredEmail(e.target.value)}
                  value={enteredEmail}
                  type="email"
                />
              </div>
              <div className="flex flex-col py-2">
                <label className="uppercase text-sm py-2">Subject</label>
                <input
                  className="border rounded-lg p-3 bg-transparent border-gray-600 focus:outline-none focus:border-[#A78BFA]"
                  onChange={(e) => setEnteredSubject(e.target.value)}
                  value={enteredSubject}
                  type="text"
                />
              </div>
              <div className="flex flex-col py-2">
                <label className="uppercase text-sm py-2">Message</label>
                <textarea
                  className="border rounded-lg p-3 bg-transparent border-gray-600 focus:outline-none focus:border-[#A78BFA]"
                  rows="6"
                  onChange={(e) => setEnteredMessage(e.target.value)}
                  value={enteredMessage}
                ></textarea>
              </div>
              <button className="w-full p-4 mt-4 rounded-lg bg-gradient-to-r  text-white hover:opacity-90 transition">
                Send Message
              </button>
            </form>
          </div>

          {/* Social + Location */}
          <div className="col-span-3 lg:col-span-2 w-full h-full bg-[#1e293b] rounded-xl p-6 shadow-lg shadow-black/30">
            <Location />
            <div>
              <p className="uppercase pt-8">Connect With Us</p>
              <div className="flex items-center justify-between py-6">
                <div
                  className="rounded-full shadow-md bg-[#0f172a] p-5 cursor-pointer hover:scale-110 ease-in duration-300"
                  onClick={() => (window.location.href = "https://www.facebook.com/share/171YeEd3Ja/")}
                >
                  <FaFacebookF className="h-5 w-5" />
                </div>
                <div
                  className="rounded-full shadow-md bg-[#0f172a] p-5 cursor-pointer hover:scale-110 ease-in duration-300"
                  onClick={() =>
                    (window.location.href =
                      "https://www.instagram.com/futurenaviconcepts?utm_source=qr&igsh=dWJqNmJ3Z3Q2d3Ju")
                  }
                >
                  <FaInstagram className="h-5 w-5" />
                </div>
                <div
                  className="rounded-full shadow-md bg-[#0f172a] p-5 cursor-pointer hover:scale-110 ease-in duration-300"
                  onClick={() =>
                    (window.location.href =
                      "https://www.linkedin.com/in/future-navi-concepts-b04197346")
                  }
                >
                  <FaLinkedinIn className="h-5 w-5" />
                </div>
                <div
                  className="rounded-full shadow-md bg-[#0f172a] p-5 cursor-pointer hover:scale-110 ease-in duration-300"
                  onClick={() => (window.location.href = "https://x.com/FN__Concepts")}
                >
                  <FaTwitter className="h-5 w-5" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Back to Top */}
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full bg-[#1e293b] p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <ArrowUpTrayIcon className="h-5 w-5" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;



// import { UserIcon, EnvelopeIcon, ArrowUpTrayIcon } from '@heroicons/react/24/solid'
// import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
// import Image from 'next/image';
// import Link from 'next/link';
// import {useState} from 'react';
// import axios from 'axios';
// import Location from './Location';

// const Contact=()=>{
//     const [enteredName, setEnteredName]=useState('');
//     const [enteredNumber, setEnteredNumber]=useState('');
//     const [enteredEmail, setEnteredEmail]=useState('');
//     const [enteredSubject, setEnteredSubject]=useState('');
//     const [enteredMessage, setEnteredMessage]=useState('');
//     const submitHandler=(event)=>{
//         event.preventDefault();
//         const data={
//             name: enteredName,
//             number: enteredNumber,
//             email: enteredEmail,
//             subject: enteredSubject,
//             message: enteredMessage
//         }
//         axios.post("https://a-fnconcepts-server.onrender.com/api/users", data)
//         .then(response=>{
//             alert("Data Send Successfully")
//         })
//         .catch(error=>{
//             console.log(error)
//         })
//         setEnteredEmail('');
//         setEnteredMessage('');
//         setEnteredName('');
//         setEnteredNumber('');
//         setEnteredSubject('');
//     }
//     const nameHandler=(event)=>{
//         setEnteredName(event.target.value);
//     }
//     const numberHandler=(event)=>{
//         setEnteredNumber(event.target.value);
//     }
//     const emailHandler=(event)=>{
//         setEnteredEmail(event.target.value);
//     }
//     const subjectHandler=(event)=>{
//         setEnteredSubject(event.target.value);
//     }
//     const messageHandler=(event)=>{
//         setEnteredMessage(event.target.value);
//     }
//     return(
//         <div id='contact' className='p-2 w-full '>
//             <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
//                 <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
//                     Contact
//                 </p>
//                 <h2 className='py-4'>get in touch</h2>
//                 <div className='grid lg:grid-cols-5 gap-8'>
                    
//                     <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
//                         <div className='p-4'>
//                             <form onSubmit={submitHandler}>
//                                 <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
//                                     <div className='flex flex-col'>
//                                         <label className='uppercase text-sm py-2'>Name</label>
//                                         <input className='border-2 rounded-lg p-3 flex border-gray-300' onChange={nameHandler} value={enteredName} type='text' />
//                                     </div>
//                                     <div className='flex flex-col'>
//                                         <label className='uppercase text-sm py-2'>Phone Number</label>
//                                         <input className='border-2 rounded-lg p-3 flex border-gray-300' onChange={numberHandler} value={enteredNumber} type='text' />
//                                     </div>
//                                 </div>
//                                 <div className='flex flex-col py-2'>
//                                     <label className='uppercase text-sm py-2'>Email</label>
//                                     <input className='border-2 rounded-lg p-3 flex border-gray-300' onChange={emailHandler} value={enteredEmail} type='text' />
//                                 </div>
//                                 <div className='flex flex-col py-2'>
//                                     <label className='uppercase text-sm py-2'>Subject</label>
//                                     <input className='border-2 rounded-lg p-3 flex border-gray-300' onChange={subjectHandler} value={enteredSubject} type='text' />
//                                 </div>
//                                 <div className='flex flex-col py-2'>
//                                     <label className='uppercase text-sm py-2'>Message</label>
//                                     <textarea className='border-2 rounded-lg p-3 border-gray-300' rows='10' onChange={messageHandler} value={enteredMessage}></textarea>
//                                 </div>
//                                 <button className='w-full p-4 text-gray-100 mt-4'>Send Message</button>
//                             </form>
//                         </div>
//                     </div>
//                     <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
//                         <div className='lg:p-4 h-full'>
                            
//                             <Location />
//                             <div>
//                                 <p className='uppercase pt-8'>Connect With Me</p>
//                                 <div className='flex items-center justify-between py-4'>
                                    
//                                     <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300' onClick={() => window.location.href = "https://www.facebook.com/share/171YeEd3Ja/"}>
//                                         <FaFacebookF className='h-5 w-5' />
//                                     </div>
//                                     <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300' onClick={() => window.location.href = "https://www.instagram.com/futurenaviconcepts?utm_source=qr&igsh=dWJqNmJ3Z3Q2d3Ju"}>
//                                         <FaInstagram className='h-5 w-5' />
//                                     </div>
//                                     <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300' onClick={() => window.location.href = "https://www.linkedin.com/in/future-navi-concepts-b04197346?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"}>
//                                         <FaLinkedinIn className='h-5 w-5' />
//                                     </div>
//                                     <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300' onClick={() => window.location.href = "https://x.com/FN__Concepts?t=fo41DFkj_KV9fu3VW6oe_g&s=08"}>
//                                         <FaTwitter className='h-5 w-5' />
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className='flex justify-center py-12'>
//                     <Link href='/'>
//                         <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
//                             <ArrowUpTrayIcon className='h-5 w-5' />
//                         </div>
//                     </Link>
//                 </div>
//             </div>
//         </div>
//     )
// }
// export default Contact;


