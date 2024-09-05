import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Payment.css';

const Payment = () => {
  const location = useLocation();
  const { total } = location.state;
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvc, setCvc] = useState('');

  const handlePayment = (event) => {
    event.preventDefault();
    // Add your payment processing logic here
    alert('Payment processed successfully!');
  };

  return (
    <div className="payment-container">
      <h2>Payment</h2>
      <p>Total Amount: ${total.toFixed(2)}</p>
      <form onSubmit={handlePayment}>
        <label htmlFor="cardNumber">Card Number:</label>
        <input
          type="text" // Changed to 'text' for card number to allow formatting
          id="cardNumber"
          name="cardNumber"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          required
          placeholder="1234 5678 9012 3456" // Example format
        /><br />
        <label htmlFor="expiryDate">Expiry Date:</label>
        <input
          type="text" // Keep as 'text' for date formatting
          id="expiryDate"
          name="expiryDate"
          value={expiryDate}
          onChange={(e) => setExpiryDate(e.target.value)}
          required
          placeholder="MM/YY" // Example format
        /><br />
        <label htmlFor="cvc">CVC:</label>
        <input
          type="text" // Keep as 'text' for CVC formatting
          id="cvc"
          name="cvc"
          value={cvc}
          onChange={(e) => setCvc(e.target.value)}
          required
          placeholder="123" // Example format
        /><br />
        <button type="submit">Submit Payment</button>
      </form>
    </div>
  );
};

export default Payment;
