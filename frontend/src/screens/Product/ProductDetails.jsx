import NavBar from "../../components/Navigation_bar";

import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { getProductById } from "../../services/ProductService";
import ProductImages from "../../components/ProductImages";
import {
  getAllCoverImages,
  getCoverImageByProductId,
} from "../../services/ProductImage";
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
  const [coverImage, setCoverImage] = useState(null);
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
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const data = await getProductById(id);
        setProduct(data);

        if (data?.specification?.id) {
          const specificationData = await getSpecificationById(
            data.specification.id
          );
          setSpecification(specificationData);
          console.log(specification);
        }

        if (data?.id) {
          console.log('product id - ',id)
          const productImages = await getCoverImageByProductId(id);
          setCoverImage(productImages);
        }
      } catch (error) {
        setError("Error fetching product or specification details");
        console.error("Error fetching details:", error);
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
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Ensure the cart is an array
    if (!Array.isArray(cart)) {
      cart = [];
    }

    // Check if the product already exists in the cart
    const existingProductIndex = cart.findIndex(
      (item) => item.id === product.id
    );

    if (existingProductIndex !== -1) {
      // If the product exists, update the quantity
      cart[existingProductIndex].quantity += 1;
    } else {
      // If the product doesn't exist, add it to the cart
      cart.push({
        ...product,
        quantity: 1,
      });
    }

    // Save the updated cart back to local storage
    localStorage.setItem("cart", JSON.stringify(cart));

    // console.log("Product added to cart:", product);
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

  const buyProduct = () => {
    navigate(`/pickAddress/${product.id}`);
  };

  return (
    <div
      className="container-fluid"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        // height: "100vh",
        // width: "100vw",
      }}
    >
      <SideBar>
        <br />
        <br />
        <br />
        <br />
        <div className="container">
          {/* <h1 className="text-center my-4">{product.productName}</h1> */}
          <div className="row">
            <div className="col-6" style={{ height: "300px" }}>
              <img
                src={coverImage || "defaultImagePath.jpg"} // Provide a default image path in case productImage is undefined
                className="img-fluid"
                alt={coverImage || "Product Image"} // Use a fallback alt text if coverImageFileName is unavailable
                style={{
                  height: "450px",
                  width: "450px",
                  borderRadius: "100px",
                  borderWidth: "3px",
                  borderColor: "black",
                  borderStyle: "solid", // You need to specify the border style for the border to appear
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
                  <p style={{ color: "red" }}>Out of Stock</p>
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
          <br /><br />
          <h1 style={{color:'white'}}>Specification Details</h1>
          <hr />

<table className="table table-dark">
    <tbody>
        <tr>
            <td colSpan="2"><strong>CPU Specifications</strong></td>
        </tr>
        <tr>
            <td><strong>CPU Manufacturer</strong></td>
            <td>{specification.cpuManufacturer || 'N/A'}</td>
        </tr>
        <tr>
            <td><strong>CPU Model</strong></td>
            <td>{specification.cpuModel || 'N/A'}</td>
        </tr>
        <tr>
            <td><strong>Cores</strong></td>
            <td>{specification.cores || 'N/A'}</td>
        </tr>
        <tr>
            <td><strong>Threads</strong></td>
            <td>{specification.threads || 'N/A'}</td>
        </tr>
        <tr>
            <td><strong>Speed</strong></td>
            <td>{specification.speed || 'N/A'}</td>
        </tr>
        
        <tr>
            <td colSpan="2"><strong>GPU Specifications</strong></td>
        </tr>
        <tr>
            <td><strong>GPU Manufacturer</strong></td>
            <td>{specification.gpuManufacturer || 'N/A'}</td>
        </tr>
        <tr>
            <td><strong>GPU Model</strong></td>
            <td>{specification.gpuModel || 'N/A'}</td>
        </tr>
        
        <tr>
            <td colSpan="2"><strong>Display Specifications</strong></td>
        </tr>
        <tr>
            <td><strong>Size</strong></td>
            <td>{specification.size || 'N/A'}</td>
        </tr>
        <tr>
            <td><strong>Resolution</strong></td>
            <td>{specification.resolution || 'N/A'}</td>
        </tr>
        <tr>
            <td><strong>Refresh Rate</strong></td>
            <td>{specification.refreshRate || 'N/A'}</td>
        </tr>
        <tr>
            <td><strong>Touch Screen</strong></td>
            <td>{specification.touchScreen ? 'Yes' : 'No'}</td>
        </tr>
        
        <tr>
            <td colSpan="2"><strong>Memory Specifications</strong></td>
        </tr>
        <tr>
            <td><strong>RAM Size</strong></td>
            <td>{specification.ramSize || 'N/A'}</td>
        </tr>
        <tr>
            <td><strong>RAM Type</strong></td>
            <td>{specification.ramType || 'N/A'}</td>
        </tr>
        <tr>
            <td><strong>Storage Size</strong></td>
            <td>{specification.storageSize || 'N/A'}</td>
        </tr>
        <tr>
            <td><strong>Storage Type</strong></td>
            <td>{specification.storageType || 'N/A'}</td>
        </tr>
        
        <tr>
            <td colSpan="2"><strong>Additional Specifications</strong></td>
        </tr>
        <tr>
            <td><strong>Color</strong></td>
            <td>{specification.color || 'N/A'}</td>
        </tr>
        <tr>
            <td><strong>OS</strong></td>
            <td>{specification.os || 'N/A'}</td>
        </tr>
        <tr>
            <td><strong>WiFi</strong></td>
            <td>{specification.wifi || 'N/A'}</td>
        </tr>
        <tr>
            <td><strong>Bluetooth</strong></td>
            <td>{specification.bluetooth || 'N/A'}</td>
        </tr>
        <tr>
            <td><strong>Weight</strong></td>
            <td>{specification.weight || 'N/A'}</td>
        </tr>
        <tr>
            <td><strong>Dimensions</strong></td>
            <td>{specification.dimensions || 'N/A'}</td>
        </tr>
        <tr>
            <td><strong>Ethernet Port</strong></td>
            <td>{specification.ethernetPort ? 'Yes' : 'No'}</td>
        </tr>
        <tr>
            <td><strong>USB Ports</strong></td>
            <td>{specification.usbPorts || 'N/A'}</td>
        </tr>
        <tr>
            <td><strong>HDMI Ports</strong></td>
            <td>{specification.hdmiPorts || 'N/A'}</td>
        </tr>
        <tr>
            <td><strong>Webcam</strong></td>
            <td>{specification.webcam || 'N/A'}</td>
        </tr>
        <tr>
            <td><strong>Speakers</strong></td>
            <td>{specification.speakers || 'N/A'}</td>
        </tr>
        <tr>
            <td><strong>Battery</strong></td>
            <td>{specification.battery || 'N/A'}</td></tr>
        <tr>
            <td><strong>Warranty</strong></td>
            <td>{specification.warranty || 'N/A'}</td>
        </tr>
        <tr>
            <td><strong>Seven Day Replacement</strong></td>
            <td>{specification.sevenDayReplacement ? 'Yes' : 'No'}</td>
        </tr>
        <tr>
            <td><strong>Free Delivery</strong></td>
            <td>{specification.freeDelivery ? 'Yes' : 'No'}</td>
        </tr>
        <tr>
            <td><strong>Trusted Supplier</strong></td>
            <td>{specification.trustedSupplier ? 'Yes' : 'No'}</td>
        </tr>
    </tbody>
</table>





        </div>
      </SideBar>
    </div>
  );
};

export default ProductDetails;
