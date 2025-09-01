import React from 'react';
import { Link } from 'react-router-dom';

const Home6a = () => {
  return (
    <div className="flex justify-center mx-10">
      <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-[1340px] py-6">
        
        <h1 className="font-extrabold text-black text-left text-3xl sm:text-4xl tracking-wider my_font mb-4 md:mb-0 leading-tight">
          Our Blog & Article
        </h1>

        <button className="bg-red-700 text-white hover:bg-white hover:text-black transition w-[160px] rounded-full h-[55px] font-medium border border-black shadow mr-0 md:mr-11">
          <Link to="/page2">
          Read All Articles
          </Link>
        </button>

      </div>
    </div>
  );
};

export default Home6a;
