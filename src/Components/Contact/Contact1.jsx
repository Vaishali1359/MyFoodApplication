import React from 'react';

const Contact1 = () => {
  return (
     <div>
      
      <div className="relative z-10 text-center mb-10">
        <h1 className="font-extrabold text-black hover:scale-105 tracking-widest duration-300 text-2xl md:text-[35px] my_font leading-snug">
           Contact Us
        </h1>
        <p className="text-black text-sm md:text-base py-2 font-semibold cursor-pointer hover:scale-105 duration-300">
          We consider all the drivers of change gives you the components you need to change to create a truly happens.
        </p>
      </div>
   <div className="max-w-xl mx-auto mt-16 h-auto bg-white p-6 rounded-xl shadow-amber-50 border border-spacing-3">
    
      <form className="space-y-6 text-sm">
     
        <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
       
          <div className="flex-1">
            <label htmlFor="name" className="block font-semibold text-black mb-1">name</label>
            <input
              type="text"
              id="name"
              placeholder="write your name "
              className="w-full px-4 py-2  border rounded-full border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
         
          <div className="flex-1">
            <label htmlFor="email" className="block font-semibold text-black mb-1">email</label>
            <input
              type="email"
              id="email"
              placeholder="write your e mail"
              className="w-full px-4 py-2  border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

       
        <div>
          <label htmlFor="subject" className="block font-semibold text-black-700 mb-1">subject</label>
          <input
            type="text"
            id="subject"
            placeholder="Short and sweet..."
            className="w-full px-4 py-2  border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

       
        <div>
          <label htmlFor="message" className="block font-semibold text-black mb-1">message</label>
          <textarea
            id="message"
            rows="4"
            placeholder="Write your message here..."
            className="w-full px-4 py-2  border border-gray-300 resize-none rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

  
        <div>
          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full shadow-md transition duration-300"
          >
            send
          </button>
        </div>
      </form>
    </div>
      <div className="max-w-5xl mx-auto mt-16 px-6 py-10 bg-white rounded-xl shadow-md grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
      
      <div>
        <h3 className="font-bold text-black text-xl mb-2">Call Us:</h3>
        <p className="text-orange-500 text-lg font-semibold">+1-234-567-8900</p>
      </div>

      <div>
        <h3 className="font-bold black text-xl mb-2">Hours:</h3>
        <p className="text-black">
          <span className="block">Mon-Fri: 11am - 8pm</span>
          <span className="block">Sat, Sun: 9am - 10pm</span>
        </p>
      </div>

      
      <div>
        <h3 className="font-bold text-black text-xl mb-2">Our Location:</h3>
        <p className="text-black">
          <span className="block">123 Bridge Street</span>
          <span className="block">Nowhere Land, LA</span>
          <span className="block">12345 United States</span>
        </p>
      </div>
    </div>

    </div>
  );
};

export default Contact1;