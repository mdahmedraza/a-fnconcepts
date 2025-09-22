import { UserIcon, EnvelopeIcon, ArrowUpTrayIcon } from '@heroicons/react/24/solid'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Image from 'next/image';
import Link from 'next/link';
import {useState} from 'react';
import axios from 'axios';
import Location from './Location';

const Contact=()=>{
    const [enteredName, setEnteredName]=useState('');
    const [enteredNumber, setEnteredNumber]=useState('');
    const [enteredEmail, setEnteredEmail]=useState('');
    const [enteredSubject, setEnteredSubject]=useState('');
    const [enteredMessage, setEnteredMessage]=useState('');
    const submitHandler=(event)=>{
        event.preventDefault();
        const data={
            name: enteredName,
            number: enteredNumber,
            email: enteredEmail,
            subject: enteredSubject,
            message: enteredMessage
        }
        axios.post("https://a-fnconcepts-server.onrender.com/api/users", data)
        .then(response=>{
            alert("Data Send Successfully")
        })
        .catch(error=>{
            console.log(error)
        })
//         const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log("the data", formData)
//     try {
//       await axios.post("http://localhost:5000/api/users", formData);
//       alert("Data submitted successfully!");
//       setFormData({ name: "", email: "", age: "", message: "" }); // clear form
//     } catch (err) {
//       console.error(err);
//       alert("Error submitting data");
//     }
//   };
        setEnteredEmail('');
        setEnteredMessage('');
        setEnteredName('');
        setEnteredNumber('');
        setEnteredSubject('');
    }
    const nameHandler=(event)=>{
        setEnteredName(event.target.value);
    }
    const numberHandler=(event)=>{
        setEnteredNumber(event.target.value);
    }
    const emailHandler=(event)=>{
        setEnteredEmail(event.target.value);
    }
    const subjectHandler=(event)=>{
        setEnteredSubject(event.target.value);
    }
    const messageHandler=(event)=>{
        setEnteredMessage(event.target.value);
    }
    return(
        <div id='contact' className='p-2 w-full '>
            <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
                <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
                    Contact
                </p>
                <h2 className='py-4'>get in touch</h2>
                <div className='grid lg:grid-cols-5 gap-8'>
                    
                    {/*right side... */}
                    <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
                        <div className='p-4'>
                            <form onSubmit={submitHandler}>
                                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                                    <div className='flex flex-col'>
                                        <label className='uppercase text-sm py-2'>Name</label>
                                        <input className='border-2 rounded-lg p-3 flex border-gray-300' onChange={nameHandler} value={enteredName} type='text' />
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='uppercase text-sm py-2'>Phone Number</label>
                                        <input className='border-2 rounded-lg p-3 flex border-gray-300' onChange={numberHandler} value={enteredNumber} type='text' />
                                    </div>
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Email</label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-300' onChange={emailHandler} value={enteredEmail} type='text' />
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Subject</label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-300' onChange={subjectHandler} value={enteredSubject} type='text' />
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Message</label>
                                    <textarea className='border-2 rounded-lg p-3 border-gray-300' rows='10' onChange={messageHandler} value={enteredMessage}></textarea>
                                </div>
                                <button className='w-full p-4 text-gray-100 mt-4'>Send Message</button>
                            </form>
                        </div>
                    </div>
                    {/*left side. */}
                    <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
                        <div className='lg:p-4 h-full'>
                            {/* <div>
                                <img className='rounded-xl hover:scale-105 ease-in duration-300' src="https://wallup.net/wp-content/uploads/2018/03/17/540089-programmers-AutoHotkey-code-programming-laptop-ThinkPad.jpg" alt='/' />
                                <div>
                                    <h2 className='py-2'>Name here</h2>
                                    <p>Full-Stack Developer</p>
                                    <p className='py-4'>I am available for freelance or full-time position. Contact me and let's talk.</p>
                                </div>
                            </div> */}
                            <Location />
                            <div>
                                <p className='uppercase pt-8'>Connect With Me</p>
                                <div className='flex items-center justify-between py-4'>
                                    
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300' onClick={() => window.location.href = "https://www.facebook.com/share/171YeEd3Ja/"}>
                                        <FaFacebookF className='h-5 w-5' />
                                    </div>
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300' onClick={() => window.location.href = "https://www.instagram.com/futurenaviconcepts?utm_source=qr&igsh=dWJqNmJ3Z3Q2d3Ju"}>
                                        <FaInstagram className='h-5 w-5' />
                                    </div>
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300' onClick={() => window.location.href = "https://www.linkedin.com/in/future-navi-concepts-b04197346?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"}>
                                        <FaLinkedinIn className='h-5 w-5' />
                                    </div>
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300' onClick={() => window.location.href = "https://x.com/FN__Concepts?t=fo41DFkj_KV9fu3VW6oe_g&s=08"}>
                                        <FaTwitter className='h-5 w-5' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center py-12'>
                    <Link href='/'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <ArrowUpTrayIcon className='h-5 w-5' />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default Contact;




// import React, { useState } from "react";
// import axios from "axios";

// const Form = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     age: "",
//     message: "",
//   });

//   // handle input changes
//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   // handle form submit
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log("the data", formData)
//     try {
//       await axios.post("http://localhost:5000/api/users", formData);
//       alert("Data submitted successfully!");
//       setFormData({ name: "", email: "", age: "", message: "" }); // clear form
//     } catch (err) {
//       console.error(err);
//       alert("Error submitting data");
//     }
//   };

//   return (
//     <div style={{ maxWidth: "400px", margin: "50px auto" }}>
//       <h2>Submit Form</h2>
//       <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        
//         <input
//           type="text"
//           name="name"
//           placeholder="Enter Name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//         />

//         <input
//           type="email"
//           name="email"
//           placeholder="Enter Email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />

//         <input
//           type="number"
//           name="age"
//           placeholder="Enter Age"
//           value={formData.age}
//           onChange={handleChange}
//           required
//         />

//         <textarea
//           name="message"
//           placeholder="Enter Message"
//           value={formData.message}
//           onChange={handleChange}
//           rows="4"
//           required
//         />

//         <button type="submit" style={{ padding: "10px", cursor: "pointer" }}>
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Form;
