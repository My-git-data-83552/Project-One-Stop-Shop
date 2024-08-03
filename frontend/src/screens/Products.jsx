import { useEffect, useState } from "react";
import { getAllProducts } from "../services/ProductService";
import { toast } from "react-toastify";
import bg from "../productImages/addProduct.jpg";
import { Link } from "react-router-dom";
import Navigation_bar from "../components/Navigation_bar"

export const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getAllProducts();
      setProducts(data);
      try {
        const data = await getAllProducts();
        setProducts(data);
      } catch (error) {
        console.log("Could not fetch products  ", error);
        toast.error("Could not fetch products");
      }
    };
    fetchProducts();
  }, []);

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
      <Navigation_bar/>
        <h2 style={{padding:'10px'}}>Products Available</h2>
        <div className="container">
        <Link to='/addProduct' className="btn btn-dark mt-3 mb-3 d-flex justify-content-around" style={{backgroundColor:''}}>Add New Product</Link>
      <hr />     
      <table className="table col-6" style={{backgroundColor: 'rgba(210,130,240, 0.3)'}}>
        <thead>
            <tr>
          <th>Sr. No.</th>
          <th>Product Name</th>
          <th>Quantity</th>
          <th>Category Name</th>
          <th>Price</th>
          <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.productName}</td>
              <td>{product.quantity}</td>
              <td>{product.category.name}</td>
              <td>{product.price}</td>
              <td>
                <Link to={`/editProduct/${product.id}`} className="btn btn-warning me-3">Edit</Link>
                <Link to={`/deleteProduct/${product.id}`} className="btn btn-danger">Delete</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};
