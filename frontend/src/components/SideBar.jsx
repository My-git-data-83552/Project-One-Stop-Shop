import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../productImages/Logo.png"
import 'bootstrap/dist/css/bootstrap.min.css';

const SideBar = ({ children }) => {
  return (
    <div className="d-flex">
      <div className=" border" style={{ 
        width: '250px', 
        height: '100vh' , 
        backgroundColor:'beige',
        // opacity:'20%',
        borderRadius:'40px',
        borderColor:'black',
        borderColor:'darkblue'
       }}>

{/* <img src={logo} alt="" style={{width:'170px'}}/> <hr /> */}
         

      <div className="p-3" style={{color:'black'}}>
      <ul className="nav flex-column">
            <li className="nav-item">
                <Link to="/home" className="nav-link" style={{color:'black'}}>
                    <img src={logo} alt="" style={{width:'170px',opacity:'100%',backgroundColor:'transparent',borderRadius:'60px'}}/> <hr />
                </Link>
            </li>
            <div className='hoverEffect' style={{height:'60px',backgroundPosition:'center',borderColor:'black',
              borderRadius:'100px'
            }}>
                <li className="nav-item">
                    <Link to="/login" className="nav-link" style={{color:'black'}}>
                        Login 
                    </Link>
                </li>
            </div>
            <div className='hoverEffect' style={{height:'60px',backgroundPosition:'center',borderColor:'black',
              borderRadius:'100px'
            }}>
                <li className="nav-item">
                    <Link to="/products" className="nav-link" style={{color:'black'}}>
                        Products
                    </Link>
                </li>
            </div>
            <div className='hoverEffect' style={{height:'60px',backgroundPosition:'center',borderColor:'black',
              borderRadius:'100px'
            }}>
                <li className="nav-item">
                    <Link to="/category" className="nav-link" style={{color:'black'}}>
                        Category
                    </Link>
                </li>
            </div>
            <div className='hoverEffect' style={{height:'60px',backgroundPosition:'center',borderColor:'black',
              borderRadius:'100px'
            }}>
                <li className="nav-item">
                    <Link to="/address" className="nav-link" style={{color:'black'}}>
                        Address
                    </Link>
                </li>
            </div>
            <div className='hoverEffect' style={{height:'60px',backgroundPosition:'center',borderColor:'black',
              borderRadius:'100px'
            }}>
                <li className="nav-item">
                    <Link to="/featuredProducts" className="nav-link" style={{color:'black'}}>
                        Featured Products
                    </Link>
                </li>
            </div>
            <div className='hoverEffect' style={{height:'60px',backgroundPosition:'center',borderColor:'black',
              borderRadius:'100px'
            }}>
                <li className="nav-item">
                    <Link to="/logout" className="nav-link" style={{color:'black'}}>
                        Logout
                    </Link>
                </li>
            </div>
        </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow-1 p-3">
        {children}
      </div>
    </div>
  );
};

export default SideBar;
