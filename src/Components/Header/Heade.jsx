import React, { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { SiFoodpanda } from "react-icons/si";
import { FaRegUserCircle } from "react-icons/fa";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [bookingCount, setBookingCount] = useState(0);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  const handleToggle = () => setToggle(!toggle);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setDropdownOpen(false);
    navigate("/");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (loggedInUser) {
      const bookings = JSON.parse(localStorage.getItem(`booking_${loggedInUser.username}`)) || [];
      setBookingCount(bookings.length);
    }
  }, [loggedInUser]);

  return (
    <div className="bg-white p-4 sticky top-0 z-50 shadow-sm">
      <div className="max-w-[1240px] mx-auto flex items-center justify-between">
        <div className="text-2xl md:text-3xl flex flex-row font-bold text-black tracking-wider my_font px-2">
          <Link to="/home" className="flex flex-row">
            <SiFoodpanda className="mr-2 mb-1" /> My Food
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-black items-center px-2">
          <li>
            <Link
              to="/home"
              className="px-4 py-2 rounded-full hover:bg-black hover:text-white transition"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="px-4 py-2 rounded-full hover:bg-black hover:text-white transition"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/menu"
              className="px-4 py-2 rounded-full hover:bg-black hover:text-white transition"
            >
              Menu
            </Link>
          </li>
          <li className="relative group">
            <span className="px-4 py-2 rounded-full hover:bg-black hover:text-white transition inline-block cursor-pointer">
              Page
            </span>
            <ul className="absolute top-full left-0 bg-white border rounded shadow w-32 z-50 mt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <li>
                <Link
                  to="/page"
                  className="block px-4 py-2 hover:bg-gray-100 text-black"
                >
                  Page 1
                </Link>
              </li>
              <li>
                <Link
                  to="/page2"
                  className="block px-4 py-2 hover:bg-gray-100 text-black"
                >
                  Page 2
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link
              to="/contact"
              className="px-4 py-2 rounded-full hover:bg-black hover:text-white transition"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Desktop Right Side */}
        <div className="hidden md:flex flex-row gap-4 items-center">
          <Link to="/cntactus">
            <button className="bg-white hover:bg-red-800 tracking-wider my_font border-black border-2 font-bold text-black text-sm px-4 py-2 rounded-full transition cursor-pointer">
              Book A Table{" "}
              {bookingCount > 0 && (
                <span className="ml-1 text-red-600">({bookingCount})</span>
              )}
            </button>
          </Link>

          {loggedInUser && loggedInUser.role !== "guest" ? (
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="hidden md:flex items-center bg-white hover:bg-red-800 tracking-wider my_font border-black border-2 font-bold text-black text-sm px-4 py-2 rounded-full transition cursor-pointer"
              >
                <FaRegUserCircle className="mr-2" size={20} />
                {loggedInUser.username}
              </button>

              {dropdownOpen && (
                <ul className="absolute mt-2 w-40 bg-white border rounded shadow-lg z-50 text-black">
                  {loggedInUser.role === "admin" ? (
                    <li>
                      <Link
                        to="/admin"
                        className="block px-4 py-2 hover:bg-gray-200"
                        onClick={() => setDropdownOpen(false)}
                      >
                        Admin Panel
                      </Link>
                    </li>
                  ) : (
                    <li>
                      <Link
                        to="/profile"
                        className="block px-4 py-2 hover:bg-gray-200"
                        onClick={() => setDropdownOpen(false)}
                      >
                        View Profile
                      </Link>
                    </li>
                  )}
                  <li>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 hover:bg-gray-200"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              )}
            </div>
          ) : (
            <Link
              to="/"
              className="hidden md:block px-4 py-2 rounded-full hover:bg-black hover:text-white transition font-semibold"
            >
              Login
            </Link>
          )}
        </div>

        {/* Mobile Hamburger */}
        <div
          onClick={handleToggle}
          className="block md:hidden text-black cursor-pointer z-50"
        >
          {toggle ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </div>

        {/* Mobile Menu */}
        <ul
          className={`fixed top-0 ${
            toggle ? "left-0" : "-left-full"
          } w-[75%] sm:w-[60%] h-full bg-black text-white px-6 py-4 transition-all duration-500 z-40 flex flex-col gap-4`}
        >
          <li className="border-b border-gray-600 pb-2">
            <Link to="/home" onClick={() => setToggle(false)}>
              Home
            </Link>
          </li>
          <li className="border-b border-gray-600 pb-2">
            <Link to="/about" onClick={() => setToggle(false)}>
              About
            </Link>
          </li>
          <li className="border-b border-gray-600 pb-2">
            <Link to="/menu" onClick={() => setToggle(false)}>
              Menu
            </Link>
          </li>
          <li className="border-b border-gray-600 pb-2">
            <Link to="/page" onClick={() => setToggle(false)}>
              Page 1
            </Link>
          </li>
          <li className="border-b border-gray-600 pb-2">
            <Link to="/page2" onClick={() => setToggle(false)}>
              Page 2
            </Link>
          </li>
          <li className="border-b border-gray-600 pb-2">
            <Link to="/contact" onClick={() => setToggle(false)}>
              Contact
            </Link>
          </li>

          {(!loggedInUser || loggedInUser.role === "guest") && (
            <>
              <li>
                <Link to="/" onClick={() => setToggle(false)}>
                  <button className="bg-green-600 hover:bg-green-700 w-full rounded-full h-[40px] font-medium text-white border shadow">
                    Login
                  </button>
                </Link>
              </li>
            </>
          )}

          {loggedInUser && loggedInUser.role !== "guest" && (
            <>
              <li>
                <Link to={loggedInUser.role === "admin" ? "/admin" : "/profile"} onClick={() => setToggle(false)}>
                  <button className="bg-green-600 hover:bg-green-700 w-full rounded-full h-[40px] font-medium text-white border shadow">
                    {loggedInUser.role === "admin" ? "Admin Panel" : "View Profile"}
                  </button>
                </Link>
              </li>
              <li>
                <button
                  onClick={() => {
                    handleLogout();
                    setToggle(false);
                  }}
                  className="bg-red-600 hover:bg-red-700 w-full rounded-full h-[40px] font-medium text-white border shadow"
                >
                  Logout
                </button>
              </li>
            </>
          )}

          <li>
            <Link to="/cntactus" onClick={() => setToggle(false)}>
              <button className="bg-white text-black hover:bg-gray-200 w-full rounded-full h-[40px] font-semibold border shadow">
                Book A Table{" "}
                {bookingCount > 0 && <span className="ml-1">({bookingCount})</span>}
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
