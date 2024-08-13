import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import bg from "../../productImages/addProduct.jpg";
import { editProduct, getProductById } from "../../services/ProductService";
import { toast } from "react-toastify";
import SideBar from "../../components/SideBar";

export const EditProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({
    id: "",
    productName: "",
    brand: "",
    price: "",
    inventory: "",
    specificationId:"",
    categoryId:"",

  });
  // const [product, setProduct] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await getProductById(id);
        console.log('response - ',response);
        setProduct(response);

      } catch (error) {
        console.error("Error fetching product:", error.response ? error.response.data : error.message);
      }
    };
    fetchProduct();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('product obj - ',product);
      const productToUpdate = {
        id: product.id,
        productName: product.productName,
        brand: product.brand,
        price: product.price,
        inventory: product.inventory,
        specificationId:product.specification.id,
        categoryId:product.category.id,
      };
  
      console.log("Product data to be updated:", productToUpdate);
  
      await editProduct(id, productToUpdate);
      toast.success("Data Updated Successfully!!!");
  
      // Navigate to the EditSpecification page and pass the product object in state
      navigate(`/editSpecification/${product.specification.id}`, {
        state: { product: productToUpdate },
      });
    } catch (error) {
      console.error("Error updating product:", error.response ? error.response.data : error.message);
      toast.error("Could not update the product...");
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
        <h1 className="mb-4">Edit Product</h1>
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control mb-3"
                  id="productId"
                  name="productId"
                  value={product.id}
                  onChange={handleChange}
                  placeholder="Product ID"
                  style={{
                    backgroundColor: "transparent",
                    borderColor: "lightgray",
                  }}
                  hidden
                />
              </div>
              <div className="form-group">
                <label htmlFor="productName">Product Name</label>
                <input
                  type="text"
                  className="form-control mb-3"
                  id="productName"
                  name="productName"
                  value={product.productName || ""}
                  onChange={handleChange}
                  placeholder="Product Name"
                  style={{
                    backgroundColor: "transparent",
                    borderColor: "lightgray",
                  }}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="brand">brand</label>
                <input
                  type="text"
                  className="form-control mb-3"
                  id="brand"
                  name="brand"
                  value={product.brand || ""}
                  onChange={handleChange}
                  placeholder="brand"
                  style={{
                    backgroundColor: "transparent",
                    borderColor: "lightgray",
                  }}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="price">Price</label>
                <input
                  type="number"
                  className="form-control mb-3"
                  id="price"
                  name="price"
                  value={product.price || ""}
                  onChange={handleChange}
                  placeholder="Price"
                  style={{
                    backgroundColor: "transparent",
                    borderColor: "lightgray",
                  }}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="inventory">inventory</label>
                <input
                  type="number"
                  className="form-control mb-3"
                  id="inventory"
                  name="inventory"
                  value={product.inventory || ""}
                  onChange={handleChange}
                  placeholder="inventory"
                  style={{
                    backgroundColor: "transparent",
                    borderColor: "lightgray",
                  }}
                  required
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary mt-3"
                style={{ borderRadius: "20px" }}
              >
                Edit Specs
              </button>
              <Link
                to="/Products"
                className="btn btn-warning ms-5 mt-3"
                style={{ borderRadius: "20px" }}
              >
                Go Back
              </Link>
            </form>
          </div>
          <div className="col-md-3"></div>
        </div>
      </SideBar>
    </div>
  );
};
