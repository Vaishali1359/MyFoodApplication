import React from 'react';
import pf2 from "../assets/pf6.jpeg";
import pf3 from "../assets/pf8.jpeg";
import pf4 from "../assets/pf5.jpeg";

const Customer = () => {
  return (
    <div className='w-full h-full py-[10rem] overflow-x-hidden bg-white'>
      <h1 className=' text-black text-center text-[50px]
      font-extrabold sm:text-4xl my_font mb-4 max-w-[1240px] mx-auto leading-tight capitalize'>
        What Our Customers Say
      </h1>

      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 py-[2rem] gap-8 px-4'>
      
        <div className='w-full shadow-xl border-2 flex flex-col p-4 rounded-lg bg-[#f4f4f2] hover:scale-105 duration-300'>
          <div className='text-left font-medium'>
            <h2 className='text-2xl font-bold text-red-500 py-6'>
              “The best restaurant”
            </h2>
            <p className='text-justify justify-self-start mx-4'>
              Last night, we dined at place and were simply blown away. From the
              moment we stepped in, we were enveloped in an inviting atmosphere
              and greeted with warm smiles.
            </p>
          </div>
          <div className='flex px-4 gap-4 items-center border-t-2 mt-4 pt-4'>
            <img
              className='h-20 w-20 rounded-full object-cover'
              src={pf2}
              alt="customer"
            />
            <p className='text-sm'>
              <span className="text-black  font-sans text-[17px] font-bold block mb-1">
                Sophire Robson
              </span>
              Lorem, ipsum dolor.
            </p>
          </div>
        </div>

        
        <div className='w-full shadow-xl border-2 flex flex-col p-4 rounded-lg bg-[#f4f4f2] hover:scale-105 duration-300'>
          <div className='text-left font-medium'>
            <h2 className='text-2xl font-bold  mx-4 text-red-500 py-6'>
              “Simply delicious”
            </h2>
            <p className='text-justify justify-self-start mx-4'>
              Place exceeded my expectations on all fronts. The ambiance was cozy
              and relaxed, making it a perfect venue for our anniversary dinner.
              Each dish was prepared and beautifully presented.
            </p>
          </div>
          <div className='flex px-4 gap-4 items-center border-t-2 mt-4 pt-4'>
            <img
              className='h-20 w-20 rounded-full object-cover'
              src={pf3}
              alt="customer"
            />
            <p className='text-sm'>
              <span className="text-black font-sans text-[17px] font-bold block mb-1">
                Sudha Ray
              </span>
              Lorem, ipsum dolor.
            </p>
          </div>
        </div>

        
        <div className='w-full shadow-xl border-2 flex flex-col p-4 rounded-lg bg-[#f4f4f2] hover:scale-105 duration-300'>
          <div className='text-left font-medium'>
            <h2 className='text-2xl font-bold mx-4 text-red-500 py-6'>
              “One of a kind restaurant”
            </h2>
            <p className='text-justify justify-self-start mx-4'>
              The culinary experience at place is first to none. The atmosphere
              is vibrant, the food – nothing short of extraordinary. The food was
              the highlight of our evening. Highly recommended.
            </p>
          </div>
          <div className='flex px-4 gap-4 items-center border-t-2 mt-4 pt-4'>
            <img
              className='h-20 w-20 rounded-full object-cover'
              src={pf4}
              alt="customer"
            />
            <p className='text-sm'>
              <span className="text-black font-sans text-[17px] font-bold block mb-1">
                Amina Rao
              </span>
              Lorem, ipsum dolor.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;
