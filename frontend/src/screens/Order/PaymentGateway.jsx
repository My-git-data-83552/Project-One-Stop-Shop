import React, { useEffect } from 'react';
import bg from "../../productImages/addProduct.jpg";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { SaveOrders } from '../../services/OrderService';
import { SaveOrderItems } from '../../services/OrderItemsService';

const PaymentGateway = () => {
  const navigate = useNavigate();

  const location =useLocation();

  const { orderDetails } = location.state; // Retrieve the passed order details
  console.log(orderDetails);

  const orderPlaced=async()=>{
    try{
      const data = await SaveOrders(orderDetails.orders);

      orderDetails.orderItems.orderId = data.id;

      // Save order items
      await SaveOrderItems(orderDetails.orderItems);


      toast.success('!!!Payment Successfull. Order Placed');
      navigate('/orderPlaced');
      
    }

    catch(error){
      toast.error('...Payment failed');
      // navigate('/home');
    }
  }

  return (
    <div className="payment-gateway-container" 
    style={{
      backgroundImage: `url(${bg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "100vh",
      width: "100vw",
    }}
    >
      <h1>Payment Gateway</h1>
      <p>You are being redirected to a secure payment gateway...</p>
     <button onClick={orderPlaced} className='btn btn-outline-dark'>Payment Done</button> 
    </div>
  );
};

export default PaymentGateway;
