import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import About from './About';
import Footer1 from './Components/Footer1';
import House from './House';
import Contact from './Contact';
import OurMenue from './OurMenue';
import BlogPage from './BlogPage';
import Cntactus from './Components/Contact/Cntactus';
import SignUp from './AdminPannel/SignUp';
import Admin from './AdminPannel/Admin';
import Navbar from "./Navbar";
import UserAdmin from './AdminPannel/UserAdmin';
import BlogPage2 from './BlogPage2';
import Admin1 from './AdminPannel/Admin1';
import Login from './AdminPannel/Login';
import Profile from './AdminPannel/Profile';
import GuestView from './AdminPannel/GuestView';
// import GuestView from './Pages/GuestView'; // ✅ Import GuestView

const App = () => {
  const location = useLocation();

  // Navbar and Footer hide on login and register only
  const hideNavAndFooter = location.pathname === '/' || location.pathname === '/register';

  return (
    <>
      {!hideNavAndFooter && <Navbar />}

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/admin" element={<Admin1 />} />
        <Route path="/admin1" element={<Admin />} />
        <Route path="/useradmin" element={<UserAdmin />} />
        <Route path="/home" element={<House />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<OurMenue />} />
        <Route path="/page" element={<BlogPage />} />
        <Route path="/page2" element={<BlogPage2 />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cntactus" element={<Cntactus />} />
        <Route path="/profile" element={<Profile />} />
        {/* <Route path="/guest" element={<GuestView />} /> ✅ Guest route added */}
        <Route path="/guest" element={<GuestView />} />
      </Routes>

      {!hideNavAndFooter && <Footer1 />}
    </>
  );
};

export default App;
