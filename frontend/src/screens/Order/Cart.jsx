import React, { useEffect, useState } from "react";
import { getCartItems, purchaseAllProducts } from "../../services/CartService";
import bg from "../../productImages/addProduct.jpg";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const userId = 1; // Replace with actual user ID
  const addressId = 1; // Replace with actual address ID
  // const history = useHistory();
  const navigate=useNavigate();

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const items = await getCartItems(userId);
        console.log("items - ", items);
        setCartItems(items.cartProducts);
      } catch (err) {
        setError("Failed to fetch cart items");
      } finally {
        setLoading(false);
      }
    };

    fetchCartItems();
    console.log("cartItems - ", cartItems);
  }, []);

  const handleBuyAll = async () => {
    try {
      const result = await purchaseAllProducts(userId, addressId);
      toast.success('Purchase successful!');
      // You can redirect to a confirmation page or another page
      // history.push('/confirmation');
      navigate('/home');

    } catch (err) {
      toast.error('Purchase failed. Please try again.');
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container-fluid" style={{
      backgroundImage: `url(${bg})`, 
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "100vh",
      width: "100vw",
  }}>
    <div className="container">
    <br />
      <h2 className="mb-4">Cart Items</h2>
      <hr />

      {cartItems.length === 0 ? (
        <h4>Your cart is empty</h4>
      ) : (
        <table className="table table-striped container">
          <thead>
            <tr>
              <th>Sr. No</th>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.product.productName}</td>
                <td>{item.quantity}</td>
                <td>₹ {item.product.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <button 
        className="btn btn-danger btn-lg mt-4" 
        style={{ width: '400px' }}
        onClick={handleBuyAll}
      >
        Buy ALL
      </button><br />
      <Link to='/home'
        className="btn btn-light btn-lg mt-4" 
        style={{ width: '400px' }}
      >
        Go Back
      </Link>
      </div>
    </div>
  );
};

export default Cart;
