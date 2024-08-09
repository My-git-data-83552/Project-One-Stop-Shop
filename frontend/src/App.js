import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import Login from "./screens/Login";
import Register from "./screens/Register";
import Home from "./screens/Home";
import Logout from "./screens/Logout";
import Address from "./screens/Address";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddProduct from "./screens/Product/AddProduct";
import AddCategory from "./screens/Category/AddCategory.jsx";
import CategoryList from "./components/Categories.jsx";
import Categories from "./screens/Category/Category.jsx";
import EditCategory from "./screens/Category/EditCategory.jsx";
import { Products } from "./screens/Product/Products.jsx";
import { EditProduct } from "./screens/Product/EditProduct.jsx";
import { AddFeaturedProducts } from "./screens/FeaturedProducts/AddFeaturedProducts.jsx";
import FeaturedProducts from "./screens/FeaturedProducts/FeaturedProducts.jsx";
import AddSpecification from "./screens/Specification/AddSpecification.jsx";
import ProductDetails from "./screens/Product/ProductDetails.jsx";
import {AddProductImage} from "./screens/ProductImage/AddProductImage.jsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<Login />} />
        <Route path="login" element={<Login />} />
        <Route path="home" element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="logout" element={<Logout />} />
        <Route path="address" element={<Address />} />
        <Route path="/category" element={<Categories />} />
        <Route path="/addCategory" element={<AddCategory />} />
        <Route path="/categories" element={<CategoryList />} />
        <Route path="/editCategory/:id" element={<EditCategory />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="addProduct" element={<AddProduct />} />      
        <Route path="/products" element={<Products />} />
        <Route path="/editProduct/:id" element={<EditProduct />} />
        <Route path="/addFeaturedProducts" element={<AddFeaturedProducts />} />
        <Route path="/featuredProducts" element={<FeaturedProducts />} />
        <Route path="/addSpecification" element={<AddSpecification />} />    
        <Route path="/AddProductImage/:id" element={<AddProductImage />} />    
      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Zoom}
      />
    </div>
  );
}
//
export default App;
