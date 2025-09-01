import React, { useState, useEffect } from "react";
// import { getBookings, deleteBooking } from "../utils/Localdata";
import { getBookings,deleteBooking } from "../Localdata/Localdata";

const menuData = [

];

const UserAdmin = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    setBookings(getBookings());
  }, []);

  
  const handleDeleteBooking = (id) => {
    deleteBooking(id);
    setBookings(getBookings());
  };

  
  const filteredMenu = menuData.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex min-h-screen bg-gray-50 font-sans">
     
      <aside className="w-64 bg-white border-r border-gray-200 p-6 flex flex-col">
     
      </aside>

   
      <main className="flex-1 p-8 overflow-auto">
     
        <div className="mb-6">
          <input
            type="search"
            placeholder="Search"
            className="w-64 p-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

   
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredMenu.map(({ id, title, desc, price, img }) => (
            <div
              key={id}
              className="bg-white rounded-xl p-6 shadow relative"
              style={{ backgroundColor: "#fef9f4" }}
            >
              <div className="absolute top-4 right-4 cursor-pointer text-red-500 text-xl">
                ♥
              </div>
              <img
                src={img}
                alt={title}
                className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
              />
              <h3 className="font-semibold text-lg mb-2">{title}</h3>
              <p className="text-gray-600 text-sm mb-4">{desc}</p>
              <div className="flex justify-between items-center">
                <span className="font-bold text-green-700">{price}</span>
                <button className="bg-green-300 text-green-900 font-semibold px-4 py-1 rounded hover:bg-green-400 transition">
                  + Add
                </button>
              </div>
            </div>
          ))}
        </div>

     
        <section>
          <h2 className="text-2xl font-bold mb-4">Table Bookings</h2>
          {bookings.length === 0 ? (
            <p>No bookings found.</p>
          ) : (
            <div className="space-y-4">
              {bookings.map(({ id, date, time, name, phone, totalPerson }) => (
                <div
                  key={id}
                  className="bg-white p-4 rounded shadow flex justify-between items-center"
                >
                  <div>
                    <p><strong>Name:</strong> {name}</p>
                    <p>
                      <strong>Date:</strong> {date} <strong>Time:</strong> {time}
                    </p>
                    <p><strong>Phone:</strong> {phone}</p>
                    <p><strong>Total Persons:</strong> {totalPerson}</p>
                  </div>
                  <button
                    onClick={() => handleDeleteBooking(id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default UserAdmin;
