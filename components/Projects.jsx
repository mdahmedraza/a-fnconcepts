import ProjectItem from "./ProjectItem";
import Image from 'next/image';
import Link from 'next/link';
import fb from '../assets/whatsapp.png';

const Projects=()=>{
    return(
        <div id='projects' className='w-full'>
            <div className='max-w-[1248px] mx-auto px-2 py-16'>
                <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
                <h2 className='py-4'>What I've Built</h2>
                <div className='grid md:grid-cols-2 gap-8'>
                    <ProjectItem
                    title='facebook clone'
                    backgroundImg={fb}
                    projectUrl='https://www.studyoshub.com'
                    />
                    <ProjectItem
                    title='whatsapp clone'
                    backgroundImg={fb}
                    projectUrl='https://www.studyoshub.com'
                    />
                    <ProjectItem
                    title='insta clone'
                    backgroundImg={fb}
                    projectUrl='https://www.studyoshub.com'
                    />
                    <ProjectItem
                    title='twitter clone'
                    backgroundImg={fb}
                    projectUrl='https://www.studyoshub.com'
                    />
                </div>
            </div>
        </div>
    )
}
export default Projects;