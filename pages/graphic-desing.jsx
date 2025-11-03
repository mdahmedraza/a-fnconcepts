import React from 'react';
import ChildBanner from '@/child/ChildBanner';
import ChildMain from '@/child/ChildMain';
import ChildPackage from '@/child/ChildPackage';

import {
    Palette,
    Images,
    Boxes,
    Sparkles
} from "lucide-react";

const stats = [
  {
    icon: <Palette size={25} />,
    heading: "Brand Identity",
    para: "Logos, color schemes, and complete brand packages",
  },
  {
    icon: <Images size={25} />,
    heading: "Marketing Materials",
    para: "Brochures, flyers, and promotional graphics",
  },
  {
    icon: <Boxes size={25} />,
    heading: "Digital Graphics",
    para: "Social media graphics and web assets",
  },
  {
    icon: <Sparkles size={25} />,
    heading: "Creative Concepts",
    para: "Unique visual solutions for every project",
  }
];


const service = [
  {
    heading: "Brand Starter",
    price: "$799",
    list: ["Logo design (3 concepts)", "Business card design", "Letterhead design", "Basic brand guidelines", "2 revision rounds"],
    btn: "/website",
  },
  {
    heading: "Complete Branding",
    price: "$2,299",
    list: ["Complete brand identity", "Marketing materials package", "Social media templates", "Brand style guide", "Print-ready files"],
    btn: "/application",
  },
  {
    heading: "Enterprise Branding",
    price: "Custom",
    list: ["Comprehensive brand strategy", "Multi-platform materials", "Advanced brand guidelines", "Team training materials", "Ongoing design support"],
    btn: "/graphic-desing",
  },
];



const website = () => {
    return(
        <>
        <ChildBanner
            heading1="Graphic"
            heading2="Design"
            para="Creative visual solutions including branding, marketing materials, and digital graphics that make your business stand out."
        />
        <ChildMain
            stats={stats}
            ttl1="Creative"
            ttl2="Excellence"
            desc="From concept to creation, we deliver visual designs that communicate your brand's unique story"
        />
        
        <ChildPackage
            service={service}
            ttl1="App Development"
            ttl2="Packages"
            desc="Choose the perfect package for your mobile app vision" />
        </>
    )
}

export default website;
