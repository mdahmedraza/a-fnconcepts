import React from 'react';
import ChildBanner from '@/child/ChildBanner';
import ChildMain from '@/child/ChildMain';
import ChildPackage from '@/child/ChildPackage';

import {
  Smartphone,
  Apple,
  Zap,
  MonitorSmartphone
} from "lucide-react";

const stats = [
  {
    icon: <Smartphone size={25} />,
    heading: "Cross-Platform",
    para: "React Native & Flutter for iOS and Android",
  },
  {
    icon: <Apple size={25} />,
    heading: "Native Performance",
    para: "Native iOS and Android development for maximum performance",
  },
  {
    icon: <MonitorSmartphone size={25} />,
    heading: "App Store Ready",
    para: "Complete deployment and app store optimization",
  },
  {
    icon: <Zap size={25} />,
    heading: "Fast Development",
    para: "Rapid prototyping and agile development process",
  }
];


const service = [
  {
    heading: "MVP App",
    price: "$4,999",
    list: ["Cross-platform app (iOS & Android)", "5-10 core features", "Basic UI/UX design", "App store deployment", "3 months support"],
    btn: "/website",
  },
  {
    heading: "Business App",
    price: "$12,999",
    list: ["Advanced features & integrations", "Custom UI/UX design", "Backend API development", "Push notifications", "Analytics integration", "6 months support"],
    btn: "/application",
  },
  {
    heading: "Enterprise App",
    price: "Custom",
    list: ["Complex functionality", "Multiple platform support", "Advanced security features", "Scalable architecture", "Ongoing maintenance", "Priority support"],
    btn: "/graphic-desing",
  },
];




const website = () => {
    return(
        <>
        <ChildBanner
            heading1="Mobile App"
            heading2="Development"
            para="Native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android."
        />
         <ChildMain
            stats={stats}
            ttl1="Mobile App"
            ttl2="Excellence"
            desc="From concept to app store, we create mobile experiences that users love."
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
