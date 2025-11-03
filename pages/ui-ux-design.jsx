import React from 'react';
import ChildBanner from '@/child/ChildBanner';
import ChildMain from '@/child/ChildMain';
import ChildPackage from '@/child/ChildPackage';

import {
    Lightbulb,
    Eye,
    Users,
    Palette
} from "lucide-react";

const stats = [
  {
    icon: <Eye size={25} />,
    heading: "User Research",
    para: "Deep understanding of your users and their needs",
  },
  {
    icon: <Lightbulb size={25} />,
    heading: "Creative Solutions",
    para: "Innovative designs that solve real problems",
  },
  {
    icon: <Users size={25} />,
    heading: "Visual Excellence",
    para: "Beautiful interfaces that captivate and engage",
  },
  {
    icon: <Palette size={25} />,
    heading: "Design Systems",
    para: "Consistent, scalable design frameworks",
  }
];

const service = [
  {
    heading: "UI Design",
    price: "$1,999",
    list: ["5-10 screen designs", "Responsive layouts", "Style guide creation", "Asset preparation", "2 revision rounds"],
    btn: "/website",
  },
  {
    heading: "Full UX/UI Package",
    price: "$4,999",
    list: ["User research & personas", "Wireframes & prototypes", "Complete UI design", "Usability testing", "Design system creation"],
    btn: "/application",
  },
  {
    heading: "Enterprise Design",
    price: "Custom",
    list: ["Comprehensive user research", "Advanced prototyping", "A/B testing setup", "Design team training", "Ongoing design support"],
    btn: "/graphic-desing",
  },
];

const website = () => {
    return(
        <>
        <ChildBanner
            heading1="UI/UX"
            heading2="Design"
            para="Beautiful, intuitive designs that enhance user engagement and drive conversions through thoughtful user experiences."
        />
        <ChildMain
            stats={stats}
            ttl1="Design That"
            ttl2="Converts"
            desc="Our design process focuses on creating experiences that users love and businesses benefit from."
        />
        
        <ChildPackage
            service={service}
            ttl1="Design"
            ttl2="Packages"
            desc="Professional design services tailored to your needs" />
        </>
    )
}

export default website;
