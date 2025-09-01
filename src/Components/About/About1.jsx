import React from 'react';
import { MdPhone, MdEmail, MdLocationOn } from 'react-icons/md';
import { useInView } from 'react-intersection-observer';

const About1 = () => {
  const [imgRef, imgInView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [textRef, textInView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div className="w-full h-full py-12 px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8 items-center">

       
        <div
          ref={imgRef}
          className={`relative w-full flex justify-center items-center transition-transform duration-700 ease-out
                      ${imgInView ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}
        >
          <img
            className="w-full max-w-[500px] h-[300px] sm:h-[400px] md:h-[450px] rounded-2xl object-cover cursor-pointer hover:scale-105 duration-300"
            src="https://i.pinimg.com/736x/85/52/ae/8552ae7494d78be4e8229476cd0f59e2.jpg"
            alt="Food"
          />

         
          <div className="absolute bottom-[-2rem] right-4 sm:right-6 translate-y-4 z-10 bg-[hsl(60,3%,31%)] shadow-lg rounded-md p-4 sm:p-6 w-[90%] sm:w-[320px]">
            <h3 className="text-lg font-sans tracking-wider text-white mb-1 font-bold">
              Come and Visit us
            </h3>
            <div className="space-y-2 text-sm text-white mt-3">
              <p className="flex items-center">
                <MdPhone className="mr-2 hover:animate-pulse" />
                (414) 875-0107
              </p>
              <p className="flex items-center">
                <MdEmail className="mr-2 hover:animate-pulse" />
                happytommy@restaurant.com
              </p>
              <p className="flex items-center">
                <MdLocationOn className="mr-2 hover:animate-pulse" />
                Lorem ipsum dolor, sit amet co
              </p>
            </div>
          </div>
        </div>

        
        <div
          ref={textRef}
          className={`flex flex-col justify-center px-2 transition-transform duration-700 ease-out delay-200
                      ${textInView ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}
        >
          <p className="font-extrabold text-black tracking-wider text-2xl sm:text-3xl md:text-[35px] leading-snug hover:scale-105 duration-300">
            We provide healthy <br /> food for your family.
          </p>
          <p className="text-black text-sm sm:text-base py-2 font-semibold hover:scale-105 duration-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit...
          </p>
          <p className="text-black text-sm sm:text-base pb-3 py-2 hover:scale-105 duration-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit...
          </p>
        </div>

      </div>
    </div>
  );
};

export default About1;
