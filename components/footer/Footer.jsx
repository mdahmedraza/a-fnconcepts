
import Image from "next/image";
import classes from './Footer.module.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
// import InternationalBtn from '../international-btn/InternationalBtn';
import logoo from '../../assets/logo.png';

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
      {/* <InternationalBtn title="click me" /> */}
      <div className={classes.footer_content}>
        <div className={classes.footer_content_section}>
          <h4 style={{fontSize: "25px"}}>FN concepts</h4>
          <ul>
            <li>Empowering businesses with <br />next-generation IT solutions.<br /> Your trusted partner for<br /> digital transformation.</li>
            <li style={{display: "flex", gap: "10px"}}><FaRegEnvelope color='#fff' size={20} />futurenaviconcepts@gmail.com</li>
            <li style={{display: "flex", gap: "10px"}}><IoCall color='#fff' size={20} />+91 9835829131</li>
            <li style={{display: "flex", gap: "10px"}}><MdLocationOn color='#fff' size={20} />1428, Sarhul Nagar (near Lalpur), Ranchi, Jharkhand, India</li>
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
            <Link href='/privacyPolicy'>
            <li>Privacy Policy</li>
            </Link>
            <Link href='/termsAndConditions'>
            <li>Terms & Conditions</li>
            </Link>
          </ul>
        </div>
        
        <div className={classes.footer_content_section}>
          <h4>Our Services</h4>
          <ul>
            <Link href='/website'>
            <li>Website Development</li>
            </Link>
            <Link href='/application'>
            <li>Mobile App Development</li>
            </Link>
            <Link href='/ui-ux-design'>
            <li>UI/UX Design</li>
            </Link>
            <Link href='/digital-marketing'>
            <li>SEO & Digital Marketing</li>
            </Link>
            <Link href='/ai-solutions'>
            <li>AI Software Solutions</li>
            </Link>
            <Link href='/graphic-desing'>
            <li>Graphic Design</li>
            </Link>
          </ul>
        </div>
      </div>
      <div className={classes.footer_logos}>
        <Image src={logoo} style={{width: '120px', height: "auto"}} alt="R" />
        
    <div className={classes.footer_social_icons}>
      <div className={classes.footer_icon_container} onClick={() => window.location.href = "https://www.facebook.com/share/171YeEd3Ja/"}>
        <FaFacebookF className={classes.footer_icon} />
      </div>
      <div className={classes.footer_icon_container} onClick={() => window.location.href = "https://x.com/FN__Concepts?t=fo41DFkj_KV9fu3VW6oe_g&s=08"}>
        <FaTwitter className={classes.footer_icon} />
      </div>
      <div className={classes.footer_icon_container} onClick={() => window.location.href = "https://www.instagram.com/futurenaviconcepts?utm_source=qr&igsh=dWJqNmJ3Z3Q2d3Ju"}>
        <FaInstagram className={classes.footer_icon} />
      </div>
      <div className={classes.footer_icon_container} onClick={() => window.location.href = "https://www.linkedin.com/in/future-navi-concepts-b04197346?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"}>
        <FaLinkedinIn className={classes.footer_icon} />
      </div>
    </div>
      </div>
      <hr />
      {/* <p className={classes.footer_paraa}></p> */}
      <p className={classes.footer_para}>Copyright © 2025 FN concepts All rights reserved.</p>
      <p className={classes.footer_para}>FN concepts Digital Marketing & IT Solutions Agency, established in 2025, is a leading technology solutions provider specializing in web & app development, AI-driven innovations, digital marketing, SEO, and creative design services. With a commitment to quality, innovation, and client success, FNConcepts empowers businesses to grow and thrive in the digital era.</p>
      <p className={classes.footer_para}>Headquartered in India, FN concepts operates globally, delivering scalable, secure, and user-focused solutions tailored to each client’s unique needs. Our team of experts ensures end-to-end support, from strategy and design to deployment and growth optimization.</p>
      <p className={classes.footer_para}>At FN concepts, we believe in transforming ideas into impactful digital experiences while maintaining the highest standards of professionalism, creativity, and technological excellence.</p>
    </footer>
  );
}

export default Footer;

