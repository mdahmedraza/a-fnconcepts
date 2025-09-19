
const About=()=>{
    return(
        <div id='about' className='w-full p-2 flex items-center py-16'>
            <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
                <div className='col-span-2'>
                    <h1 className='py-4 text-gray-700'>About <span className='text-[#5651e5]'>FNConcepts</span></h1>
                    <p className='py-2 text-gray-600 text-[25px]'>Founded in 2025, ITGenixs Pvt. Ltd. is dedicated to providing affordable, advanced technology solutions that empower businesses to thrive in the digital age.</p>
                </div>
                <div className='w-full h-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                    <img className='rounded-xl' src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt='about me' />
                </div>
            </div>
        </div>
    )
}
export default About;