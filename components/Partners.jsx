import Image from "next/image";
const Partners=({head})=>{
    return(
        <div id='skills' className='w-full p-2 h-auto' style={{margin: '2rem 0px'}}>
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
                
                <h1 className='py-4 text-gray-700'>Our <span className='text-[#5651e5]'>Partners</span></h1>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                    
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid justify-center items-center'>
                            <div className='m-auto'>
                                <img className='rounded-xl' src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt='about me' />
                            </div>
                            
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid justify-center items-center'>
                            <div className='m-auto'>
                                <img className='rounded-xl' src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt='about me' />
                            </div>
                            
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid justify-center items-center'>
                            <div className='m-auto'>
                                <img className='rounded-xl' src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt='about me' />
                            </div>
                            
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid justify-center items-center'>
                            <div className='m-auto'>
                                <img className='rounded-xl' src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt='about me' />
                            </div>
                            
                        </div>
                    </div>
                

                </div>
            </div>
        </div>
    )
}
export default Partners;