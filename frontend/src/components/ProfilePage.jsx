import React, { useState } from 'react';
import './ProfilePage.css'; // Ensure to create a CSS file for styles

const ProfilePage = () => {
  const [fullName, setFullName] = useState('Jane Doe');
  const [email, setEmail] = useState('jane.doe@example.com');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);

  const handleSave = () => {
    alert('Profile updated successfully!');
  };

  const toggleTwoFactor = () => {
    setTwoFactorEnabled(!twoFactorEnabled);
  };

  return (
    <div className="profile-page">
      <header className="header">
        <h1>Profile</h1>
      </header>
      <section className="personal-info">
        <h2>Personal Information</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <label>
            Full Name
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </label>
          <label>
            Email
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label>
            Phone Number
            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </label>
          <button type="button" onClick={handleSave} className="save-button">
            Save
          </button>
        </form>
      </section>
      <section className="payment-method">
        <h2>Payment Method</h2>
        <p>{fullName} (ending in 1234)</p>
      </section>
      <section className="account-settings">
        <h2>Account</h2>
        <div>
          Two-Factor Authentication is {twoFactorEnabled ? 'enabled' : 'disabled'}
          <button onClick={toggleTwoFactor} className="change-button">
            {twoFactorEnabled ? 'Disable' : 'Enable'}
          </button>
        </div>
      </section>
      <section className="api-keys">
        <h2>API Keys</h2>
        <p>Generate a new API key</p>
        <button className="generate-api-button">Generate API Key</button>
      </section>
      <section className="delete-account">
        <h2>Delete Account</h2>
        <button className="delete-button">Delete Account</button>
      </section>
    </div>
  );
};

export default ProfilePage;
