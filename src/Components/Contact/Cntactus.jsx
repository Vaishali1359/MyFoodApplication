import React, { useState, useEffect } from 'react';

const Cntactus = () => {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    name: '',
    phone: '',
    totalPerson: '',
  });

  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedIn = JSON.parse(localStorage.getItem('loggedInUser'));
    if (loggedIn) setUser(loggedIn);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user) {
      alert('Please login first to book a table.');
      return;
    }

    const existingBookings = JSON.parse(localStorage.getItem(`bookings_${user.username}`)) || [];
    const updatedBookings = [...existingBookings, formData];
    localStorage.setItem(`bookings_${user.username}`, JSON.stringify(updatedBookings));

    alert('Table booked successfully!');
    setFormData({ date: '', time: '', name: '', phone: '', totalPerson: '' });
  };

  const inputClass =
    'w-full border border-black px-4 py-4 rounded-full text-sm focus:outline-none focus:ring focus:ring-orange-300';

  return (
    <div className="relative min-h-screen bg-white">
      <div className="relative z-10 max-w-xl mx-auto pt-36 pb-32 px-4">
        <form
          onSubmit={handleSubmit}
          className="w-full p-8 rounded-xl shadow-lg space-y-6 bg-white relative z-10"
        >
          <h1 className="text-3xl font-bold text-center">Book A Table</h1>

          <div className="flex space-x-4">
            <div className="w-1/2">
              <label>Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className={inputClass}
                required
              />
            </div>
            <div className="w-1/2">
              <label>Time</label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className={inputClass}
                required
              />
            </div>
          </div>

          <div className="flex space-x-4">
            <div className="w-1/2">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={inputClass}
                required
              />
            </div>
            <div className="w-1/2">
              <label>Phone</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={inputClass}
                required
              />
            </div>
          </div>

          <div>
            <label>Total Person</label>
            <select
              name="totalPerson"
              value={formData.totalPerson}
              onChange={handleChange}
              className={inputClass}
              required
            >
              <option value="">Select</option>
              <option>1 Person</option>
              <option>2 Persons</option>
              <option>3 Persons</option>
              <option>4 Persons</option>
              <option>5+ Persons</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-3 rounded-full font-semibold hover:bg-orange-600"
          >
            Book Table
          </button>
        </form>
      </div>

      <div className="absolute bottom-0 w-full h-1/2 z-0">
        <iframe
          title="Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.251888338683!2d144.9631!3d-37.8142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5777e6785f5f1f!2sFederation%20Square!5e0!3m2!1sen!2sin!4v1620609307614!5m2!1sen!2sin"
          className="w-full h-full border-0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Cntactus;
