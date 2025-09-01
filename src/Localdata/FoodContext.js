import React, { createContext, useState, useEffect } from 'react';
import data6 from '../Components/data6.json';

const FoodContext = createContext();

export const FoodProvider = ({ children }) => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    const storedFoods = JSON.parse(localStorage.getItem('foodData')) || data6;
    setFoods(storedFoods);
  }, []);

  const deleteFood = (id) => {
    const updatedFoods = foods.filter(food => food.id !== id);
    setFoods(updatedFoods);
    localStorage.setItem('foodData', JSON.stringify(updatedFoods));
  };

  return (
    <FoodContext.Provider value={{ foods, deleteFood, setFoods }}>
      {children}
    </FoodContext.Provider>
  );
};

export default FoodContext;
