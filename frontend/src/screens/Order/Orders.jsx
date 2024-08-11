import React, { useEffect, useState } from 'react';
import { getOrdersByUserId } from '../../services/OrderService'; // Import the correct service file
import { Link } from 'react-router-dom'; // For navigation
import axios from 'axios';
import bg from "../../productImages/addProduct.jpg";

const OrderTable = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const userId = 1; // temporary
        const response = await getOrdersByUserId(userId);
        setOrders(response); // Adjust based on the actual response structure
        setLoading(false);
      } catch (error) {
        console.error('There was an error fetching the orders!', error);
        setError(error);
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching orders: {error.message}</p>;

  return (
    <div className="container-fluid" style={{
      backgroundImage: `url(${bg})`, 
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "100vh",
      width: "100vw",
  }}>
    <br /><br />
    <div className="container ">
      <h2>Order History</h2>
      <hr />
      <table className='table table-striped table-info'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Status</th>
            <th>Total Amount</th>
            <th>Ordered On</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.status}</td>
              <td>${order.totalAmount.toFixed(2)}</td>
              <td>
               {order.createdOn}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4">
        <Link to="/" className="btn btn-secondary btn-lg" style={{
          borderRadius: '100px',
          backgroundColor:"darkmagenta"
        }}>
          Go Home
        </Link>
      </div>
    </div>
    </div>
  );
};

export default OrderTable;
