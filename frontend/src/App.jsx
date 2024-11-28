import React from 'react';
import SignUp from "./components/signup";
import NotificationsPage from './components/NotificationsPage';
import Profile from './components/profile';
import Payment from './components/payment';
import ProfilePage from './components/ProfilePage';
import PaymentMethodPage from './components/PaymentMethodPage';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return (
    <Router>  {/* Wrap Routes inside Router */}
      <div>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/notification" element={<NotificationsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/user-profile" element={<Profile />} />
          <Route path="/paymentmethod" element={<PaymentMethodPage />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
