import React from 'react';
import './payment.css'; // Ensure to create a CSS file for styles

const Payment = () => {
  const currentBalance = 1200;
  const paymentMethod = 'Credit Card (ending in 1234)';
  const paymentHistory = [
    { date: 'Jan 6', status: 'Paid', amount: 1200 },
    { date: 'Aug 20', status: 'Paid', amount: 1200 },
  ];

  const rentalAgreement = {
    location: 'San Francisco, CA',
    startDate: 'Aug 1, 2022',
  };

  return (
    <div className="payment-page">
      <header className="header">
        <h1>Hi, Brooke</h1>
        <h2>${currentBalance}</h2>
        <button className="pay-now">Pay Now</button>
      </header>
      <section className="payment-method">
        <h3>Payment Method</h3>
        <p>{paymentMethod}</p>
      </section>
      <section className="payment-history">
        <h3>Payment History</h3>
        <ul>
          {paymentHistory.map((payment, index) => (
            <li key={index} className="payment-item">
              <span>{payment.date} - {payment.status} - ${payment.amount}</span>
            </li>
          ))}
        </ul>
      </section>
      <section className="rental-agreement">
        <h3>Rental Agreement</h3>
        <p>{rentalAgreement.location}</p>
        <p>Start Date: {rentalAgreement.startDate}</p>
      </section>
    </div>
  );
};

export default Payment;
