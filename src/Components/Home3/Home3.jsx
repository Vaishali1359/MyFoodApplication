import React from 'react';
import { MdPhone, MdEmail, MdLocationOn } from 'react-icons/md';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

const Home3 = () => {
  const [imgRef, imgInView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [textRef, textInView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div className="w-full h-full py-12 px-4 bg-white ">
      <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

        
        <div
          ref={imgRef}
          className={`relative w-full flex justify-center items-center transition-all duration-700 ease-out
            ${imgInView ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}
        >
          <img
            className="w-full max-w-[500px] h-[300px] sm:h-[400px] md:h-[450px] rounded-2xl object-cover cursor-pointer hover:scale-105 duration-300"
            src="https://i.pinimg.com/736x/85/52/ae/8552ae7494d78be4e8229476cd0f59e2.jpg"
            alt="Food"
          />

          <div className="absolute bottom-[-2rem] right-4 sm:right-6 translate-y-4 z-10 bg-[hsl(60,3%,31%)] shadow-lg rounded-md p-4 sm:p-6 w-[90%] sm:w-[320px] transition-transform duration-300 hover:scale-105">
            <h3 className="text-lg font-sans tracking-wider text-white mb-1 font-bold">
              Come and Visit us
            </h3>
            <div className="space-y-2 py-3 text-sm text-white">
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
          className={`flex flex-col justify-center px-2 transition-all duration-700 ease-out delay-150
            ${textInView ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}
        >
          <p className="font-extrabold text-black tracking-wider text-2xl sm:text-3xl md:text-[35px] leading-snug my_font hover:scale-105 duration-300">
            We provide healthy <br /> food for your family.
          </p>

          <p className="text-black text-sm sm:text-base py-2 font-semibold cursor-pointer hover:scale-105 duration-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            molestiae delectus culpa hic assumenda, voluptate reprehenderit
            dolore autem cum ullam sed odit perspiciatis.
          </p>

          <p className="text-black text-sm sm:text-base pb-3 py-2 cursor-pointer hover:scale-105 duration-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            molestiae delectus culpa hic assumenda, voluptate reprehenderit
            dolore autem cum ullam sed odit perspiciatis.
          </p>

          <button className="bg-white text-black py-2 hover:bg-[hsl(60,3%,31%)] transition w-[180px] rounded-full h-[60px] font-medium border-2 border-black shadow mt-6">
            <Link to='/about'>
            More About Us
            </Link>
          </button>
        </div>

      </div>
    </div>
  );
};

export default Home3;
