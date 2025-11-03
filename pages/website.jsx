import React from 'react';
import ChildBanner from '@/child/ChildBanner';
import ChildMain from '@/child/ChildMain';
import ChildPackage from '@/child/ChildPackage';

import {
  Code,
  Smartphone,
  Search,
  ShoppingCart
} from "lucide-react";

const stats = [
  {
    icon: <Code size={25} />,
    heading: "WordPress & Shopify",
    para: "Professional websites with modern CMS solutions",
  },
  {
    icon: <Smartphone size={25} />,
    heading: "Mobile Responsive",
    para: "Perfect experience across all devices and screen sizes",
  },
  {
    icon: <Search size={25} />,
    heading: "SEO Optimized",
    para: "Built-in SEO setup for better search rankings",
  },
  {
    icon: <ShoppingCart size={25} />,
    heading: "E-commerce Ready",
    para: "Complete online store with product management",
  }
];

const service = [
  {
    heading: "Basic Package",
    price: "₹10,000 – ₹15,000",
    list: ["WordPress / Shopify Website", "Mobile Responsive Design", "Basic SEO Setup", "Product Listing (10 items)", "1-Month Support"],
    btn: "/website",
  },
  {
    heading: "Standard Package",
    price: "₹18,000 – ₹25,000",
    list: ["Dynamic Website (up to 10 Pages)", "On-Page SEO", "Product Listing (up to 30 items)", "Google My Business Setup", "1 Month Social Media Posting"],
    btn: "/application",
  },
  {
    heading: "Premium Package",
    price: "₹28,000 – ₹40,000",
    list: ["Ecommerce or Business Website", "Advanced SEO (On-page + Off-page)", "Product Catalog Listing", "Meta & Google Ads Setup", "Monthly Reporting & Support"],
    btn: "/graphic-desing",
  },
];



const website = () => {
    return(
        <>
        <ChildBanner
            heading1="Website &"
            heading2="Digital Services"
            para="Professional WordPress, Shopify & custom websites with complete digital solutions. From basic websites to advanced e-commerce platforms."
        />
        <ChildMain
            stats={stats}
            ttl1="Why Choose Our"
            ttl2="Web Development"
            desc="We build websites that not only look great but perform exceptionally well"
        />
        <ChildPackage
            service={service}
            ttl1="Service"
            ttl2="Packages"
            desc="Comprehensive website solutions for every business need" />
        </>
    )
}

export default website;
