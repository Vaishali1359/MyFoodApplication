import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    address: '',
    password: '',
    role: 'user',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = existingUsers.some(u => u.username === formData.username);

    if (userExists) {
      alert("Username already exists!");
      return;
    }

    const userToSave = { ...formData, role: "user" };
    existingUsers.push(userToSave);
    localStorage.setItem("users", JSON.stringify(existingUsers));
    alert("Signup successful! Please login.");
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
    
      <div className="absolute inset-0 z-0 flex flex-col">
        <div className="" />
        <img
          src="https://i.pinimg.com/1200x/02/0a/a1/020aa191a471a7d5e6c3d393da575ed8.jpg"
          alt="Background"
          className="object-cover w-full h-full"
        />
      </div>


      <div className="relative flex items-center justify-center min-h-screen px-4 py-8 sm:px-6 lg:px-8">
        <div className="w-full max-w-md bg-[hsl(111,26%,75%)] p-6 sm:p-8 rounded-xl shadow-md border z-10 min-h-[400px]">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold text-center text-gray-800 mb-2">Sign Up</h1>

          
            <div className="flex flex-col">
              <label className="font-semibold text-gray-700 mb-1">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            
            <div className="flex flex-col">
              <label className="font-semibold text-gray-700 mb-1">Username</label>
              <input
                type="text"
                placeholder="Username"
                value={formData.username}
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

          
            <div className="flex flex-col">
              <label className="font-semibold text-gray-700 mb-1">Email</label>
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

         
            <div className="flex flex-col">
              <label className="font-semibold text-gray-700 mb-1">Address</label>
              <input
                type="text"
                placeholder="Enter your address"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

          
            <div className="flex flex-col">
              <label className="font-semibold text-gray-700 mb-1">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

       
            <button
              type="submit"
              className="bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition duration-200"
            >
              Submit
            </button>

      
            <p className="text-center mt-3 text-sm">
              Already have an account?{' '}
              <Link to="/" className="text-blue-600 font-semibold hover:text-blue-800">
                Log In
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
