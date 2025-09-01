import React from 'react';

const Page3 = () => {
  return (
    <div className="w-full justify-center p-8 bg-[#f9f9f9] self-center mb-20 " >

      <h1 className=" text-center  font-extrabold text-black hover:scale-105  tracking-wide duration-300 text-2xl md:text-[35px] my_font leading-snug text-wrap">
        The Secret Tips and Tricks to Prepare a <br /> Perfect Burger & Pizza for Our Customers
      </h1>
      {/* className=' font-extrabold text-black hover:scale-105  tracking-wider duration-300 text-2xl md:text-[35px] my_font leading-snug' */}

      <div className="px-6 md:px-48 mt-10  space-y-10">


        <img
          src="https://i.pinimg.com/1200x/8d/ee/5a/8dee5ab52784bc7a4bd1e0a51eb09cfe.jpg"

          alt=""
          className="w-full h-[40rem] object-cover rounded-xl"
        />

        <h2 className=" text-start my_font mb-3"><b>
          What do you need to prepare a home-made burger?
        </b>

        </h2>
        <p className="text-justify text-[16px] my_font text-base/7 line-clamp-5">
          Creating the perfect burger and pizza is an art, combining ingredients, techniques, and passion to craft dishes that truly delight the palate. Today, we'll unveil some closely guarded secrets and insider tips for mastering these beloved staples of the culinary world.

        </p>
        

        {/* First List */}
        <ol className="list-decimal pl-5 space-y-3 text-[15px]">
          <li>
            <strong>Quality Mutton :</strong> The heart of a perfect burger is top-notch beet. Opt for fresh, high-quality ground beef with a fat content of about 20% for the juiciest, most flavorful results.

          </li>
          <li>
            <strong>Don't Overwork the Meat:</strong> A generous pinch of salt and black pepper just before cooking will enhance the beef's natural flavors without overshadowing them.

          </li>
          <li>
            <strong>Cooking:</strong> When forming your patties, be gentle. Overworking the meat can lead to dense, tough burgers. You want a patty that's firm enough to hold together, but not compressed.

          </li>
          <li>
            <strong>Resting:</strong> High heat is crucial. Whether you're grilling or pan-searing, make sure your cooking surface is hot enough to form a nice crust on the patty, sealing in those delicious juices.

          </li>
          <li>
            <strong>Resting: </strong> DAllow your cooked burgers to rest for a few minutes before serving. This lets the juices redistribute throughout the patty, ensuring a moist and flavorful bite.

          </li>

          {/* <li>
            <strong>Finish with finesse:</strong> A drizzle of olive oil or sprinkle of fresh herbs enhances presentation and taste.
          </li> */}
        </ol>
       

        <h2 className="font-bold text-start my_font mb-3"> <b>
          What are the right ingredients to make it delicious?
          </b>
        </h2>
        <p className="text-justify text-[16px] leading-relaxed">
          Creating the perfect burger and pizza is an art, combining ingredients, techniques, and passion to craft dishes that truly delight the palate. Today, we'll unveil some closely guarded secrets and insider tips for mastering these beloved staples of the culinary world

        </p>
       

       
        <ol className="list-decimal pl-5 space-y-3 text-[15px]">
          <li>
            <strong>Quality Chiken:</strong> The heart of a perfect burger is top-notch beef. Opt for fresh, high-quality ground beef with a fat content of about 20% for the juiciest, most flavorful results.

          </li>
          <li>
            <strong>Seasoning:</strong> Simplicity is key here. A generous pinch of salt and black pepper just before cooking will enhance the beef's natural flavors without overshadowing them.

          </li>
          <li>
            <strong>Don't Overwork the Meat:</strong> When forming your patties, be gentle. Overworking the meat can lead to dense, tough burgers. You want a patty that's firm enough to hold together but not compressed.

          </li>
          <li>
            <strong>Cooking:</strong> High heat is crucial. Whether you're grilling or pan-searing, make sure your cooking surface is hot enough to form a nice crust on the patty, sealing in those delicious juices.

          </li>
          <li>
            <strong>Presentation tells a story:</strong> Allow your cooked burgers to rest for a few minutes before serving. This lets the juices redistribute throughout the patty, ensuring a moist and flavorful bite.e.
          </li>
          
        </ol>

        
        <img
          src="https://i.pinimg.com/736x/a3/8e/5c/a38e5cee61c382e258c31dff983fd491.jpg"
          alt=""
          className="w-full h-[40rem] object-cover rounded-2xl"
        />
        <h2 className="font-bold text-start my_font mb-3"> <b>
          What are the right ingredients to make it delicious?
          </b>
        </h2>
        <p className="text-justify text-[16px]  leading-relaxed">
          Creating the perfect burger and pizza is an art, combining ingredients, techniques, and passion to craft dishes that truly delight the palate. Today, we'll unveil some closely guarded secrets and insider tips for mastering these beloved staples of the culinary world

        </p>
      </div>
    </div>
  );
};

export default Page3;
