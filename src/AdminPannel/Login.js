import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [data, setData] = useState({ username: '', password: '', role: 'user' });
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Admin login
    if (data.username === "admin" && data.password === "admin123" && data.role === "admin") {
      localStorage.setItem("loggedInUser", JSON.stringify({ username: "admin", role: "admin" }));
      alert("Admin Login Successful");
      navigate("/admin");
      return;
    }

    // Guest login
    if (data.role === "guest") {
      localStorage.setItem("loggedInUser", JSON.stringify({ username: "Guest", role: "guest" }));
      alert("Welcome Guest!");
      navigate("/guest");
      return;
    }

    // Regular user login
    const user = users.find(
      (u) =>
        u.username === data.username &&
        u.password === data.password &&
        u.role === data.role
    );

    if (user) {
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      alert("Login Successful");
      navigate("/home");
    } else {
      alert("Invalid credentials or role mismatch");
    }
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://i.pinimg.com/1200x/02/0a/a1/020aa191a471a7d5e6c3d393da575ed8.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-40" />
      </div>

      {/* Form Container */}
      <div className="relative flex items-center justify-center min-h-screen px-4">
        <div className="w-full max-w-xl text-center space-y-6">
          <div className="mx-auto mt-16 bg-[hsl(111,26%,75%)] p-6 md:p-10 rounded-xl shadow-md border w-full">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 w-full sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] mx-auto"
            >
              <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
                Log In
              </h1>

              {/* Role Select */}
              <div className="flex flex-col">
                <label className="font-semibold text-gray-700 mb-1">Select Role</label>
                <select
                  value={data.role}
                  onChange={(e) => setData({ ...data, role: e.target.value })}
                  className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                  <option value="guest">Guest</option>
                </select>
              </div>

              {/* Username - Hide for Guest */}
              {data.role !== "guest" && (
                <div className="flex flex-col">
                  <label className="font-semibold text-gray-700 mb-1">User Name</label>
                  <input
                    type="text"
                    placeholder="Enter your username"
                    value={data.username}
                    onChange={(e) => setData({ ...data, username: e.target.value })}
                    className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              )}

              {/* Password - Hide for Guest */}
              {data.role !== "guest" && (
                <div className="flex flex-col">
                  <label className="font-semibold text-gray-700 mb-1">Password</label>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    value={data.password}
                    onChange={(e) => setData({ ...data, password: e.target.value })}
                    className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition duration-200"
              >
                Submit
              </button>

              {/* Sign Up Link */}
              {data.role !== "guest" && (
                <p className="text-center mt-3 text-sm md:text-base">
                  Don't have an account?{" "}
                  <Link to="/register" className="text-blue-600 font-semibold hover:text-blue-800">
                    Sign Up
                  </Link>
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
