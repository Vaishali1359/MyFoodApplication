import React from 'react'
import D from "../assets/food6.jpg"
import { useInView } from 'react-intersection-observer';
const Card1 = () => {
    const [leftRef, leftInView] = useInView({ triggerOnce: true, threshold: 0.2 });
       const [rightRef, rightInView] = useInView({ triggerOnce: true, threshold: 0.2 });
    
  return (
     <div className='w-full h-auto py-[10rem] px-4 bg-white'>
        <h1 className='font-extrabold justify-center align-text-top text-black text-center text-[50px]'>Browser our Menue</h1>
        <br />
        <div ref={leftRef}
          className={`transform transition-all duration-700 ease-out
            ${leftInView ? 'translate-x-0 opacity-100' : '-translate-x-16 opacity-0'}`}
        
        >
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-4 gap-8 m-14'>
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-full mx-auto rounded-2xl mt-[-3rem] bg-white' src={D} alt="/" />
                    <h1 className='text-2xl font-bold text-center py-8'>Breck-fast</h1>
                    <p className=' text-center font-mediumpy-2 border-b mx-8 mt-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    <button className='bg-[#ebe9e8] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Explore menue

                    </button>
                </div>
                <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-full mx-auto rounded-2xl mt-[-3rem] bg-white' src={D} alt="/" />
                    <h1 className='text-2xl font-bold text-center py-8'>Main-Dishes</h1>
                    <p className=' text-center font-mediumpy-2 border-b mx-8 mt-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Explore menue

                    </button>
                </div>
                </div>
                <div ref={midRef}
          className={`flex flex-col gap-8 pt-4 h-full transform transition-all duration-700 ease-out
            ${midInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
        
                >
                <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-full mx-auto rounded-2xl mt-[-3rem] bg-white' src={D} alt="/" />
                    <h1 className='text-2xl font-bold text-center py-8'>Main-Dishes</h1>
                        <p className=' text-center font-mediumpy-2 border-b mx-8 mt-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Explore menue

                    </button>
                </div>
                
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-full mx-auto rounded-2xl mt-[-3rem] bg-white' src={D} alt="/" />
                    <h1 className='text-2xl font-bold text-center py-8'>Drinks</h1>
                  <p className=' text-center font-mediumpy-2 border-b mx-8 mt-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Explore menue

                    </button>
                </div>
            </div>
            </div>
        </div>
  )
}

export default Card1