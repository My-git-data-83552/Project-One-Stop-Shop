import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const PaymentGateway = () => {
  const navigate = useNavigate();


  return (
    <div className="payment-gateway-container">
      <h1>Payment Gateway</h1>
      <p>You are being redirected to a secure payment gateway...</p>
      <Link to='/orderPlaced' className='btn btn-success'>Payment Done</Link>
    </div>
  );
};

export default PaymentGateway;
