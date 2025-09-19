import Image from "next/image";

const stats = [
    { count: "7+", label: "Years of experience" },
    { count: "100+", label: "Projects" },
    { count: "3+", label: "Global Awards" },
    { count: "3+", label: "Global Awards" },
  ];

const Achievment=({head})=>{
    return(
        <div className='w-full p-2' style={{margin: '2rem 0px'}}>
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
                <h2 className='py-4'>{head}</h2>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                   
                    
                    


    {stats.map(({ count, label }, idx) => (
        <div
          key={idx}
           className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'
        >
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
          {/* Circle with number */}
          <div className="w-20 h-20 flex items-center justify-center rounded-full bg-blue-100 shadow-md">
            <span className="text-blue-600 text-xl font-bold">{count}</span>
          </div>
          {/* Label */}
          <div className='flex flex-col items-center justify-center'>
                                <h3>{label}</h3>
                            </div>
          </div>
        </div>
      ))}
                   
                    


                </div>
            </div>
        </div>
    )
}
export default Achievment;