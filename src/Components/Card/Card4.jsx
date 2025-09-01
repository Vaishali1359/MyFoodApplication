import React, { useState } from 'react';
import data2 from "../data2.json";

const Card4 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setCurrentIndex(null);
  };

  const showNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data2.length);
  };

  const showPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data2.length) % data2.length);
  };

  return (
    <div className="w-full h-auto py-[6rem] px-4 bg-white">
      <h1 className="font-extrabold text-black text-left max-w-[1340px] text-2xl sm:text-3xl md:text-4xl tracking-wider my_font mb-8 mx-auto leading-snug">
        We also offer unique <br /> services for your events
      </h1>

      <div className="max-w-[1340px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {data2.map((item, index) => (
          <div
            key={item.id}
            className="w-full h-[400px] bg-slate-100 shadow-xl rounded-lg overflow-hidden flex flex-col mx-auto"
          >
            <div className="h-[70%] w-full cursor-pointer" onClick={() => openModal(index)}>
              <img
                className="w-full h-full object-cover"
                src={item.image}
                alt=""
              />
            </div>
            <div className="h-[30%] p-3 flex flex-col justify-center">
              <h2 className="text-md font-bold text-left mb-1">{item.head}</h2>
              <p className="text-xs font-serif text-left text-gray-700">{item.para}</p>
            </div>
          </div>
        ))}
      </div>

      {isOpen && currentIndex !== null && (
        <div
          id="imageModal"
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
              src={data2[currentIndex].image}
              alt=""
            />

            <button
              onClick={showPrev}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-60 hover:bg-opacity-100 rounded-full p-2 text-xl"
            >
              ‹
            </button>
            <button
              onClick={showNext}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-60 hover:bg-opacity-100 rounded-full p-2 text-xl"
            >
              ›
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card4;
