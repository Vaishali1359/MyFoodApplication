import React from 'react';
import { useInView } from 'react-intersection-observer';
import { AiOutlineClockCircle, AiOutlineTag, AiOutlineShoppingCart } from 'react-icons/ai';

const Home5 = () => {
  const [leftRef, leftInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [midRef, midInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [rightRef, rightInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div className="w-full h-auto py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">

        <div
          ref={leftRef}
          className={`transform transition-all duration-700 ease-out
            ${leftInView ? 'translate-x-0 opacity-100' : '-translate-x-16 opacity-0'}`}
        >
          <img
            className="w-full max-h-[43rem] md:h-[50rem] object-cover rounded-lg cursor-pointer hover:scale-105 duration-300"
            src="https://i.pinimg.com/736x/cc/24/3b/cc243bfe723518418438fa9f25068715.jpg"
            alt=""
          />
        </div>

       
        <div
          ref={midRef}
          className={`flex flex-col gap-6 pt-6 h-full transform transition-all duration-700 ease-out
            ${midInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
        >
          <div className="w-full overflow-hidden rounded-xl aspect-[4/3]">
            <img
              className="w-full h-full object-cover cursor-pointer hover:scale-105 duration-300"
              src="https://i.pinimg.com/736x/61/5b/1b/615b1bb50d0824f8020077c14a40ddab.jpg"
              alt=""
            />
          </div>
          <div className="w-full h-[23rem]  overflow-hidden rounded-xl aspect-[4/3]">
            <img
              className="w-full h-[23rem] object-cover object-center cursor-pointer hover:scale-105 duration-300"
              src="https://i.pinimg.com/736x/74/95/a1/7495a1993373b08d693fd3f7ade76517.jpg"
              alt=" "
            />
          </div>
        </div>

        <div
          ref={rightRef}
          className={`flex flex-col justify-center space-y-4 transform transition-all duration-700 ease-out delay-100
            ${rightInView ? 'translate-x-0 -translate-y-3 opacity-100' : 'translate-x-10 opacity-0'}`}
        >
          <p className="font-extrabold text-black text-2xl sm:text-3xl md:text-[35px] my_font rounded-xl hover:scale-105 duration-300">
            Fastest Food<br />Delivery in City
          </p>

          <p className="my_font text-black text-sm sm:text-base rounded-xl hover:scale-105 leading-3 duration-300">
           Our visual designer lets you quickly and of drag a down your way to customapps for both keep desktop.

          </p>

          <ol className="list-none text-black space-y-4">
            <li className="flex items-center space-x-3 hover:scale-105 duration-300">
              <AiOutlineClockCircle size={24}  className='bg-red-600 rounded-full'/>
              <span className="text-sm sm:text-base">Delivery Within 30 minutes</span>
            </li>
            <li className="flex items-center space-x-3 hover:scale-105 duration-300">
              <AiOutlineTag size={24} className='bg-red-600 rounded-full' />
              <span className="text-sm sm:text-base">Best Offers & Prices</span>
            </li>
            <li className="flex items-center space-x-3 hover:scale-105 duration-300">
              <AiOutlineShoppingCart size={24} className='bg-red-600 rounded-full' />
              <span className="text-sm sm:text-base">Online Services</span>
            </li>
          </ol>
        </div>

      </div>
    </div>
  );
};

export default Home5;
