import React, { useState, useEffect } from 'react';
import { getAllProducts } from '../services/ProductService';
import { getCoverImageByProductId } from '../services/ProductImage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

export default function Product() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');
  const [coverImages, setCoverImages] = useState({});

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getAllProducts();
        setProducts(data);

        const coverImages = await Promise.all(
          data.map(async (product) => {
            const coverImage = await getCoverImageByProductId(product.id);
            return { productId: product.id, coverImage };
          })
        );

        const coverImagesMap = coverImages.reduce((acc, { productId, coverImage }) => {
          acc[productId] = coverImage;
          return acc;
        }, {});

        setCoverImages(coverImagesMap);
      } catch (error) {
        setError('Error fetching products');
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="container">
      <h1 className="text-center my-4">Products available to Buy</h1>
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="container">
        <hr />
        <div className="row">
          {products.map((product) => (
            <div className="col-md-4" key={product.id}>
              <div className="card mb-4 shadow-lg p-3 mb-5 bg-body-tertiary rounded" style={{ backgroundColor: 'white' }}>
                <Link to={`/product/${product.id}`}>
                  <img
                    src={coverImages[product.id] || ''}
                    className="card-img-top"
                    alt={product.productName}
                    style={{height:'300px'}}
                  />
                </Link>
                <div className="card-body">
                  <h5 className="card-title"> {product.productName}</h5>
                  <p className="card-text"><span>Brand : </span>{product.brand}</p>
                  <p className="card-text text-muted">₹{product.price} <span> only</span></p>
                  {product.quantity === 0 && (
                    <div>
                      <p style={{ color: 'red' }}>Out of Stock</p>
                    </div>
                  )}
                  {product.quantity > 0 && (
                    <div>
                      <Link to="/buy" className="btn btn-primary me-3" style={{borderRadius:"20px"}}>Buy Now</Link>
                      <Link to="/addToCart" className="btn btn-warning" style={{borderRadius:"20px"}}>Add to Cart</Link>
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
