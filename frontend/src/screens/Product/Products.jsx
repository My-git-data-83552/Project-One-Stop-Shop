import { useEffect, useState } from "react";
import { deleteProduct, getAllProducts } from "../../services/ProductService";
import { toast } from "react-toastify";
import bg from "../../productImages/addProduct.jpg";
import { Link, useNavigate } from "react-router-dom";
import Navigation_bar from "../../components/Navigation_bar";

export const Products = () => {
  const [products, setProducts] = useState([]);
  const nav = useNavigate();

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

  const handleDelete = async (id) => {
    try {
      await deleteProduct(id);
      setProducts(products.filter((products) => products.id !== null));
      window.location.reload();
      toast.success("Deletion Successful!!!");
    } catch (error) {
      toast.error("Deletion Failed...");
      window.location.reload();
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
      <Navigation_bar />
      <h2 style={{ padding: "10px" }}>Products Available</h2>
      <div className="container">
        <Link
          to="/addProduct"
          className="btn btn-dark mt-3 mb-3 d-flex justify-content-around"
          style={{borderRadius:'100px'}}
        >
          Add New Product
        </Link>
        <hr />
        <table
          className="table col-6"
          style={{ backgroundColor: "rgba(210,130,240, 0.3)" }}
        >
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
                  <Link
                    to={`/editProduct/${product.id}`}
                    className="btn btn-warning me-3" style={{borderRadius:'100px'}}
                  >
                    Edit
                  </Link>
                  <Link
                    onClick={() => handleDelete(product.id)}
                    className="btn btn-danger" style={{borderRadius:'100px'}}
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
