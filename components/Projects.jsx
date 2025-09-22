// import ProjectItem from "./ProjectItem";
// import Image from 'next/image';
// import Link from 'next/link';
// import b1 from '../assets/banner1.png';
// import b2 from '../assets/banner2.png';

// const Projects=()=>{
//     return(
//         <div id='projects' className='w-full'>
//             <div className='max-w-[1248px] mx-auto px-2 py-16'>
//                 <h1 className='py-4 text-gray-700'>Our <span className='text-[#5651e5]'>Projects</span></h1>
//                 <div className='grid md:grid-cols-2 gap-8'>
//                     <ProjectItem
//                     title='studyoshub'
//                     backgroundImg={b1}
//                     projectUrl='https://www.studyoshub.com'
//                     skill="MERN STACK"
//                     />
//                     <ProjectItem
//                     title='future navi concetps'
//                     backgroundImg={b2}
//                     projectUrl='https://leverageedit.my.canva.site/fnconcepts'
//                     skill="CANVA"
//                     />
//                 </div>
//             </div>
//         </div>
//     )
// }
// export default Projects;


import ProjectItem from "./ProjectItem";
import b1 from "../assets/banner1.png";
import b2 from "../assets/banner2.png";

const Projects = () => {
  return (
    <div id="projects" className="w-full bg-[#0f172a] py-16 -mb-[5px]">
      <div className="max-w-[1248px] mx-auto px-4">
        {/* Heading */}
        <h1 className="py-4 text-3xl sm:text-4xl font-bold text-white">
          Our <span className="text-[#A78BFA]">Projects</span>
        </h1>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Studyoshub"
            backgroundImg={b1}
            projectUrl="https://www.studyoshub.com"
            skill="MERN STACK"
          />
          <ProjectItem
            title="Future Navi Concepts"
            backgroundImg={b2}
            projectUrl="https://leverageedit.my.canva.site/fnconcepts"
            skill="CANVA"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
