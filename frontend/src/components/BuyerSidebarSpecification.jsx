import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../productImages/Logo.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import bg from '../productImages/sidebar3.jpeg'

const BuyerSidebarSpecification = ({ children }) => {
  return (
    <div className="d-flex">
     <div
        className="border"
        style={{
          width: '250px',
          height: '100vh',
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "fixed",  // Ensures the sidebar is fixed to the left
          left: "0",          // Aligns it to the left edge
          top: "0",           // Aligns it to the top edge
          borderColor: 'darkblue',
          zIndex: 1000,       // Ensures it stays above other content
        }}
      >

{/* <img src={logo} alt="" style={{width:'170px'}}/> <hr /> */}
         

      <div className="p-3" style={{color:'white',fontSize:'120%'}}>
      <ul className="nav flex-column">
            <li className="nav-item">
                <Link to="/home" className="nav-link" style={{color:'white',fontSize:'120%'}}>
                    <img src={logo} alt="" style={{width:'170px',opacity:'100%',backgroundColor:'transparent',borderRadius:'60px'}}/> <hr />
                </Link>
            </li>
            <div className='hoverEffect' style={{height:'60px',backgroundPosition:'center',borderColor:'black',
              borderRadius:'100px'
            }}>
                <li className="nav-item">
                    <Link to="/login" className="nav-link" style={{color:'white',fontSize:'120%'}}>
                        <strong>Login</strong> 
                    </Link>
                </li>
            </div>
            {/* <div className='hoverEffect' style={{height:'60px',backgroundPosition:'center',borderColor:'black',
              borderRadius:'100px'
            }}>
                <li className="nav-item">
                    <Link to="/products" className="nav-link" style={{color:'white',fontSize:'120%'}}>
                        <strong>Products</strong>
                    </Link>
                </li>
            </div> */}
            {/* <div className='hoverEffect' style={{height:'60px',backgroundPosition:'center',borderColor:'black',
              borderRadius:'100px'
            }}>
                <li className="nav-item">
                    <Link to="/category" className="nav-link" style={{color:'white',fontSize:'120%'}}>
                        <strong>Category</strong>
                    </Link>
                </li>
            </div> */}
            <div className='hoverEffect' style={{height:'60px',backgroundPosition:'center',borderColor:'black',
              borderRadius:'100px'
            }}>
                <li className="nav-item">
                    <Link to="/address" className="nav-link" style={{color:'white',fontSize:'120%'}}>
                        <strong>Address</strong>
                    </Link>
                </li>
            </div>
            <div className='hoverEffect' style={{height:'60px',backgroundPosition:'center',borderColor:'black',
              borderRadius:'100px'
            }}>
                <li className="nav-item">
                    <Link to="/orders" className="nav-link" style={{color:'white',fontSize:'120%'}}>
                        <strong>Your Orders</strong>
                    </Link>
                </li>
                
            </div>

            <div className='hoverEffect' style={{height:'60px',backgroundPosition:'center',borderColor:'black',
              borderRadius:'100px'
            }}>
                <li className="nav-item">
                    <Link to="/cart" className="nav-link" style={{color:'white',fontSize:'120%'}}>
                        <strong>View Cart</strong>
                    </Link>
                </li>
                
            </div>

            <div className='hoverEffect' style={{height:'60px',backgroundPosition:'center',borderColor:'black',
              borderRadius:'100px'
            }}>
                <li className="nav-item">
                    <Link to="/logout" className="nav-link" style={{color:'white',fontSize:'120%'}}>
                        <strong>Logout</strong>
                    </Link>
                </li>
            </div>
        </ul>
          <hr />
         
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow-1 p-3">
        {children}
      </div>
    </div>
  );
};

export default BuyerSidebarSpecification;
