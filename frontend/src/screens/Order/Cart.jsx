import React, { useEffect, useState } from 'react';
import { getCartItems } from '../../services/CartService';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const userId=1;

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const items = await getCartItems(userId);
        setCartItems(items);
        console.log('cartItems - ',cartItems);
      } catch (err) {
        setError('Failed to fetch cart items');
      } finally {
        setLoading(false);
      }
    };

    fetchCartItems();
  }, [userId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Cart Items</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.productName}</td>
                <td>{item.quantity}</td>
                <td>${item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Cart;
