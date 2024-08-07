import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import bg from "../../productImages/addProduct.jpg";
import Navigation_bar from "../../components/Navigation_bar";
import { editProduct, getProductById } from "../../services/ProductService";
import { getCategories } from "../../services/CategoryService";
import { toast } from "react-toastify";

export const EditProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({
    id: "", // Ensure this matches the backend field name
    productName: "",
    description: "",
    price: "",
    quantity: "",
    category: {
      id: "",
      name: "",
    },
  });
  const [categories, setCategories] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await getProductById(id);
        // Ensure the id is set in the product state
        setProduct({
          id: response.id,
          productName: response.productName,
          description: response.description,
          price: response.price,
          quantity: response.quantity,
          category: response.category,
        });
      } catch (error) {
        console.error("Error fetching product:", error.response ? error.response.data : error.message);
      }
    };
    fetchProduct();
  }, [id]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await getCategories();
        setCategories(response);
      } catch (error) {
        console.error("Error fetching categories:", error.response ? error.response.data : error.message);
      }
    };
    fetchCategories();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => {
      if (name === "categoryId") {
        return { ...prevProduct, category: { ...prevProduct.category, id: value } };
      }
      return { ...prevProduct, [name]: value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const productToUpdate = {
        id: product.id, // Ensure the ID is included in the payload
        productName: product.productName,
        description: product.description,
        price: product.price,
        quantity: product.quantity,
        category: { id: product.category.id },
      };

      console.log("Product data to be updated:", productToUpdate);

      await editProduct(id, productToUpdate);
      toast.success("Data Updated Successfully!!!");
      navigate("/products");
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
      <Navigation_bar />
      <h1 className="mb-4">Edit Product</h1>
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="productId">Product ID</label>
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
                readOnly
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
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="form-control mb-3"
                id="description"
                name="description"
                value={product.description || ""}
                onChange={handleChange}
                placeholder="Description"
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
              <label htmlFor="quantity">Quantity</label>
              <input
                type="number"
                className="form-control mb-3"
                id="quantity"
                name="quantity"
                value={product.quantity || ""}
                onChange={handleChange}
                placeholder="Quantity"
                style={{
                  backgroundColor: "transparent",
                  borderColor: "lightgray",
                }}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="categoryId">Category</label>
              <select
                className="form-select mb-3"
                id="categoryId"
                name="categoryId"
                value={product.category.id || ""}
                onChange={handleChange}
                style={{
                  backgroundColor: "transparent",
                  borderColor: "lightgray",
                }}
                required
              >
                <option value="">Select Category</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              className="btn btn-primary mt-3"
              style={{borderRadius:'20px'}}
            >
              Edit Product
            </button>
            <Link
              to="/Products"
              className="btn btn-warning ms-5 mt-3"
              style={{borderRadius:'20px'}}
            >
              Go Back
            </Link>
          </form>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
};
