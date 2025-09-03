import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import FoodContext from '../Localdata/FoodContext';

const Admin1 = () => {
  const { foods, deleteFood, setFoods } = useContext(FoodContext);
  const navigate = useNavigate();

  const [selectedTab, setSelectedTab] = useState('dashboard');
  const [searchTerm, setSearchTerm] = useState('');
  const [registeredUsers, setRegisteredUsers] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newFood, setNewFood] = useState({ title: '', desc: '', price: '', img: '' });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('loggedInUser'));
    const users = JSON.parse(localStorage.getItem('users')) || [];

    if (!user || user.role !== 'admin') {
      alert('Access denied. Admins only.');
      navigate('/login');
      return;
    }

    setRegisteredUsers(users);
  }, [navigate]);

  function handleConfirmBooking(username, index) {
    const userBookings = JSON.parse(localStorage.getItem('bookings_' + username)) || [];
    if (!userBookings[index]) return;

    userBookings[index].confirmed = true;
    localStorage.setItem('bookings_' + username, JSON.stringify(userBookings));

    alert('Booking confirmed for ' + username);
  }

  function handleLogout() {
    localStorage.removeItem('loggedInUser');
    navigate('/home');
  }

  function handleAddFood() {
    const { title, desc, price, img } = newFood;

    if (!title || !desc || !price || !img) {
      alert('Please fill in all fields.');
      return;
    }

    const newItem = {
      id: Date.now().toString(),
      title,
      desc,
      price,
      img
    };

    const updatedFoods = [...foods, newItem];
    setFoods(updatedFoods);
    localStorage.setItem('foodData', JSON.stringify(updatedFoods));
    setNewFood({ title: '', desc: '', price: '', img: '' });
    setShowAddForm(false);
  }

  function handleDeleteFood(id) {
    deleteFood(id);
  }

  const filteredMenu = foods.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function renderContent() {
    switch (selectedTab) {
      case 'dashboard':
        return (
          <div>
            <div className="flex justify-between items-center mb-4 px-4">
              <h2 className="text-xl font-bold">Food Items</h2>
              <button
                onClick={() => setShowAddForm(true)}
                className="bg-gray-400 shadow-2xl border-black text-black px-4 py-2 rounded hover:bg-gray-300"
              >
                + Add New Food
              </button>
            </div>

            <input
              type="text"
              placeholder="Search food..."
              className="border p-2 mb-4 w-full mx-4 rounded"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />

            {showAddForm && (
              <div className="bg-white p-4 rounded-lg shadow-md mb-6 mx-4">
                <h3 className="text-lg font-bold mb-2">Add New Food</h3>
                <input
                  type="text"
                  placeholder="Title"
                  className="border p-2 mb-2 w-full"
                  value={newFood.title}
                  onChange={e => setNewFood({ ...newFood, title: e.target.value })}
                />
                <input
                  type="text"
                  placeholder="Description"
                  className="border p-2 mb-2 w-full"
                  value={newFood.desc}
                  onChange={e => setNewFood({ ...newFood, desc: e.target.value })}
                />
                <input
                  type="text"
                  placeholder="Price"
                  className="border p-2 mb-2 w-full"
                  value={newFood.price}
                  onChange={e => setNewFood({ ...newFood, price: e.target.value })}
                />
                <input
                  type="text"
                  placeholder="Image URL"
                  className="border p-2 mb-2 w-full"
                  value={newFood.img}
                  onChange={e => setNewFood({ ...newFood, img: e.target.value })}
                />
                <div className="flex gap-2">
                  <button onClick={handleAddFood} className="bg-green-500 text-white px-3 py-1 rounded">
                    Add
                  </button>
                  <button
                    onClick={() => setShowAddForm(false)}
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
                    <th className="px-4 py-2 border">Image</th>
                    <th className="px-4 py-2 border">Title</th>
                    <th className="px-4 py-2 border">Description</th>
                    <th className="px-4 py-2 border">Price</th>
                    <th className="px-4 py-2 border">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredMenu.map(item => (
                    <tr key={item.id} className="hover:bg-yellow-50 transition">
                      <td className="px-4 py-2 border">
                        <img src={item.img} alt={item.title} className="h-16 w-16 object-cover rounded" />
                      </td>
                      <td className="px-4 py-2 border font-semibold">{item.title}</td>
                      <td className="px-4 py-2 border">{item.desc}</td>
                      <td className="px-4 py-2 border">{item.price}</td>
                      <td className="px-4 py-2 border text-center">
                        <button
                          onClick={() => handleDeleteFood(item.id)}
                          className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-500"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );

      case 'orders':
        const allUserBookings = registeredUsers
          .flatMap(user => {
            const bookingsData = JSON.parse(localStorage.getItem('bookings_' + user.username)) || [];
            return bookingsData.map((booking, index) => ({
              ...booking,
              username: user.username,
              index
            }));
          })
          .sort((a, b) => a.username.localeCompare(b.username));

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
                    {allUserBookings.map((b, i) => (
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
                              onClick={() => handleConfirmBooking(b.username, b.index)}
                              className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
                            >
                              Confirm
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        );

      case 'profiles':
        return (
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-6">👤 User Profiles</h2>
            {registeredUsers.length === 0 ? (
              <p className="text-black italic">No users found.</p>
            ) : (
              <div className="overflow-x-auto shadow rounded-lg border border-gray-300 bg-white">
                <table className="min-w-full text-sm text-gray-800 border-collapse">
                  <thead className="bg-gray-400 text-black uppercase text-xs border-b-2 border-gray-400">
                    <tr>
                      <th className="px-4 py-2 border">No .</th>
                      <th className="px-4 py-2 border">Username</th>
                      <th className="px-4 py-2 border">Email</th>
                      <th className="px-4 py-2 border">Role</th>
                    </tr>
                  </thead>
                  <tbody>
                    {registeredUsers.map((user, i) => (
                      <tr key={i} className="hover:bg-yellow-50">
                        <td className="px-4 py-2 border text-center">{i + 1}</td>
                        <td className="px-4 py-2 border font-semibold">{user.username}</td>
                        <td className="px-4 py-2 border">{user.email}</td>
                        <td className="px-4 py-2 border">{user.role}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        );

      default:
        return null;
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <nav className="bg-white shadow rounded-lg p-4 flex justify-between items-center mb-6">
        <div className="flex space-x-6 text-lg font-semibold text-gray-600">
          <button
            onClick={() => setSelectedTab('dashboard')}
            className={`hover:text-blue-600 ${
              selectedTab === 'dashboard' ? 'text-blue-600 border-b-2 border-blue-600 pb-1' : ''
            }`}
          >
            Dashboard
          </button>
          <button
            onClick={() => setSelectedTab('orders')}
            className={`hover:text-blue-600 ${
              selectedTab === 'orders' ? 'text-blue-600 border-b-2 border-blue-600 pb-1' : ''
            }`}
          >
            Orders
          </button>
          <button
            onClick={() => setSelectedTab('profiles')}
            className={`hover:text-blue-600 ${
              selectedTab === 'profiles' ? 'text-blue-600 border-b-2 border-blue-600 pb-1' : ''
            }`}
          >
            Profiles
          </button>
        </div>
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Logout
        </button>
      </nav>

      {renderContent()}
    </div>
  );
};

export default Admin1;
