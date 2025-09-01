import React, { useState } from 'react';
import data3 from "../data3.json";
import { useInView } from 'react-intersection-observer';

const Home6 = () => {
  const [leftRef, leftInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [rightRef, rightInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const openModal = (img) => {
    setCurrentImage(img);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setCurrentImage(null);
  };

  const leftImageUrl = "https://i.pinimg.com/1200x/01/1c/4a/011c4a8f382a8958270503714736fa2d.jpg";

  return (
    <div className="grid md:grid-cols-2 gap-6 px-4 md:px-20 py-16 shadow-sm">
      
      
      <div
        ref={leftRef}
        className={`transform transition-all duration-700 ease-out
          ${leftInView ? 'translate-x-0 opacity-100' : '-translate-x-16 opacity-0'}`}
      >
        <div className="flex flex-col h-screen w-full justify-start items-start bg-slate-50 rounded-xl overflow-hidden">
          <img
            src={leftImageUrl}
            onClick={() => openModal(leftImageUrl)}
            className="w-full h-[34rem] object-cover cursor-pointer"
            alt="Main Dish"
          />
          <div className="p-6">
            <p className="text-gray-500 text-sm mb-2">Jan 21, 2025</p>
            <h2 className="text-xl font-semibold mb-2">
              The secret tips & tricks to prepare a perfect burger & pizza for our customers
            </h2>
            <p className="text-gray-700 text-sm">
              Learn how the right blend of sauces and toppings creates the perfect bite. Our chefs reveal their process.
            </p>
          </div>
        </div>
      </div>

      
      <div
        ref={rightRef}
        className={`flex flex-col justify-center space-y-4 transform transition-all duration-700 ease-out delay-100
          ${rightInView ? 'translate-x-0 -translate-y-3 opacity-100' : 'translate-x-10 opacity-0'}`}
      >
        <div className="grid grid-cols-1 h-screen mt-3 sm:grid-cols-2 gap-4">
          {data3.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md hover:scale-105 transition-transform duration-300 overflow-hidden cursor-pointer"
              onClick={() => openModal(item.image)}
            >
              <img
                src={item.image}
                alt="Thumbnail"
                className="w-full h-[16rem] object-cover"
              />
              <div className="p-4">
                <p className="text-gray-600 text-sm mb-2">{item.para}</p>
                <h3 className="text-lg font-medium">{item.heading}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      
      {isOpen && currentImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="relative max-w-3xl max-h-full w-full rounded-lg"
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
              alt="Enlarged view"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home6;
