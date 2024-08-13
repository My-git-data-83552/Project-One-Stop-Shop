import React, { useState } from "react";
import bg from "../productImages/addProduct.jpg";
import { Link } from "react-router-dom";
import SideBar from "../components/SideBar";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);


  return (
    <div
      className="container-fluid"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
        <SideBar>
      <div className="container">
        <br />
        <h2 style={{ fontSize: "30px" }}>
          <strong>Your Cart</strong>
        </h2>
        <hr />
        {cartItems.length > 0 ? (
          <table className="table table-success table-responsive">
            <thead>
              <tr>
                <th>Sr. No.</th>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total</th>
                <th>Actions</th> {/* New column for the remove button */}
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td> {/* Corrected Sr. No. column */}
                  <td>{item.productName}</td>
                  <td>{item.quantity}</td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>${(item.price * item.quantity).toFixed(2)}</td>
                  <td>
                    <button
                      className="btn btn-outline-danger btn-sm"
                      onClick={() => removeFromCart(item.id)}
                      style={{ borderRadius: "100px",
                        borderColor:'transparent'
                       }}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="warning">
            <p>
              <strong>Your cart is empty.</strong>
            </p>
          </div>
        )}
        <div className="d-flex justify-content-center">
        <Link className="btn btn-success mt-2 me-3" 
          style={{ width: "100px",
            borderRadius:"100px"
           }}>
            Buy All
          </Link>

          <Link className="btn btn-warning mt-2"
          to='/home' 
          style={{ width: "100px",
            borderRadius:"100px"
           }}>
            Home
          </Link>
        </div>
      </div>
      </SideBar>
    </div>
  );
};

export default Cart;
