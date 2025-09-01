const BOOKINGS_KEY = 'tableBookings';

const generateId = () => `BKG-${Date.now()}`;

export const saveBooking = (booking) => {
  const existing = JSON.parse(localStorage.getItem(BOOKINGS_KEY)) || [];

  const newBooking = {
    id: generateId(),
    ...booking,
    createdAt: new Date().toISOString(), 
  };

  existing.push(newBooking);
  localStorage.setItem(BOOKINGS_KEY, JSON.stringify(existing));
};

export const getBookings = () => {
  return JSON.parse(localStorage.getItem(BOOKINGS_KEY)) || [];
};


export const deleteBooking = (id) => {
  const all = getBookings();
  const updated = all.filter((b) => b.id !== id);
  localStorage.setItem(BOOKINGS_KEY, JSON.stringify(updated));
};


export const clearAllBookings = () => {
  localStorage.removeItem(BOOKINGS_KEY);
};


const USERS_KEY = 'userProfiles';

export const getUsers = () => {
  return JSON.parse(localStorage.getItem(USERS_KEY)) || [];
};

export const addUser = (user) => {
  const existing = getUsers();
  const newUser = { id: Date.now(), ...user };
  localStorage.setItem(USERS_KEY, JSON.stringify([...existing, newUser]));
};

