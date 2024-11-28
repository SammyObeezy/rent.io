import React, { useState } from 'react';
import './signup.css'; // Make sure to create a CSS file for styles

const Signup = () => {
  const [isLogin, setIsLogin] = useState(true); // State to toggle between login and signup

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="container">
      <header className="header">
        <h1>Welcome to Rental.io</h1>
        <p>
          A modern platform for tenants and landlords to manage their rentals.
          Pay rent on time, report maintenance issues, and more.
        </p>
      </header>

      <div className="form-container">
        {isLogin ? (
          <div className="login-form">
            <h2>Log In</h2>
            <form>
              <div className="form-group">
                <label>Email:</label>
                <input type="email" placeholder="Enter your email" required />
              </div>
              <div className="form-group">
                <label>Password:</label>
                <input type="password" placeholder="Enter your password" required />
              </div>
              <button type="submit" className="btn login-btn">Log In</button>
            </form>
          </div>
        ) : (
          <div className="signup-form">
            <h2>Sign Up</h2>
            <form>
              <div className="form-group">
                <label>Username:</label>
                <input type="text" placeholder="Enter your username" required />
              </div>
              <div className="form-group">
                <label>Email:</label>
                <input type="email" placeholder="Enter your email" required />
              </div>
              <div className="form-group">
                <label>Phone Number:</label>
                <input type="tel" placeholder="Enter your phone number" required />
              </div>
              <div className="form-group">
                <label>Zip Code:</label>
                <input type="text" placeholder="Enter your zip code" required />
              </div>
              <button type="submit" className="btn signup-btn">Sign Up</button>
            </form>
          </div>
        )}
      </div>

      <div className="button-container">
        <button onClick={handleToggle} className="btn toggle-btn">
          {isLogin ? 'Switch to Sign Up' : 'Switch to Log In'}
        </button>
      </div>

      <footer className="footer">
        <p>
          By clicking Log In or Sign Up, you agree to our
          <a href="/terms" className="link"> Terms of Service</a> and
          <a href="/privacy" className="link"> Privacy Policy</a>.
        </p>
      </footer>
    </div>
  );
};

export default Signup;
