import React from 'react';
import { Link } from 'react-router-dom';
import checkmark from '../../productImages/checkMark.jpeg';

const OrderPlaced = () => {
  return (
    <div>
        <br /><br />
        <div>
            <img src={checkmark} alt="" style={{
                width:'200px'
            }} />
        </div>
    <div className="container text-center mt-5">
      <div className="alert alert-success" role="alert" style={{
        borderRadius:'50px'
      }}>
        <h1 className="display-4"><strong>Order Placed Successfully!</strong></h1>
        <p style={{
            fontSize:'24px'
        }}>Thank you for your purchase. Your order has been placed and is being processed.</p>
        <hr />
        <p className="mb-0">We will send you an email confirmation shortly.</p>
      </div>
      
      <div className="mt-4" >
        <Link to="/home" className="btn btn-primary btn-lg mx-2" style={{
            borderRadius:'100px'
        }}>
          Continue Shopping
        </Link>
        <Link to="/orders" className="btn btn-dark btn-lg mx-2" style={{
            borderRadius:'100px'
        }}>
          View Your Orders
        </Link>
      </div>
    </div>
    </div>
  );
};

export default OrderPlaced;
