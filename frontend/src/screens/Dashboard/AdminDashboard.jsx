import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Dashboard from "../../components/Dashboard";
import AdminSidebar from "../../components/AdminSidebar";

const AdminDashboard = () => {

  const navigate=useNavigate();

  const featuredProducts=()=>{
    navigate('/featuredProducts');
  }
  const addFeaturedProducts=()=>{
    navigate('/addFeaturedProducts');
  }
  const users=()=>{
    navigate('/users');
  }
  const categories=()=>{
    navigate('/category');
  }
  const addCategories=()=>{
    navigate('/addCategory');
  }
  const logout=()=>{
    navigate('/logout');
  }
  

  return (
    <div style={{ backgroundColor: "black", height: "100vh" }}>
      <AdminSidebar>
      <h1 style={{ color: "white" }}>Admin Dashboard</h1>
      <hr />
      <div className="container">
        <div className="d-flex justify-content-evenly" >
        <div className="mycard" onClick={featuredProducts}>
          Cover Image
        </div>
        <div className="mycard" onClick={addFeaturedProducts}>
          Add Cover Image
        </div>
        <div className="mycard" onClick={users}>
          Users
        </div>
        </div>
        <br /> <br />
        <div className="d-flex justify-content-evenly" >
        <div className="mycard" onClick={categories}>
          Categories
        </div>
        <div className="mycard" onClick={addCategories}>
          Add Categories
        </div>
        <div className="mycard-danger" onClick={logout}>
          Logout
        </div>
        </div>
      </div>
      </AdminSidebar>
    </div>
  );
};

export default AdminDashboard;
