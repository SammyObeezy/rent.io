import React, { useState } from 'react';
import './PaymentMethodPage.css'; // Ensure to create a CSS file for styles

const PaymentMethodPage = () => {
  const [amount] = useState(1200);
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvc, setCvc] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [zipCode, setZipCode] = useState('');

  const handleConfirmPayment = () => {
    // Handle payment confirmation logic here
    alert('Payment Confirmed!');
  };

  return (
    <div className="payment-method-page">
      <header className="header">
        <h1>Payment Method</h1>
      </header>
      <section className="payment-selection">
        <h2>Select payment method</h2>
        <p>Credit card (ending in 1234)</p>
      </section>
      <section className="payment-details">
        <h3>Enter payment details</h3>
        <div className="amount">${amount.toFixed(2)}</div>
        <form onSubmit={(e) => e.preventDefault()}>
          <label>
            Card Number
            <input
              type="text"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              required
            />
          </label>
          <label>
            Expiry Date (MM / YY)
            <input
              type="text"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              required
              placeholder="MM / YY"
            />
          </label>
          <label>
            CVC
            <input
              type="text"
              value={cvc}
              onChange={(e) => setCvc(e.target.value)}
              required
            />
          </label>
          <label>
            Country
            <input
              type="text"
              value="United States"
              readOnly
            />
          </label>
          <label>
            Street Address
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </label>
          <label>
            City
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </label>
          <label>
            State
            <input
              type="text"
              placeholder="State"
              required
            />
          </label>
          <label>
            Zip Code
            <input
              type="text"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              required
            />
          </label>
          <button type="button" onClick={handleConfirmPayment} className="confirm-button">
            Confirm Payment
          </button>
        </form>
      </section>
    </div>
  );
};

export default PaymentMethodPage;
