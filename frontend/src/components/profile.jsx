import React from 'react';
import './profile.css'; // Ensure to create a CSS file for styles

const Profile = () => {
  const tenants = [
    { name: '123 Main St. Apt 1', rent: 1200, dueDate: 'July 1, 2022' },
    { name: '123 Main St. Apt 2', rent: 1200, dueDate: 'July 1, 2022' },
    { name: '123 Main St. Apt 3', rent: 1200, dueDate: 'July 1, 2022' },
  ];

  const vacantProperties = [
    { name: '123 Main St. Apt 4', img: 'path/to/image1.jpg' },
    { name: '123 Main St. Apt 5', img: 'path/to/image2.jpg' },
  ];

  const recentPayments = [
    { name: '123 Main St. Apt 2', date: 'June 15, 2022', amount: 1200 },
    { name: '123 Main St. Apt 1', date: 'June 1, 2022', amount: 1200 },
  ];

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <h2>Property Management</h2>
        <nav>
          <ul>
            <li>Dashboard</li>
            <li>Tenants</li>
            <li>Rent Payments</li>
            <li>Maintenance Requests</li>
            <li>Add Property</li>
          </ul>
        </nav>
      </aside>
      <main className="main-content">
        <header className="header">
          <h1>Good afternoon, Alex</h1>
          <p>Here's what's happening with your properties</p>
        </header>
        <section className="tenants">
          <h2>Tenants</h2>
          {tenants.map((tenant, index) => (
            <div key={index} className="tenant">
              <h3>{tenant.name}</h3>
              <div className="rent-info">
                <span>Rent: ${tenant.rent}</span>
                <span>Due: {tenant.dueDate}</span>
              </div>
              <div className="progress-bar">
                <div className="progress" style={{ width: `${(tenant.rent / 1200) * 100}%` }} />
              </div>
            </div>
          ))}
        </section>
        <section className="vacant-properties">
          <h2>Vacant Properties</h2>
          {vacantProperties.map((property, index) => (
            <div key={index} className="vacant-property">
              <img src={property.img} alt={property.name} />
              <h3>{property.name}</h3>
            </div>
          ))}
        </section>
        <section className="recent-payments">
          <h2>Recent Payments</h2>
          {recentPayments.map((payment, index) => (
            <div key={index} className="payment">
              <h3>{payment.name}</h3>
              <p>Date: {payment.date}</p>
              <p>Amount: ${payment.amount}</p>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default Profile;
