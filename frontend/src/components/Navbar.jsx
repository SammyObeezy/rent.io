import { useState } from 'react';
import './Navbar.css'; // Import the CSS for styling

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  // Toggle the active class on the hamburger icon and nav menu
  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  // Remove the active class when a link is clicked
  const removeActive = () => {
    setIsActive(false);
  };

  return (
    <header className={`navbar ${isActive ? 'active' : ''}`}>
      <div className="logo">
        Rentio {/* Logo for Rentio */}
      </div>
      <ul className={`navMenu ${isActive ? 'active' : ''}`}>
        <li onClick={removeActive}>
          <a href="#home" className="navLink">Home</a>
        </li>
        <li onClick={removeActive}>
          <a href="#catalog" className="navLink">Payments</a>
        </li>
        <li onClick={removeActive}>
          <a href="#about" className="navLink">Balance</a>
        </li>
        <li onClick={removeActive}>
          <a href="#contact" className="navLink">Rating</a>
        </li>
        <li onClick={removeActive}>
          <a href="#login" className="navLink">Logout</a>
        </li>
      </ul>
      <div className={`hamburger ${isActive ? 'active' : ''}`} onClick={toggleActiveClass}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </header>
  );
};

export default Navbar;
