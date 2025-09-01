import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const Home6 = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 md:grid-cols-2 px-4 sm:px-8 md:px-16 lg:px-32 py-10 items-center gap-8"
    >
     
      <div>
        <div className="mb-8">
          <h1 className="font-extrabold text-black hover:scale-105 tracking-wider duration-300 text-xl sm:text-2xl md:text-[35px] my_font leading-snug">
            A little information for our valuable guest
          </h1>
          <p className="text-black text-sm sm:text-base py-2 cursor-pointer hover:scale-105 duration-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit...
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="shadow-md bg-gray-100 rounded-lg p-6 hover:scale-105 transition-transform duration-300 text-center">
            <h2 className="text-3xl font-bold my_font text-black"><i>
              {inView && <CountUp start={0} end={3} duration={1.5} />}</i>
            </h2>
            <p className="mt-2 text-lg my_font font-semibold text-gray-700">Tasty Bites</p>
          </div>

          <div className="shadow-md bg-gray-100 rounded-lg p-6 hover:scale-105 transition-transform duration-300 text-center">
            <h2 className="text-3xl font-bold text-black my_font"><i>
              {inView && <CountUp start={0} end={1995} duration={1.5} />} </i>
            </h2>
            <p className="mt-2 text-lg my_font font-semibold text-gray-700">Fresh Salad</p>
          </div>

          <div className="shadow-md bg-gray-100 rounded-lg p-6 hover:scale-105 transition-transform duration-300 text-center">
            <h2 className="text-3xl font-bold text-black my_font"><i>
              {inView && <CountUp start={0} end={65} duration={1.5} />}+ </i>
            </h2>
            <p className="mt-2 text-lg font-semibold my_font text-gray-700">Hot Soup</p>
          </div>

          <div className="shadow-md bg-gray-100 rounded-lg v p-6 hover:scale-105 transition-transform duration-300 text-center">
            <h2 className="text-3xl font-bold my_font text-black"><i>
              {inView && <CountUp start={0} end={100} duration={1.5} />}% </i>
            </h2>
            <p className="mt-2 text-lg my_font font-semibold text-gray-700">Cool Drink</p>
          </div>
        </div>
      </div>

      
      <div className="flex justify-center items-center">
        <img
          src="https://i.pinimg.com/736x/a9/f5/38/a9f538db7014656970b85165e8c469f7.jpg"
          alt="Dish"
          className="w-full max-w-[25rem] h-auto rounded-2xl shadow-lg"
        />
      </div>
    </div>
  );
};

export default Home6;
