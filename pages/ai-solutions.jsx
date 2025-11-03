import React from 'react';
import ChildBanner from '@/child/ChildBanner';
import ChildMain from '@/child/ChildMain';
import ChildPackage from '@/child/ChildPackage';

import {
    Brain,
    Bot,
    Cpu,
    Zap
} from "lucide-react";

const stats = [
  {
    icon: <Brain size={25} />,
    heading: "Social Media Post Designing",
    para: "Up to 10 custom-designed posts for Facebook, Instagram, etc.",
  },
  {
    icon: <Bot size={25} />,
    heading: "Meta Ads Setup",
    para: "Facebook + Instagram ad campaign setup & basic management",
  },
  {
    icon: <Cpu size={25} />,
    heading: "Google Ads Setup",
    para: "Setup of 1 Google Ads campaign (Search or Display)",
  },
  {
    icon: <Zap size={25} />,
    heading: "Analytics & Reporting",
    para: "Performance tracking and detailed campaign analytics",
  }
];


const service = [
  {
    heading: "AI Starter",
    price: "$4,999",
    list: ["Basic AI model development", "Data preprocessing", "Simple automation", "Performance monitoring", "3 months support"],
    btn: "/website",
  },
  {
    heading: "AI Business Suite",
    price: "$15,999",
    list: ["Advanced ML algorithms", "Custom AI integrations", "Process automation", "Real-time analytics", "API development"],
    btn: "/application",
  },
  {
    heading: "Enterprise AI",
    price: "Custom",
    list: ["Complex AI ecosystems", "Multi-model deployment", "Advanced security", "Scalable infrastructure", "Ongoing optimization"],
    btn: "/graphic-desing",
  },
];


const website = () => {
    return(
        <>
        <ChildBanner
            heading1="AI"
            heading2="Solutions"
            para="Cutting-edge AI and machine learning solutions to automate processes and enhance decision-making for your business."
        />
        <ChildMain
            stats={stats}
            ttl1="What's"
            ttl2="Included"
            desc="Comprehensive digital marketing services to boost your online presence"
        />
        
        <ChildPackage
            service={service}
            ttl1="AI"
            ttl2="Packages"
            desc="Intelligent solutions designed to scale with your business" />
        </>
    )
}

export default website;
