import React, { useState, useEffect } from 'react';
import { ShoppingCart } from 'lucide-react';

const Profile = () => {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    name: '',
    phone: '',
    totalPerson: '',
  });

  const [user, setUser] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [showCart, setShowCart] = useState(false);

  // Load user and bookings
  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (loggedUser) {
      setUser(loggedUser);
      const userBookings =
        JSON.parse(localStorage.getItem('bookings_' + loggedUser.username)) || [];
      setBookings(userBookings);
    }
  }, []);

  // Update booking statuses whenever user or bookings change
  useEffect(() => {
    if (!user || bookings.length === 0) return;

    const now = new Date();
    const updated = bookings.map((b) => {
      const bookingTime = new Date(`${b.date}T${b.time}`);
      let status = 'past';
      if (bookingTime > now) status = 'upcoming';
      if (bookingTime.toDateString() === now.toDateString()) status = 'today';
      return { ...b, status };
    });

    setBookings(updated);
    localStorage.setItem('bookings_' + user.username, JSON.stringify(updated));
  }, [user, bookings]); // <-- yahan fix kiya hai

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!user) {
      alert('Please login first to book a table.');
      return;
    }

    const now = new Date();
    const bookingTime = new Date(formData.date + 'T' + formData.time);
    let status = 'past';
    if (bookingTime > now) status = 'upcoming';
    if (bookingTime.toDateString() === now.toDateString()) status = 'today';

    const newBooking = { ...formData, status, confirmed: false };
    const updatedBookings = [...bookings, newBooking];

    setBookings(updatedBookings);
    localStorage.setItem('bookings_' + user.username, JSON.stringify(updatedBookings));

    alert('Table booked successfully!');
    setFormData({ date: '', time: '', name: '', phone: '', totalPerson: '' });
    setShowForm(false);
  }

  function deleteBooking(index) {
    const updated = bookings.filter((_, i) => i !== index);
    setBookings(updated);
    localStorage.setItem('bookings_' + user.username, JSON.stringify(updated));
  }

  const inputClass =
    'w-full border border-black px-4 py-2 rounded-md text-sm focus:outline-none focus:ring focus:ring-orange-300';

  if (!user) {
    return <p className="text-center text-red-500 mt-8">Please log in to view your profile.</p>;
  }

  return (
    <div className="flex flex-col lg:flex-row gap-4 p-4">
      <aside className="w-full lg:w-64 p-4 rounded shadow">
        <h2 className="text-lg font-bold mb-2">User Panel 😍</h2>
        <p className="mb-4">Welcome, {user.username}</p>
      </aside>

      <main className="flex-1 p-4 bg-gray-50 rounded-md shadow-md">
        <div className="flex justify-between items-center mb-4">
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
          >
            {showForm ? 'Close Form' : 'Add Booking'}
          </button>

          <div className="relative">
            <ShoppingCart
              className="w-8 h-8 text-green-700 cursor-pointer"
              onClick={() => setShowCart(!showCart)}
            />
            {bookings.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">
                {bookings.length}
              </span>
            )}

            {showCart && (
              <div className="absolute right-0 top-10 z-50 w-64 bg-white border border-gray-300 rounded-lg shadow-lg p-4 text-sm">
                <h4 className="text-center font-bold mb-2 text-green-600">Your Bookings</h4>
                {['today', 'upcoming', 'past'].map((status) => {
                  const filtered = bookings.filter((b) => b.status === status);
                  return (
                    <div key={status} className="mb-3">
                      <h5 className="font-semibold capitalize text-gray-700 border-b mb-1">
                        {status} ({filtered.length})
                      </h5>
                      {filtered.length === 0 ? (
                        <p className="text-gray-400 italic">No {status} bookings</p>
                      ) : (
                        <ul className="space-y-1 max-h-28 overflow-y-auto">
                          {filtered.map((b, i) => (
                            <li key={i} className="text-gray-600">
                              • {b.name} - {b.date} @ {b.time} {b.confirmed ? '✅' : '⏳'}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {showForm && (
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow space-y-4 mb-6">
            <h2 className="text-xl font-bold text-gray-800">Book a Table</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label>Date</label>
                <input type="date" name="date" value={formData.date} onChange={handleChange} className={inputClass} required />
              </div>
              <div>
                <label>Time</label>
                <input type="time" name="time" value={formData.time} onChange={handleChange} className={inputClass} required />
              </div>
              <div>
                <label>Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} className={inputClass} required />
              </div>
              <div>
                <label>Phone</label>
                <input type="text" name="phone" value={formData.phone} onChange={handleChange} className={inputClass} required />
              </div>
              <div className="md:col-span-2">
                <label>Total Person</label>
                <select name="totalPerson" value={formData.totalPerson} onChange={handleChange} className={inputClass} required>
                  <option value="">Select</option>
                  <option>1 Person</option>
                  <option>2 Persons</option>
                  <option>3 Persons</option>
                  <option>4 Persons</option>
                  <option>5+ Persons</option>
                </select>
              </div>
            </div>

            <div className="flex justify-end gap-4">
              <button type="button" onClick={() => setShowForm(false)} className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400">
                Cancel
              </button>
              <button type="submit" className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
                Book Now
              </button>
            </div>
          </form>
        )}

        <h3 className="text-2xl font-semibold text-gray-700 mb-4">Your Bookings</h3>
        {bookings.length === 0 ? (
          <p className="italic text-gray-500">No bookings made yet.</p>
        ) : (
          <div className="overflow-x-auto rounded">
            <table className="min-w-full text-sm text-left text-gray-800">
              <thead className="bg-green-600 text-white">
                <tr>
                  <th className="px-4 py-2">#</th>
                  <th className="px-4 py-2">Date</th>
                  <th className="px-4 py-2">Time</th>
                  <th className="px-4 py-2">Name</th>
                  <th className="px-4 py-2">Phone</th>
                  <th className="px-4 py-2">Persons</th>
                  <th className="px-4 py-2">Status</th>
                  <th className="px-4 py-2">Admin</th>
                  <th className="px-4 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((b, i) => (
                  <tr key={i} className="border-b hover:bg-gray-100">
                    <td className="px-4 py-2">{i + 1}</td>
                    <td className="px-4 py-2">{b.date}</td>
                    <td className="px-4 py-2">{b.time}</td>
                    <td className="px-4 py-2">{b.name}</td>
                    <td className="px-4 py-2">{b.phone}</td>
                    <td className="px-4 py-2">{b.totalPerson}</td>
                    <td className="px-4 py-2 capitalize">{b.status}</td>
                    <td className="px-4 py-2">
                      {b.confirmed ? (
                        <span className="text-green-600 font-bold">Confirmed ✅</span>
                      ) : (
                        <span className="text-orange-500 font-semibold">Pending ⏳</span>
                      )}
                    </td>
                    <td className="px-4 py-2">
                      <button
                        onClick={() => deleteBooking(i)}
                        className="text-red-600 hover:text-red-800 font-semibold"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </div>
  );
};

export default Profile;
