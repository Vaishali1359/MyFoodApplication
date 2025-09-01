import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import FoodContext from "../../Localdata/FoodContext";

const Page2 = () => {
  const { foods } = useContext(FoodContext);

  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const openModal = (image) => {
    setCurrentImage(image);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setCurrentImage(null);
  };

  let Statuses =[
    'URL(/page3)',
    'URL(/page3)',
    'URL(/page3)',
    'URL(/page3)',
    'URL(/page3)'
    
  ];

  return (
    <div>
      <h1 className="text-black text-center text-5xl sm:text-7xl font-extrabold my_font mb-4 py-10 leading-tight capitalize">
        Our Blog & Articles
      </h1>
      <p className="text-center px-6 sm:px-40 text-base text-gray-700 my_font mb-8">
        Creating the perfect burger and pizza is an art, combining ingredients,
        techniques, and passion to craft dishes that truly delight the palate.
        Today, we'll unveil some closely guarded secrets and insider tips for
        mastering these beloved staples of the culinary world.
      </p>

      <div className="max-w-[1340px] mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pb-12 px-4">
        {foods.map((item) => (
          <div
            key={item.id}
            className="block  rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="h-auto w-full cursor-pointer" onClick={() => openModal(item)}>
              <img
                src={item.img}
              
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-bold text-gray-600 mb-2">
                {item.title || item.head}
              </h2>
              <p className="text-sm text-black  line-clamp-3">
                {(item.desc || item.para)?.slice(0, 100)}...
              </p>
             
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
              src={currentImage.img}
              
            />
             
          </div>
        </div>
      )}
    </div>
  );
};

export default Page2;


// Page2.jsx
// import React, { useContext, useState } from "react";
// import { Link } from "react-router-dom";
// import FoodContext from "../../Localdata/FoodContext";

// const Page2 = () => {
//   const { foods } = useContext(FoodContext);

//   const [isOpen, setIsOpen] = useState(false);
//   const [currentImage, setCurrentImage] = useState(null);

//   const openModal = (image) => {
//     setCurrentImage(image);
//     setIsOpen(true);
//   };

//   const closeModal = () => {
//     setIsOpen(false);
//     setCurrentImage(null);
//   };

//   return (
//     <div>
//       <h1 className="text-black text-center text-5xl sm:text-7xl font-extrabold my_font mb-4 py-10 leading-tight capitalize">
//         Our Blog & Articles
//       </h1>
//       <p className="text-center px-6 sm:px-40 text-base text-gray-700 my_font mb-8">
//         Creating the perfect burger and pizza is an art, combining ingredients,
//         techniques, and passion to craft dishes that truly delight the palate.
//         Today, we'll unveil some closely guarded secrets and insider tips for
//         mastering these beloved staples of the culinary world.
//       </p>

//       <div className="max-w-[1340px] mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pb-12 px-4">
//         {foods.map((item) => (
//           <Link
//             to={`/blog/${item.id}`}
//             key={item.id}
//             className="block rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
//           >
//             <div className="h-auto w-full cursor-pointer">
//               <img
//                 src={item.img}
//                 alt={item.title || "Blog Image"}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <div className="p-4">
//               <h2 className="text-lg font-bold text-gray-600 mb-2">
//                 {item.title || item.head}
//               </h2>
//               <p className="text-sm text-black line-clamp-3">
//                 {(item.desc || item.para)?.slice(0, 100)}...
//               </p>
//             </div>
//           </Link>
//         ))}
//       </div>

//       {isOpen && currentImage && (
//         <div
//           id="imageModal"
//           className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
//           onClick={closeModal}
//         >
//           <div
//             className="relative max-w-3xl max-h-full w-full rounded-lg "
//             onClick={(e) => e.stopPropagation()}
//           >
//             <button
//               className="absolute top-2 right-2 text-white bg-black bg-opacity-50 rounded-full px-3 py-1 text-lg"
//               onClick={closeModal}
//             >
//               &times;
//             </button>
//             <img
//               className="w-full h-auto max-h-[70vh] object-contain"
//               src={currentImage.img}
//             />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Page2;
