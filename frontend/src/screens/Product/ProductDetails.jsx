import NavBar from "../../components/Navigation_bar";

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { getProductById } from "../../services/ProductService";
import ProductImages from "../../components/ProductImages";
import { getAllCoverImages, getCoverImageByProductId } from "../../services/ProductImage";
import SideBar from "../../components/SideBar";
import image from "../../productImages/laptop4.jpg";
import bg from "../../productImages/ProductDetails.jpg";

import {
  getAllSpecifications,
  getSpecificationById,
} from "../../services/SpecificationService";
import { SaveOrders } from "../../services/OrderService";
import { SaveOrderItems } from "../../services/OrderItemsService";
import { toast } from "react-toastify";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [productImage, setProductImage] = useState(null);
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

  // const [specification, setSpecification]=useState([]);
  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const data = await getProductById(id);
        setProduct(data);
        console.log("Product data:", data);

        if (data?.specification?.id) {
          const specificationData = await getSpecificationById(
            data.specification.id
          );
          setSpecification(specificationData);
          console.log("Specification data:", specificationData);
        }
        if (data?.productImage?.id) {
          const productImages=await getCoverImageByProductId(product.id);
          setProductImage(productImages.filepath);
        }

        
      } catch (error) {
        setError("Error fetching product or specification details");
        console.error(error);
      }
    };

    fetchProductDetails();
  }, [id]);
  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }

  if (!product) {
    return <div>Loading...</div>;
  }

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
        <br /><br /><br /><br />
        <div className="container">
          {/* <h1 className="text-center my-4">{product.productName}</h1> */}
          <div className="row">
            <div className="col-6" style={{ height: "300px" }}>
              <img
                src={`${product.coverImageFileName}`}
                // src={image}
                className="img-fluid"
                alt={product.coverImageFileName}
                style={{ height: "450px",
                  width:"450px",
                  borderRadius:"100px",
                  borderWidth:'10px',
                  borderColor:'black'
                 }}
              />
              {/* <ProductImages /> */}
            </div>
            <div
              className="col shadow-lg"
              style={{
                backgroundColor: "white",
                padding: "20px",
                borderRadius: "50px",
              }}
            >
              <h2>Product Details</h2>
              <hr />
              <div className="d-flex justify-content-center">
                <table className="table table-transparent">
                  <tbody className="">
                    <tr>
                      <td className="d-flex" style={{ fontSize: "30px" }}>
                        <i>Name</i>
                      </td>
                      <td style={{ fontSize: "30px" }}>
                        {product.productName}
                      </td>
                    </tr>
                    <tr>
                      <td className="d-flex" style={{ fontSize: "30px" }}>
                        <i>Brand</i>
                      </td>
                      <td style={{ fontSize: "30px", position: "relative" }}>
                        {product.brand}
                      </td>
                    </tr>
                    <tr>
                      <td className="d-flex" style={{ fontSize: "30px" }}>
                        <i>Price</i>{" "}
                        <p style={{ fontSize: "40px", color: "transparent" }}>
                          .
                        </p>
                      </td>
                      <td style={{ fontSize: "40px", color: "darkred" }}>
                        ₹ {product.price} /-
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {product.inventory === 0 && (
                    <div>
                      <p style={{ color: 'red' }}>Out of Stock</p>
                    </div>
                  )}
                  {product.inventory > 0 && (
              <div className="d-grid">
                <button
                  className="btn btn-warning mb-3"
                  onClick={handleAddToCart}
                  style={{
                    borderRadius: "100px",
                  }}
                >
                  Add To Cart
                </button>
                <button
                  className="btn btn-success"
                  onClick={buyProduct}
                  style={{
                    borderRadius: "100px",
                  }}
                >
                  Buy Now
                </button>
              </div>
                  )}
            </div>
          </div>
          <hr />
        </div>
      </SideBar>
    </div>
  );
};

export default ProductDetails;
