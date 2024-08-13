import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./screens/Home";
import { Flip, ToastContainer, Zoom } from "react-toastify";
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
import ShowAddress from "./screens/Address/ShowAddress.jsx";
import OrderTable from "./screens/Order/Orders.jsx";
import Cart from "./screens/Order/Cart.jsx";
import UsersList from "./screens/User/UserList.jsx";
import Login from "./screens/User/Login.jsx";
import Register from "./screens/User/Register.jsx";
import Logout from "./screens/User/Logout.jsx";
import Address from "./screens/Address/Address.jsx";
import PaymentGateway from "./screens/Order/PaymentGateway.jsx"
import OrderPlaced from "./screens/Order/OrderPlaced.jsx";
import EditSpecification from "./screens/Specification/EditSpecification.jsx";

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
        <Route path="/pickAddress/:id" element={<ShowAddress />} />  
        <Route path="/payment" element={<PaymentGateway />} />    
        <Route path="/orderPlaced" element={<OrderPlaced />} />   
        <Route path="/orders" element={<OrderTable />} />      
        <Route path="/cart" element={<Cart />} />   
        <Route path="/admin" element={<UsersList />} />  
        <Route path="/editSpecification/:id" element={<EditSpecification />} />  
        
      </Routes>
      <ToastContainer
position="bottom-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop
closeOnClick
rtl
pauseOnFocusLoss={false}
draggable
pauseOnHover
theme="colored"
transition= {Flip}
/>
    </div>
  );
}
//
export default App;
