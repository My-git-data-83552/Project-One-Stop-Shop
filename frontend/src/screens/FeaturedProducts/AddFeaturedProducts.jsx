// src/components/AddFeaturedProducts.jsx

import React, { useState } from "react";
import { AddFeaturedProduct } from "../../services/FeaturedProductsService";
import { toast } from "react-toastify";
import bg from '../../productImages/addProduct.jpg';
import { Link } from "react-router-dom";
import AdminSidebar from "../../components/AdminSidebar";

export const AddFeaturedProducts = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", title);
    formData.append("description", description);

    try {
      await AddFeaturedProduct(formData);
      toast.success("Featured Product Added Successfully!!!");
      // Reset form fields
      setTitle("");
      setDescription("");
      setFile(null);
    } catch (error) {
      toast.error("Could not Add Featured Product...");
    }
  };

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
      <AdminSidebar>
      <br />
      <h1 className="mb-4">Add Featured Product Details</h1>
      <div className="container mt-3">
        <div className="row justify-content-center align-items-center">
          <form className="col-6" onSubmit={handleSubmit}>
            <label className="d-flex" htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control mb-4"
              onChange={(e) => setTitle(e.target.value)}
              style={{backgroundColor:'transparent',borderColor:'gray'}}
              id="title"
              name="title"
              value={title}
              required
            />
            <label className="d-flex" htmlFor="description">Description</label>
            <textarea
              type="text"
              className="form-control mb-4"
              id="description"
              name="description"
              onChange={(e) => setDescription(e.target.value)}
              style={{backgroundColor:'transparent',borderColor:'gray'}}
              value={description}
              required
            />
            <input
              type="file"
              className="form-control mb-4"
              id="file"
              onChange={handleChange}
              required
              style={{backgroundColor:'transparent',borderColor:'gray'}}
            />
            <div className="d-grid">
              <input
                type="submit"
                className="btn btn-outline-success mb-4 btn-lg" style={{borderRadius:'100px'}}
              />
              <Link className="btn btn-outline-primary mb-4 btn-lg" style={{borderRadius:'100px'}} to='/home'>Go Back</Link>
              
            </div>
          </form>
        </div>
      </div></AdminSidebar>
    </div>
  );
};
