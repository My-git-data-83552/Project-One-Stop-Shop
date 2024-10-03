import { useEffect, useState } from "react";
import { deleteProduct, getAllProducts, getProductByUserId } from "../../services/ProductService";
import { toast } from "react-toastify";
import bg from "../../productImages/addProduct.jpg";
import { Link } from "react-router-dom";
import SellerSideBar from "../../components/SellerSidebar";

export const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // const data = await getAllProducts();
        const data=await getProductByUserId();
        // If the 'deleted' flag is coming from the backend, no need to initialize it
        setProducts(data);
      } catch (error) {
        toast.error("Could not fetch products");
      }
    };
    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteProduct(id);
      setProducts(products.map((product) =>
        product.id === id ? { ...product, deleted: true } : product
      ));
      toast.success("Product deletion successful!");
    } catch (error) {
      toast.error('Product deletion failed!!!');
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
      <SellerSideBar>
        <h2 style={{ padding: "10px" }}>Products Available</h2>
        <div className="container">
          <Link
            to="/addProduct"
            className="button-blue mt-3 mb-3 d-flex justify-content-around"
            style={{ borderRadius: '100px' }}
          >
            Add New Product
          </Link>
          <hr />
          <table
            className="table table-responsive table-success col-6"
            
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
              {products
                .filter((product) => !product.deleted) // Ensure only non-deleted products are displayed
                .map((product, index) => (
                  <tr key={product.id}>
                    <td>{index + 1}</td>
                    <td>{product.productName}</td>
                    <td>{product.brand}</td>
                    <td>{product.inventory}</td>
                    <td>{product.price}</td>
                    <td>
                      <Link
                        to={`/editProduct/${product.id}`}
                        className="button-blue me-3"
                        style={{ width: '100px',
                          height:'30px',
                          lineHeight:'30px',
                         }}
                      >
                        Edit
                      </Link>
                      <Link
                        onClick={() => handleDelete(product.id)}
                        className="button-gold"
                        style={{ width: '100px',
                          
                          height:'30px',
                          lineHeight:'30px',
                         }}
                      >
                        Delete
                      </Link>
                      {/* <Link
                        to={`/product/${product.id}`}
                        className="button-gold ms-3"
                        style={{ width: '100px',
                          height:'30px',
                          lineHeight:'30px',
                         }}
                      >
                        View
                      </Link> */}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </SellerSideBar>
    </div>
  );
};
