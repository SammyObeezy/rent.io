import React from 'react';
import './NotificationsPage.css'; // Ensure to create a CSS file for styles

const NotificationsPage = () => {
  const notifications = [
    { month: "June", dueDate: "6/1/2023", amount: "$2,650" },
    { month: "May", dueDate: "5/1/2023", amount: "$2,650" },
    { month: "April", dueDate: "4/1/2023", amount: "$2,650" },
    { month: "March", dueDate: "3/1/2023", amount: "$2,650" },
    { month: "February", dueDate: "2/1/2023", amount: "$2,650" },
  ];

  return (
    <div className="notifications-page">
      <header className="header">
        <h1>Notifications</h1>
      </header>
      <section className="rent-due">
        <h2>Rent due</h2>
        <div className="notification-list">
          {notifications.map((notification, index) => (
            <div key={index} className="notification-item">
              <div className="notification-details">
                <span>{notification.month} rent is due</span>
                <span>Due by {notification.dueDate}</span>
              </div>
              <span className="notification-amount">{notification.amount}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default NotificationsPage;
