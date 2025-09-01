import React, { useState } from 'react';
import data4 from "../data4.json";

const Menu3 = () => {
  const [FoodItem, setFoodItem] = useState("All");

  const filterFood =
    FoodItem === "All" || FoodItem === ""
      ? data4.slice(0, 8)
      : data4.filter((item) => item.catagory === FoodItem);

  const btnClass =
    "bg-red-700 text-white hover:bg-white hover:text-black border-black border-2 font-bold text-sm px-4 py-2 rounded-full transition cursor-pointer";

  const btnActiveClass =
    "bg-white text-black border-red-700 border-2 font-bold text-sm px-4 py-2 rounded-full transition cursor-pointer";

  return (
    <div className="px-4 py-12 md:px-32 bg-white text-center">
      <h1 className="text-3xl sm:text-5xl my_font font-extrabold text-black mb-4">
        Our Menu
      </h1>
      <p className="text-gray-600 text-sm md:text-base my_font py-6 max-w-xl mx-auto mb-8">
        We consider all the drivers of change gives you the components you need
        to create a truly happens.
      </p>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-4 justify-center mb-8">
        {["All", "breakfast", "maindishes", "drinks", "desserts"].map((cat) => (
          <button
            key={cat}
            onClick={() => setFoodItem(cat)}
            className={FoodItem === cat ? btnActiveClass : btnClass}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {/* Food Grid */}
      <div className="max-w-[1340px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-2">
        {filterFood.map((item) => (
          <div
            key={item.id}
            className="w-full max-w-[320px] h-[400px] bg-slate-100 shadow-xl rounded-lg overflow-hidden flex flex-col mx-auto"
          >
            <div className="h-[60%] w-full">
              <img
                className="w-full h-full object-cover bg-white"
                src={item.image}
                alt={item.heading}
              />
            </div>
            <div className="h-[40%] m-4 flex flex-col justify-center">
              <p className="text-md text-red-500 font-extrabold text-center mb-1">{item.price}</p>
              <h2 className="text-md font-semibold text-black text-center mb-1">{item.heading}</h2>
              <p className="font-serif text-base text-center py-2 mb-2 text-gray-700">{item.para}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu3;
