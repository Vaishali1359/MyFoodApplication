import React, { useState } from 'react';
import data5 from "../data5.json";

const Card5 = () => {
  
const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const openModal = (item) => {
    setCurrentImage(item.image);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setCurrentImage(null);
  };

  return (
    <div className="w-full h-auto  px-4 bg-white">
      <h1 className="font-extrabold text-black text-center max-w-[1340px] text-3xl tracking-wider sm:text-4xl my_font mb-4  mx-auto leading-4">
        Read More Article 
      </h1>

      <p className="my_font text-center max-w-[1240px] mx-auto mb-12 text-gray-600">
        We consider all the drivers of change gives you the components you need to change to create a truly happens.
      </p>

      <div className="max-w-[1340px] mx-auto grid sm:grid-cols-2 py-[2rem] md:grid-cols-4 gap-2">
        {data5.map((item) => (
          <div
            key={item.id}
            className="block  rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
         
            <div className="h-[70%] w-full cursor-pointer" onClick={() => openModal(item)}>
              <img
                
                src={item.image}
                className="w-full h-full object-cover "
             
              />
            </div>

            <div className="h-[30%] p-3 flex flex-col justify-center">
                <p className="text-xs font-serif text-left text-gray-700"> {(item.para)}.</p>
              <h2 className="text-md font-bold text-left mb-1">  {item.head}</h2>
              
            </div>
          </div>
        ))}
      </div>

      {isOpen && currentImage && (
        <div
          id="imageModal"
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="relative max-w-3xl max-h-full w-full rounded-lg "
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-white bg-black bg-opacity-50 rounded-full px-3 py-1 text-lg"
              onClick={closeModal}
            >
              &times;
            </button>
            <img
              className="w-full h-auto max-h-[70vh] object-contain"
              src={currentImage}
              
            />
             
          </div>
        </div>
      )}

      
    </div>
  );
};

export default Card5;
