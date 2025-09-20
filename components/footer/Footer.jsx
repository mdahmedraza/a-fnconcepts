import React, { useContext } from 'react';
import classes from './Footer.module.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import InternationalBtn from '../international-btn/InternationalBtn';
import logo from '../../assets/logo.png'

import Link from 'next/link';

import { FaRegEnvelope } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { MdLocationOn } from "react-icons/md";

const Footer = () => {
  

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scrolling
    });
  };

  const navigateToPage = (pageId) => {
    navigate(`/?page_id=${pageId}`);
  }

  const handleClick = (pageId) => {
    scrollToTop(); // Scroll to the top
    navigateToPage(pageId); // Navigate to the desired page
  };
  return (
    <footer className={classes.footer}>
      <h2 className={classes.footer_title_1}>What are you waiting for?</h2>
      <h1 className={classes.footer_title_2}>Empowering your business.</h1>
      <InternationalBtn title="click me" />
      <div className={classes.footer_content}>
        <div className={classes.footer_content_section}>
          <h4 style={{fontSize: "25px"}}>FNConcepts</h4>
          <ul>
            <li onClick={() => handleClick(1)}>Empowering businesses with <br />next-generation IT solutions.<br /> Your trusted partner for<br /> digital transformation.</li>
            <li style={{display: "flex", gap: "10px"}} onClick={() => handleClick(5)}><FaRegEnvelope color='#fff' size={20} />hello@test.com</li>
            <li style={{display: "flex", gap: "10px"}} onClick={() => handleClick(5)}><IoCall color='#fff' size={20} />+91 473648385</li>
            <li style={{display: "flex", gap: "10px"}} onClick={() => handleClick(5)}><MdLocationOn color='#fff' size={20} />Ranchi, Jharkhand, India</li>
          </ul>
        </div>
        <div className={classes.footer_content_section}>
          <h4>Quick Links</h4>
          <ul>
            <Link href='/#about'>
            <li>About Us</li>
            </Link>
            <Link href='/#skills'>
            <li>Services</li>
            </Link>
            <Link href='/#projects'>
            <li>Projects</li>
            </Link>
            <Link href='/#contact'>
            <li>Contact</li>
            </Link>
          </ul>
        </div>
        <div className={classes.footer_content_section}>
          <h4>Investing</h4>
          <ul>
            <li onClick={() => handleClick(8)}>Privacy Policy</li>
            <li onClick={() => handleClick(9)}>Terms & Conditions</li>
          </ul>
        </div>
        
        <div className={classes.footer_content_section}>
          <h4>Our Services</h4>
          <ul>
            <Link href='/#skills'>
            <li>Website Development</li>
            </Link>
            <Link href='/#skills'>
            <li>Mobile App Development</li>
            </Link>
            <Link href='/#skills'>
            <li>UI/UX Design</li>
            </Link>
            <Link href='/#skills'>
            <li>SEO & Digital Marketing</li>
            </Link>
            <Link href='/#skills'>
            <li>AI Software Solutions</li>
            </Link>
            <Link href='/#skills'>
            <li>Graphic Design</li>
            </Link>
          </ul>
        </div>
      </div>
      <div className={classes.footer_logos}>
        <img src={logo} style={{width: "80px", height: "auto"}} alt="R" />
        
    <div className={classes.footer_social_icons}>
      <div className={classes.footer_icon_container}>
        <FaFacebookF className={classes.footer_icon} />
      </div>
      <div className={classes.footer_icon_container}>
        <FaTwitter className={classes.footer_icon} />
      </div>
      <div className={classes.footer_icon_container}>
        <FaInstagram className={classes.footer_icon} />
      </div>
      <div className={classes.footer_icon_container}>
        <FaLinkedinIn className={classes.footer_icon} />
      </div>
    </div>
      </div>
      <hr />
      {/* <p className={classes.footer_paraa}></p> */}
      <p className={classes.footer_para}>Copyright © 2025 FNConcepts All rights reserved.</p>
      <p className={classes.footer_para}>FNConcepts Pvt. Ltd., established in 2025, is a leading technology solutions provider specializing in web & app development, AI-driven innovations, digital marketing, SEO, and creative design services. With a commitment to quality, innovation, and client success, FNConcepts empowers businesses to grow and thrive in the digital era.</p>
      <p className={classes.footer_para}>Headquartered in India, FNConcepts operates globally, delivering scalable, secure, and user-focused solutions tailored to each client’s unique needs. Our team of experts ensures end-to-end support, from strategy and design to deployment and growth optimization.</p>
      <p className={classes.footer_para}>At FNConcepts, we believe in transforming ideas into impactful digital experiences while maintaining the highest standards of professionalism, creativity, and technological excellence.</p>
    </footer>
  );
}

export default Footer;

