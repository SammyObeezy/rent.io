import React, { useState } from 'react';
import './PaymentMethodPage.css';  // Import the CSS for styling

const PaymentMethodPage = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');

  const handlePaymentMethodChange = (method) => {
    setSelectedPaymentMethod(method);
  };

  return (
    <div className="payment-container">
      <h2>Choose Payment Method</h2>
      <div className="payment-methods">
        <button 
          className={`payment-method ${selectedPaymentMethod === 'bank' ? 'selected' : ''}`} 
          onClick={() => handlePaymentMethodChange('bank')}>
          Bank Transfer
        </button>
        <button 
          className={`payment-method ${selectedPaymentMethod === 'mpesa' ? 'selected' : ''}`} 
          onClick={() => handlePaymentMethodChange('mpesa')}>
          M-Pesa
        </button>
      </div>

      {selectedPaymentMethod && (
        <div className="payment-details">
          <h3>{selectedPaymentMethod === 'bank' ? 'Bank Transfer' : 'M-Pesa'} Details</h3>
          {selectedPaymentMethod === 'bank' ? (
            <form>
              <div>
                <label htmlFor="bank-account">Account Number:</label>
                <input type="text" id="bank-account" placeholder="Enter bank account number" required />
              </div>
              <div>
                <label htmlFor="bank-name">Bank Name:</label>
                <input type="text" id="bank-name" placeholder="Enter bank name" required />
              </div>
              <button type="submit" className="submit-btn">Submit Payment</button>
            </form>
          ) : (
            <form>
              <div>
                <label htmlFor="mpesa-phone">M-Pesa Phone Number:</label>
                <input type="text" id="mpesa-phone" placeholder="Enter M-Pesa phone number" required />
              </div>
              <div>
                <label htmlFor="mpesa-amount">Amount:</label>
                <input type="number" id="mpesa-amount" placeholder="Enter amount" required />
              </div>
              <button type="submit" className="submit-btn">Submit Payment</button>
            </form>
          )}
        </div>
      )}
    </div>
  );
};

export default PaymentMethodPage;
