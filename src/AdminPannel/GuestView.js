// src/Pages/GuestView.js

import React from 'react';
import { Link } from 'react-router-dom';

const GuestView = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-white to-green-50 flex flex-col items-center justify-center px-4 py-12 text-center">
      <div className="bg-white shadow-lg rounded-xl p-8 max-w-2xl w-full">
        <h1 className="text-4xl font-bold text-green-700 mb-4">Welcome, Guest!</h1>
        <p className="text-gray-700 text-lg mb-6">
          You are browsing as a guest. Feel free to explore our menu, blog, or contact us. 
          To access more features, please log in or register.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/menu">
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md transition">
              View Menu
            </button>
          </Link>
          <Link to="/page">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition">
              Read Blog
            </button>
          </Link>
          <Link to="/contact">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-md transition">
              Contact Us
            </button>
          </Link>
        </div>

        <div className="mt-6 text-sm text-gray-600">
          Want full access?{' '}
          <Link to="/" className="text-green-700 font-medium hover:underline">
            Log in
          </Link>{' '}
          or{' '}
          <Link to="/register" className="text-green-700 font-medium hover:underline">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GuestView;
