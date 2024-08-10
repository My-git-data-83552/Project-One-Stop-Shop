import React, { useState, useEffect } from 'react';
import { getAllProducts } from '../services/ProductService';
import { getCoverImageByProductId } from '../services/ProductImage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { SaveOrders } from '../services/OrderService';
import { SaveOrderItems } from '../services/OrderItemsService';
import { toast } from 'react-toastify';

export default function Product() {
  const [products, setProducts] = useState([]);

  const [product, setProduct] = useState(null);
  const [productImages, setProductImages] = useState(null);
  const [error, setError] = useState("");
  const [coverImages, setCoverImages] = useState([]);
  const [specification, setSpecification] = useState({
    cpuManufacturer: "",
    cpuModel: "",
    cores: "",
    threads: "",
    speed: "",
    gpuManufacturer: "",
    gpuModel: "",
    size: "",
    resolution: "",
    refreshRate: "",
    touchScreen: false,
    description: "",
    ramSize: "",
    ramType: "",
    storageSize: "",
    storageType: "",
    color: "",
    os: "",
    wifi: "",
    bluetooth: "",
    weight: "",
    dimensions: "",
    ethernetPort: false,
    usbPorts: "",
    hdmiPorts: "",
    webcam: "",
    speakers: "",
    battery: "",
    warranty: "",
    sevenDayReplacement: false,
    freeDelivery: false,
    trustedSupplier: false,
  });
  const [orders, setOrders] = useState({
    status: "",
    totalAmount: 0,
    userId: "",
  });
  const [orderItems,setOrderItems]=useState({
    quantity:0,
    totalPrice:0,
    orderId:"",
    productId:"",
  })

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

  const addToCart = (product) => {
    if (!product || !product.id) {
      console.error("Invalid product data:", product);
      toast.error("Failed to add product to cart. Please try again.");
      return;
    }
  
    // Retrieve the cart from local storage or initialize an empty array
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
    // Ensure the cart is an array
    if (!Array.isArray(cart)) {
      cart = [];
    }
  
    // Check if the product already exists in the cart
    const existingProductIndex = cart.findIndex((item) => item.id === product.id);
  
    if (existingProductIndex !== -1) {
      // If the product exists, update the quantity
      cart[existingProductIndex].quantity += 1;
    } else {
      // If the product doesn't exist, add it to the cart
      cart.push({
        ...product,
        quantity: 1
      });
    }
  
    // Save the updated cart back to local storage
    localStorage.setItem('cart', JSON.stringify(cart));
  
    console.log('Product added to cart:', product);
    toast.success("Product added to cart!");
  };

  const handleAddToCart = () => {
    if (product) {
      addToCart(product); // Ensure 'product' is defined and valid
    } else {
      console.error("Product is undefined or null");
      toast.error("Cannot add an invalid product to cart.");
    }
  };


  const buyProduct = async () => {
    try {
      orders.totalAmount = product.price; //as single product buying so this
      orders.status = 0;
      orders.userId = 1;

      const data = await SaveOrders(orders);
      console.log('save orders',data);
      
      orderItems.quantity=1;
      orderItems.productId=product.id;
      orderItems.orderId=data.id;
      orderItems.totalPrice=product.price;

      const orderItemsData = await SaveOrderItems(orderItems);
      console.log('save orderItems ', orderItemsData);

      toast.success("Order Placed Thank you!");
      
    } catch (er) {
      toast.error("Something went wrong.Order Not Placed... try Again");
    }
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
                  {product.inventory === 0 && (
                    <div>
                      <p style={{ color: 'red' }}>Out of Stock</p>
                    </div>
                  )}
                  {product.inventory > 0 && (
                    <div>
                      {/* <Link to="/buy" className="btn btn-primary me-3" style={{borderRadius:"20px"}}>Buy Now</Link> */}
                     <button onClick={buyProduct}
                     className="btn btn-success me-3" style={{borderRadius:"20px"}}
                     >Buy Now</button>
                      {/* <Link to="/addToCart" className="btn btn-warning" style={{borderRadius:"20px"}}>Add to Cart</Link> */}
                      <button onClick={handleAddToCart}
                     className="btn btn-info me-3" style={{borderRadius:"20px"}}
                     >Add To Cart</button>
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
