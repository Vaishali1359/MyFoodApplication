import React from 'react'
import double1 from "../assets/double.jpeg"

const Card = () => {
  return (
     <div className='w-full py-[10rem] px-4 bg-white m-0'>
        <h1 className='font-extrabold justify-center align-text-top  text-black text-center text-[50px]'>Browser our Menue</h1>
        <br />
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-4 gap-8 m-14'>
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-20 mx-auto mt-[-3rem] bg-white' src={double1} alt="/" />
                    <h1 className='text-2xl font-bold text-center py-8'>Breck-fast</h1>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem molestias aperiam veniam ullam natus recusandae voluptatibus incidunt eius. Quaerat, distinctio. </p>
                        
                    </div>
                    <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Explore menue

                    </button>
                </div>
                <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={double1} alt="/" />
                    <h1 className='text-2xl font-bold text-center py-8'>Main-Dishes</h1>
                    
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem molestias aperiam veniam ullam natus recusandae voluptatibus incidunt eius. Quaerat, distinctio. </p>
                        
                    </div>
                    <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Explore menue

                    </button>
                </div>
                <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={double1} alt="/" />
                    <h1 className='text-2xl font-bold text-center py-8'>Main-Dishes</h1>
                    
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem molestias aperiam veniam ullam natus recusandae voluptatibus incidunt eius. Quaerat, distinctio. </p>
                    </div>
                    <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Explore menue

                    </button>
                </div>
                
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-20 mx-auto mt-[-3rem] bg-white' src={double1} alt="/" />
                    <h1 className='text-2xl font-bold text-center py-8'>Drinks</h1>
                  
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem molestias aperiam veniam ullam natus recusandae voluptatibus incidunt eius. Quaerat, distinctio. </p>
                    </div>
                    <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Explore menue

                    </button>
                </div>
            </div>
        </div>
  )
}

export default Card