import React from "react";

const Menue2 = () => {
  return (
    <div className="grid md:grid-cols-2 bg-gray-200  px-4 md:px-32 py-10 gap-12 w-full">

      
      <div>
        <h2 className="text-4xl font-bold my_font mb-4 text-black hover:scale-105 transition duration-300">
          You can order<br />through Apps
        </h2>
        <p className="text-black text-sm hover:scale-105 transition my_font duration-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          molestiae delectus culpa hic assumenda, voluptate reprehenderit dolore
          autem cum ullam sed odit perspiciatis. Doloribus quos velit, eveniet
          ex deserunt fuga?
        </p>
      </div>

      
      <div className="bg-gray-200 p-6 rounded-xl w-full">
        <div className="flex flex-col items-center space-y-10">

         
          <div className="flex flex-wrap justify-center gap-6">
            <div className="bg-white shadow rounded-lg p-2 w-[150px] h-[60px] flex items-center justify-center hover:scale-105 transition duration-300">
              <img
                src="https://logos-world.net/wp-content/uploads/2020/11/Uber-Eats-Logo.png"
                alt=""
                className="h-10 w-full object-cover"
              />
            </div>
            <div className="bg-white shadow rounded-lg p-2 w-[150px] h-[60px] flex items-center justify-center hover:scale-105 transition duration-300">
              <img
                src="https://about.grubhub.com/wp-content/uploads/2025/06/Grubhub_Wordmark_Orange-high-1920x1344.png"
                alt=""
                className="h-10 w-full object-cover"
              />
            </div>
            <div className="bg-white shadow rounded-lg p-2 w-[150px] h-[60px] flex items-center justify-center hover:scale-105 transition duration-300">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5x-lK9pbfeqzUTmliYcBBB5RmxUpK14hLjw&s"
                alt=""
                className="h-10 w-full object-cover"
              />
            </div>
          </div>

          
          <div className="flex flex-wrap  w-full justify-center gap-2">
            <div className="bg-white shadow rounded-lg p-2 w-[190px] h-[80px] flex items-center justify-center hover:scale-105 transition duration-300">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz9O7oZpHalO-UxEolxoZMOS2ZMwYgzffnXg&s"
                alt=""
                className="h-12 w-full object-cover"
              />
            </div>
            <div className="bg-white shadow rounded-lg p-2 w-[150px] h-[80px] flex items-center justify-center hover:scale-105 transition duration-300">
              <img
                src="https://logos-world.net/wp-content/uploads/2023/03/FoodPanda-Logo.png"
                alt=""
                className="h-12 w-full object-cover"
              />
            </div>
            <div className="bg-white shadow rounded-lg p-2 w-[190px] h-[80px] flex items-center justify-center hover:scale-105 transition duration-300">
              <img
                src="https://cdn.worldvectorlogo.com/logos/deliveroo-logo.svg"
                alt=""
                className="h-12 w-full object-cover"
              />
            </div>
          </div>

          
          <div className="flex flex-wrap justify-center gap-6">
            <div className="bg-white shadow rounded-lg p-2 w-[150px] h-[60px] flex items-center justify-center hover:scale-105 transition duration-300">
              <img
                src="https://cdn.perishablenews.com/2019/02/ret3.jpg"
                alt=""
                className="h-10 w-full object-cover"
              />
            </div>
            <div className="bg-white shadow rounded-lg p-2 w-[150px] h-[60px] flex items-center justify-center hover:scale-105 transition duration-300">
              <img
                src="https://1000logos.net/wp-content/uploads/2020/10/Just-Eat-Logo-2016.jpg"
                alt="Just Eat"
                className="h-10 w-full object-cover"
              />
            </div>
            <div className="bg-white shadow rounded-lg p-2 w-[150px] h-[60px] flex items-center justify-center hover:scale-105 transition duration-300">
              <img
                src="https://i.pinimg.com/736x/86/67/f7/8667f7a6fdf3feef0a97d1c86d0842bb.jpg"
                alt="DiDi Food"
                className="h-10 w-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Menue2;
