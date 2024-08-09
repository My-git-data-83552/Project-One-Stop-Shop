import NavBar from "../../components/Navigation_bar";

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { getProductById } from "../../services/ProductService";
import ProductImages from "../../components/ProductImages";
import { getAllCoverImages } from "../../services/ProductImage";
import SideBar from "../../components/SideBar";
import image from "../../productImages/laptop4.jpg";
import { getAllSpecifications } from "../../services/SpecificationService";

const ProductDetails = () => {
  const { id } = useParams();
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

  // const [specification, setSpecification]=useState([]);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const data = await getProductById(id);
        setProduct(data);
      } catch (error) {
        setError("Error fetching product details");
      }
    };
    fetchProductDetails();

    // const fetchSpecificationDetails=async()=>{
    //   try{
    //     const response=await getAllSpecifications();
    //     setSpecification(response);
    //     console.log(response);
    //   }
    //   catch(er){
    //     console.log(er);
    //     throw er;
    //   }

    // }
    // fetchSpecificationDetails();
  }, [id]);

  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container-fluid">
      <SideBar>
        <div className="container" >
      <h1 className="text-center my-4">{product.productName}</h1>
      <div className="row">
        <div className="col-6" style={{height:'300px'}}>
          <img
            // src={`${product.coverImageFileName}`}
            src={image}
            className="img-fluid"
            alt={product.coverImageFileName}
            style={{height:'300px'}}
          />
          <hr />
          <ProductImages />

          <table className="table table-danger">
           <thead> <th>Processor Details</th></thead>
           <tbody>
            <tr>

            </tr>
           </tbody>
          </table>
        </div>
        <div
          className="col"
          style={{
            backgroundColor: "transparent",
          }}
        >
          <h2>Specifications</h2><hr />
          <div className="d-flex justify-content-center">
            <table className="table table-borderless">
              <tbody className="d-grid">
              <tr>
                  <td className="d-flex" style={{fontSize:'30px'}}><strong>Name</strong></td>
                  <td style={{fontSize:'30px'}}>{product.productName}</td>
                </tr>
                <hr />
                <tr d-flex justify-content-start>
                  <td className="d-flex" style={{fontSize:'30px'}}><strong>Brand</strong></td>
                  <td style={{fontSize:'30px'}}>{product.brand}</td>
                </tr>
                <hr />
                <tr>
                  <td className="d-flex" style={{fontSize:'30px'}}><strong>Price</strong></td>
                  <td style={{fontSize:'40px',color:'darkred'}}>₹ {product.price} /-</td>
                </tr>
                <hr />
              </tbody>
            </table>
          </div>
        <div className="d-grid">
          <button className="btn btn-warning mb-3" style={{
            borderRadius:'100px',
          }}>Add To Cart</button>
          <button className="btn btn-success" style={{
            borderRadius:'100px',
          }}>Buy Now</button>
        </div>
        </div>
        <br />
        <br /><br /><br />
        <br />
        {/* <table className="table">
      <thead>
        <tr>
          {Object.keys(specification).map((key) => (
            <th key={key}>{key}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          {Object.values(specification).map((value, index) => (
            <td key={index}>{value}</td>
          ))}
        </tr>
      </tbody>
    </table> */}
      </div>
      </div>
      </SideBar>
    </div>
  );
};

export default ProductDetails;
