import { useEffect, useState } from "react";
import { deleteProduct, getAllProducts } from "../../services/ProductService";
import { toast } from "react-toastify";
import bg from "../../productImages/addProduct.jpg";
import { Link } from "react-router-dom";
import SideBar from "../../components/SideBar";

export const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
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
      <SideBar>
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
              <th>Brand</th>
              <th>Inventory</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.productName}</td>
                <td>{product.brand}</td>
                <td>{product.inventory}</td>                
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
      </SideBar>
    </div>
  );
};
