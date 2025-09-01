import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div
      className=" w-full h-screen bg-cover bg-center bg-blue-800 t-0 sticky z-auto"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?cs=srgb&dl=pexels-janetrangdoan-1092730.jpg&fm=jpg')",
      }}
    >
     
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      <div className="relative z-10 flex flex-col justify-center items-center h-full px-4">
        <h1 className="text-center text-white text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight my_font drop-shadow-lg">
          <i>Fastest Food <br /> Delivery in city</i>
        </h1>

        <p className="mt-6 max-w-3xl text-center text-white text-sm sm:text-base md:text-lg px-4 py-4 my_font drop-shadow-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          molestiae delectus culpa hic assumenda, voluptate reprehenderit dolore
          autem cum ullam sed odit perspiciatis.
        </p>

        <div className="mt-8 flex  flex-col sm:flex-row gap-6">
  
  <button className="bg-red-700 text-white hover:bg-white hover:text-black border user-valid:border-green-500 transition w-[160px] rounded-full h-[55px] font-medium  border-black shadow">
    <Link to="/menu">
    Explore Menue
    </Link>
  </button>
  <button className="bg-red-700 text-white  hover:bg-white hover:text-black transition w-[160px] rounded-full h-[55px] font-medium border border-black shadow">
    <Link to="/cntactus">
    Book A Table
    </Link>
  </button>
</div>

      </div>
    </div>
  );
};

export default Home;
