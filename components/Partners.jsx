import Image from "next/image";
import p1 from '../assets/p1.jpg';
import p2 from '../assets/p2.jpg';
import p3 from '../assets/p3.jpg';
import p4 from '../assets/p4.jpg';
const Partners=({head})=>{
    return(
        <div id='skills' className='w-full p-2 h-auto' style={{margin: '2rem 0px'}}>
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
                
                <h1 className='py-4 text-gray-700'>Our <span className='text-[#5651e5]'>Partners</span></h1>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                    
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid justify-center items-center'>
                            <div className='m-auto'>
                                <Image className='rounded-xl' src={p1} alt='about me' />
                            </div>
                            
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid justify-center items-center'>
                            <div className='m-auto'>
                                <Image className='rounded-xl' src={p2} alt='about me' />
                            </div>
                            
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid justify-center items-center'>
                            <div className='m-auto'>
                                <Image className='rounded-xl' src={p3} alt='about me' />
                            </div>
                            
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid justify-center items-center'>
                            <div className='m-auto'>
                                <Image className='rounded-xl' src={p4} alt='about me' />
                            </div>
                            
                        </div>
                    </div>
                

                </div>
            </div>
        </div>
    )
}
export default Partners;