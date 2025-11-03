import React from 'react';
import ChildBanner from '@/child/ChildBanner';
import ChildMain from '@/child/ChildMain';
import ChildPackage from '@/child/ChildPackage';

import {
    Instagram,
    Facebook,
    Search,
    TrendingUp
} from "lucide-react";

const stats = [
  {
    icon: <Instagram size={25} />,
    heading: "Social Media Post Designing",
    para: "Up to 10 custom-designed posts for Facebook, Instagram, etc.",
  },
  {
    icon: <Facebook size={25} />,
    heading: "Meta Ads Setup",
    para: "Facebook + Instagram ad campaign setup & basic management",
  },
  {
    icon: <Search size={25} />,
    heading: "Google Ads Setup",
    para: "Setup of 1 Google Ads campaign (Search or Display)",
  },
  {
    icon: <TrendingUp size={25} />,
    heading: "Analytics & Reporting",
    para: "Performance tracking and detailed campaign analytics",
  }
];



const service = [
  {
    heading: "Startup Marketing",
    price: "₹15,000/mo",
    list: ["Basic SEO optimization", "Social media setup", "Google My Business", "Monthly reports", "Email support"],
    btn: "/website",
  },
  {
    heading: "Growth Marketing",
    price: "₹35,000/mo",
    list: ["Advanced SEO strategy", "PPC campaign management", "Social media marketing", "Content creation", "Weekly reports"],
    btn: "/application",
  },
  {
    heading: "Enterprise Marketing",
    price: "Custom",
    list: ["Comprehensive marketing strategy", "Multi-platform campaigns", "Advanced analytics", "Dedicated account manager", "Custom reporting"],
    btn: "/graphic-desing",
  },
];



const website = () => {
    return(
        <>
        <ChildBanner
            heading1="Digital Marketing"
            heading2="Solutions"
            para="Complete digital marketing services including social media management, Meta & Google Ads setup, and creative designing."
        />
        <ChildMain
            stats={stats}
            ttl1="What's"
            ttl2="Included"
            desc="Comprehensive digital marketing services to boost your online presence"
        />
        
        <ChildPackage
            service={service}
            ttl1="Monthly"
            ttl2="Packages"
            desc="Ongoing digital marketing solutions for sustained growth" />
        </>
    )
}

export default website;
