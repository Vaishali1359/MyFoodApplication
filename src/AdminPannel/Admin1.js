

import React, { useContext, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FoodContext from '../Localdata/FoodContext';
import { getBookings, deleteBooking } from '../Localdata/Localdata';

const Admin1 = () => {
  const { foods, deleteFood, setFoods } = useContext(FoodContext);
  const navigate = useNavigate();

  const [selectedTab, setSelectedTab] = useState('dashboard');
  const [searchTerm, setSearchTerm] = useState('');
  const [bookings, setBookings] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [registeredUsers, setRegisteredUsers] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newFood, setNewFood] = useState({ title: '', desc: '', price: '', img: '' });

  useEffect(function () {
    const user = JSON.parse(localStorage.getItem('loggedInUser'));
    const users = JSON.parse(localStorage.getItem('users')) || [];

    if (!user || user.role !== 'admin') {
      alert('Access denied. Admins only.');
      navigate('/login');
      return;
    }

    setLoggedInUser(user);
    setBookings(getBookings());
    setRegisteredUsers(users);
  }, [navigate]);

  function handleDeleteBooking(id) {
    deleteBooking(id);
    setBookings(getBookings());
  }

  function handleConfirmBooking(username, index) {
    const userBookings = JSON.parse(localStorage.getItem('bookings_' + username)) || [];
    if (!userBookings[index]) return;

    userBookings[index].confirmed = true;
    localStorage.setItem('bookings_' + username, JSON.stringify(userBookings));

    
    setBookings(getBookings());
    alert('Booking confirmed for ' + username);
  }

  function handleLogout() {
    localStorage.removeItem('loggedInUser');
    navigate('/home');
  }

  function handleAddFood() {
    const title = newFood.title;
    const desc = newFood.desc;
    const price = newFood.price;
    const img = newFood.img;

    if (!title || !desc || !price || !img) {
      alert('Please fill in all fields.');
      return;
    }

    const newItem = {
      id: Date.now().toString(),
      title: title,
      desc: desc,
      price: price,
      img: img
    };

    const updatedFoods = foods.concat(newItem);
    setFoods(updatedFoods);
    localStorage.setItem('foodData', JSON.stringify(updatedFoods));
    setNewFood({ title: '', desc: '', price: '', img: '' });
    setShowAddForm(false);
  }

  function handleDeleteFood(id) {
    deleteFood(id);
  }

  const filteredMenu = foods.filter(function (item) {
    return item.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  function renderContent() {
    switch (selectedTab) {
      case 'dashboard':
        return (
          <div>
            <div className="flex justify-between items-center mb-4 px-4">
              <h2 className="text-xl font-bold">Food Items</h2>
              <button
                onClick={function () {
                  setShowAddForm(true);
                }}
                className="bg-gray-400 shadow-2xl border-black text-black px-4 py-2 rounded hover:bg-gray-300"
              >
                + Add New Food
              </button>
            </div>

            {showAddForm && (
              <div className="bg-white p-4 rounded-lg shadow-md mb-6 mx-4">
                <h3 className="text-lg font-bold mb-2">Add New Food</h3>
                <input
                  type="text"
                  placeholder="Title"
                  className="border p-2 mb-2 w-full"
                  value={newFood.title}
                  onChange={function (e) {
                    setNewFood({ ...newFood, title: e.target.value });
                  }}
                />
                <input
                  type="text"
                  placeholder="Description"
                  className="border p-2 mb-2 w-full"
                  value={newFood.desc}
                  onChange={function (e) {
                    setNewFood({ ...newFood, desc: e.target.value });
                  }}
                />
                <input
                  type="text"
                  placeholder="Price"
                  className="border p-2 mb-2 w-full"
                  value={newFood.price}
                  onChange={function (e) {
                    setNewFood({ ...newFood, price: e.target.value });
                  }}
                />
                <input
                  type="text"
                  placeholder="Image URL"
                  className="border p-2 mb-2 w-full"
                  value={newFood.img}
                  onChange={function (e) {
                    setNewFood({ ...newFood, img: e.target.value });
                  }}
                />
                <div className="flex gap-2">
                  <button
                    onClick={handleAddFood}
                    className="bg-green-500 text-white px-3 py-1 rounded"
                  >
                    Add
                  </button>
                  <button
                    onClick={function () {
                      setShowAddForm(false);
                    }}
                    className="bg-gray-400 text-white px-3 py-1 rounded"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}

            <div className="overflow-x-auto shadow rounded-lg border border-gray-300 bg-white mx-4">
              <table className="min-w-full text-sm text-gray-800 border-collapse">
                <thead className="bg-gray-400 text-black uppercase text-xs border-b-2 border-black">
                  <tr>
                    <th className="px-4 py-2 border border-gray-300">Image</th>
                    <th className="px-4 py-2 border border-gray-300">Title</th>
                    <th className="px-4 py-2 border border-gray-300">Description</th>
                    <th className="px-4 py-2 border border-gray-300">Price</th>
                    <th className="px-4 py-2 border border-gray-300">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredMenu.map(function (item) {
                    return (
                      <tr key={item.id} className="hover:bg-yellow-50 transition">
                        <td className="px-4 py-2 border border-gray-300">
                          <img src={item.img} alt={item.title} className="h-16 w-16 object-cover rounded" />
                        </td>
                        <td className="px-4 py-2 border border-gray-300 font-semibold">{item.title}</td>
                        <td className="px-4 py-2 border border-gray-300">{item.desc}</td>
                        <td className="px-4 py-2 border border-gray-300">{item.price}</td>
                        <td className="px-4 py-2 border border-gray-300 text-center">
                          <button
                            onClick={function () {
                              handleDeleteFood(item.id);
                            }}
                            className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-500"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        );

      case 'orders':
      
        const allUserBookings = registeredUsers
          .flatMap(function (user) {
            const bookingsData = JSON.parse(localStorage.getItem('bookings_' + user.username)) || [];
            return bookingsData.map(function (booking, index) {
              return { ...booking, username: user.username, index: index };
            });
          })
          .sort(function (a, b) {
            return a.username.localeCompare(b.username);
          });

        return (
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-6">📗 All Bookings</h2>
            {allUserBookings.length === 0 ? (
              <p className="text-black italic">No bookings found.</p>
            ) : (
              <div className="overflow-x-auto shadow rounded-lg border border-gray-300 bg-white">
                <table className="min-w-full text-sm text-gray-800 border-collapse">
                  <thead className="bg-gray-400 text-black uppercase text-xs border-b-2 border-gray-400">
                    <tr>
                      <th className="px-4 py-2 border">No .</th>
                      <th className="px-4 py-2 border">Username</th>
                      <th className="px-4 py-2 border">Date</th>
                      <th className="px-4 py-2 border">Time</th>
                      <th className="px-4 py-2 border">Name</th>
                      <th className="px-4 py-2 border">Phone</th>
                      <th className="px-4 py-2 border">Total Persons</th>
                      <th className="px-4 py-2 border">Status</th>
                      <th className="px-4 py-2 border">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allUserBookings.map(function (b, i) {
                      return (
                        <tr key={i} className="hover:bg-yellow-50">
                          <td className="px-4 py-2 border text-center">{i + 1}</td>
                          <td className="px-4 py-2 border font-semibold">{b.username}</td>
                          <td className="px-4 py-2 border">{b.date}</td>
                          <td className="px-4 py-2 border">{b.time}</td>
                          <td className="px-4 py-2 border">{b.name}</td>
                          <td className="px-4 py-2 border">{b.phone}</td>
                          <td className="px-4 py-2 border text-center">{b.totalPerson}</td>
                          <td className="px-4 py-2 border text-center">
                            {b.confirmed ? '✅ Confirmed' : '⏳ Pending'}
                          </td>
                          <td className="px-4 py-2 border text-center">
                            {!b.confirmed && (
                              <button
                                onClick={function () {
                                  handleConfirmBooking(b.username, b.index);
                                }}
                                className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-600"
                              >
                                Confirm
                              </button>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        );

      case 'profiles':
        return (
          <div className="overflow-x-auto shadow rounded-lg border border-gray-300 bg-white">
            <table className="min-w-full text-sm text-gray-800 border-collapse">
              <thead className="bg-gray-400  text-black uppercase text-xs border-b-2 border-gray-400">
                <tr>
                  <th className="px-4 py-2 border">Username</th>
                  <th className="px-4 py-2 border">Role</th>
                </tr>
              </thead>
              <tbody>
                {registeredUsers.map(function (user, index) {
                  return (
                    <tr key={index} className="hover:bg-slate-50-50 transition">
                      <td className="px-4 py-2 border font-semibold text-center">{user.username}</td>
                      <td className="px-4 py-2 border text-center">{user.role}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        );

      case 'view':
        return (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {foods.map(function (item, index) {
              return (
                <Link
                  to={'/blog/' + (item.id || index)}
                  key={item.id || index}
                  className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <img src={item.img} alt={item.title} className="h-48 w-full object-cover" />
                  <div className="p-4">
                    <h2 className="text-lg font-bold text-green-700 mb-2">{item.title || item.head}</h2>
                    <p className="text-sm text-gray-600">
                      {(item.desc || item.para).slice(0, 80)}...
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        );

      case 'settings':
        return <p className="text-gray-500">Settings coming soon...</p>;

      default:
        return null;
    }
  }

  return (
    <div className="flex min-h-screen bg-gray-100 font-sans">
      <aside className="w-72 bg-white shadow-md p-6">
        <h1 className="text-3xl font-bold text-black mb-4">Admin Panel</h1>
        {loggedInUser && (
          <div className="mb-6 p-3 bg-gray-400 rounded">
            <p className="text-sm text-gray-500">Logged in as:</p>
            <p className="font-semibold text-gray-800">
              {loggedInUser.username} ({loggedInUser.role})
            </p>
          </div>
        )}
        <nav className="space-y-4 bg-gray-100 leading-6 ">
          <button
            onClick={function () {
              setSelectedTab('dashboard');
            }}
              className={
              'block text-left w-[15rem] p-4 h-full hover:bg-slate-600' +
              (selectedTab === 'dashboard' ? 'text-green-600 font-bold' : 'text-white') +
              ' hover:bg-slate-300'
            }
          >
            🧾 Dashboard
          </button>
          <button
            onClick={function () {
              setSelectedTab('orders');
            }}
              className={
              'block text-left w-[15rem] p-4 h-full hover:bg-slate-600' +
              (selectedTab === 'orders' ? 'text-green-600 font-bold' : 'text-white') +
              ' hover:bg-slate-300'
            }
          >
            📦 Orders
          </button>
          <button
            onClick={function () {
              setSelectedTab('view');
            }}
            className={
              'block text-left w-[15rem] p-4 h-full hover:bg-slate-600' +
              (selectedTab === 'view' ? 'text-green-600 font-bold' : 'text-white') +
              ' hover:bg-slate-300'
            }
          >
            🗃 See Our Blogs
          </button>
          <button
            onClick={function () {
              setSelectedTab('profiles');
            }}
            className={
                'block text-left w-[15rem] p-4  h-auto hover:bg-slate-600' +
              (selectedTab === 'profiles' ? 'text-green-600 font-bold' : 'text-white') +
              ' hover:bg-slate-300'
            }
          >
            👥 User Profiles
          </button>
          <button
            onClick={function () {
              setSelectedTab('settings');
            }}
            className={
             'block text-left w-[15rem] p-4  h-auto hover:bg-slate-600' +
              (selectedTab === 'setting' ? 'text-green-600 font-bold' : 'text-white') +
              ' hover:bg-slate-300'
            }
          >
            ⚙ Settings
          </button>
          <button
            onClick={handleLogout}
            className="block text-left w-[15rem] p-4  h-auto hover:bg-slate-300 font-semibold"
          >
            🚪 Logout
          </button>
        </nav>
      </aside>
      <main className="flex-1 p-10 overflow-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Welcome Dashboard</h1>
        {renderContent()}
      </main>
    </div>
  );
};

export default Admin1;