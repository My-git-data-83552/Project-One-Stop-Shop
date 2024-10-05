import React, { useState, useEffect } from "react";
import { getAllProducts } from "../services/ProductService";
import { getCoverImageByProductId } from "../services/ProductImage";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import AddToCartButton from "./AddToCartButton";

export default function Product() {
  const [products, setProducts] = useState([]);
  const userId=1;
  const [error, setError] = useState("");
  const [coverImages, setCoverImages] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getAllProducts();
      
        // Manually filter products where deleted is false
        const filteredProducts = data.filter(product => product.deleted === false);
        setProducts(filteredProducts);

        const coverImages = await Promise.all(
          data.map(async (product) => {
            const coverImage = await getCoverImageByProductId(product.id);
            return { productId: product.id, coverImage };
          })
        );

        const coverImagesMap = coverImages.reduce(
          (acc, { productId, coverImage }) => {
            acc[productId] = coverImage;
            return acc;
          },
          {}
        );

        setCoverImages(coverImagesMap);
      } catch (error) {
        setError("Error fetching products");
      }
    };

    fetchProducts();
  }, []);

  const buyProduct = (id) => {
    navigate(`/pickAddress/${id}`);
  };

  return (
    <div className="container">
      <h1 className="text-center my-4">Products available to Buy</h1>
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="container">
        <hr />
        <div className="row">
          {products.map((product) => (
            <div className="col-md-4" key={product.id}>
              <div
                className="card mb-4 shadow-lg p-3 mb-5 bg-body-tertiary rounded"
                style={{ backgroundColor: "white" }}
              >
                <Link to={`/product/${product.id}`}>
                  <img
                    src={coverImages[product.id] || ""}
                    className="card-img-top"
                    alt={product.productName}
                    style={{ height: "300px" }}
                  />
                </Link>
                <div className="card-body" style={{
                  height:'14rem',
                  backgroundColor:'whitesmoke',
                }}>
                  <h5 className="card-title"> {product.productName}</h5>
                  <p className="card-text">
                    <span>Brand: </span>
                    {product.brand}
                  </p>
                  <p className="card-text text-muted">
                    ₹{product.price} <span> only</span>
                  </p>
                  {product.inventory === 0 && (
                    <div>
                      <strong><p style={{ color: "red" }}>Out of Stock</p></strong>
                    </div>
                  )}
                  {product.inventory > 0 && (
                  
                    <div>
                      <button
                        onClick={() => buyProduct(product.id)} 
                        className="button-blue me-3" style={{
                          width:'100px',
                        }}>
                        Buy Now
                      </button>
                      
                      <AddToCartButton  
                    productId={product.id}
                    userId={userId}
                    quantity={1}/>

                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
