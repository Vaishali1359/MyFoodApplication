import React from 'react';
import data from "../data.json";
import { Link } from 'react-router-dom';

const Menue = () => {
  return (
    <section className="w-full py-20 px-4  bg-white">
      <div className="max-w-[1240px] mx-auto">

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-black my_font mb-4">
          Our Browser Menu
        </h1>

        
        {/* <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12 my_font text-base sm:text-lg leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ex magnam, rerum, odio alias rem veritatis,
          <br className="hidden sm:block" />
          quibusdam quod deserunt ipsa impedit officiis iste adipisci!
        </p> */}

        
        <div className="grid grid-cols-1 py-9 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4 shadow-indigo-100">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-white border-2 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 flex flex-col items-center p-6 h-full"
            >
              <img
                className="w-32 h-32 object-cover rounded-full bg-white p-1 mb-4"
                src={item.image}
                alt={item.head}
                
              />
             
              <h2 className="text-lg font-semibold text-black text-center mb-2">{item.head}</h2>
              <p className="text-sm text-gray-700 text-center font-serif mb-4">{item.para}</p>
              <p className="text-sm text-red-700 text-center font-serif mb-4 cursor-pointer"> <Link to="/menu"> {item.menu} </Link> </p>
              

             
              <div className="flex-grow"></div>

            
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Menue;
