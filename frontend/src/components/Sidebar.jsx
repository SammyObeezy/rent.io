import React from 'react';
import { FaHome, FaUserCircle, FaCreditCard, FaWallet, FaStar, FaQuestionCircle } from 'react-icons/fa';
import './Sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <img src="/path/to/your/logo.png" alt="Logo" className="sidebar-logo" />
      </div>
      <div className="sidebar-menu">
        <div className="menu-item">
          <Link to="/dashboard"><FaHome className="menu-icon" /></Link>
          <span className="menu-text">Dashboard</span>
        </div>
        <div className="menu-item">
          <FaUserCircle className="menu-icon" />
          <span className="menu-text">Image</span>
        </div>
        <div className="menu-item">
          <FaCreditCard className="menu-icon" />
          <span className="menu-text">My Payments</span>
        </div>
        <div className="menu-item">
          <FaWallet className="menu-icon" />
          <span className="menu-text">Rent Balance</span>
        </div>
        <div className="menu-item">
          <FaStar className="menu-icon" />
          <span className="menu-text">Submit Rating</span>
        </div>
        <div className="menu-item">
          <FaQuestionCircle className="menu-icon" />
          <span className="menu-text">Support/Help</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
