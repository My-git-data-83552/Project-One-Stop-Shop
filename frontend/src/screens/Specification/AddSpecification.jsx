import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import bg from "../../productImages/vector1.jpg";
import { addSpecification } from "../../services/SpecificationService"; // Adjust path as needed
import "./AddSpecification.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { addProduct } from "../../services/ProductService";

const AddSpecification = () => {
  const [product, setProduct] = useState({
    id:undefined,
    productName: '',
    brand: '',
    price: 0,
    quantity: 0,
    categoryId: '',
    specificationId:'',
});

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

  const location = useLocation();
  
  const nav=useNavigate();


  useEffect(() => {
    console.log('Inside Use Effect');
    if (location.state && location.state.product) {
      setProduct(location.state.product); // Initialize state with the passed product
    }
  }, [location.state]);
  
  useEffect(() => {
    console.log('Product state updated:', product);
  }, [product]);
  


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSpecification({
      ...specification,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result= await addSpecification(specification);

      product.specificationId = result.id

      console.log(result);
      console.log('result id = ', result.id);
      console.log('inside submit ',product);
      console.log('specificationId = ',product.specificationId);
      const data=await addProduct(product);
      console.log('product id = ',data.id)

      toast.success("Product added successfully!");
      nav(`/addProductImage/${data.id}`);
  
    } catch (error) {
      console.log(error);
      toast.error("Failed to add product. Please try again.");
    }
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
      <br />
      <h2>Add Specification</h2>
      <hr />
      <form onSubmit={handleSubmit} className="container col-8">
      <h3 className="d-flex">CPU Details</h3>
      <hr />
      <div>
        <div className="d-flex justify-content-evenly">

          <div className="mb-3 " style={{ width: "49%" }}>
            <label className="d-flex form-label">CPU Manufacturer</label>
            <input
              type="text"
              className="form-control custom-input"
              name="cpuManufacturer"
              value={specification.cpuManufacturer}
              onChange={handleChange}
              placeholder="Enter CPU Manufacturer"
            />
          </div>
          <div className="mb-3" style={{ width: "49%" }}>
            <label className="d-flex form-label">CPU Model</label>
            <input
              type="text"
              className="form-control custom-input"
              name="cpuModel"
              value={specification.cpuModel}
              onChange={handleChange}
              placeholder="Enter CPU Model"
            />
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <div className="mb-3" style={{ width: "32%" }}>
            <label className="d-flex form-label">Cores</label>
            <input
              type="number"
              className="form-control custom-input"
              name="cores"
              value={specification.cores}
              onChange={handleChange}
              placeholder="Enter Number of Cores"
            />
          </div>
          <div className="mb-3" style={{ width: "32%" }}>
            <label className="d-flex form-label">Threads</label>
            <input
              type="number"
              className="form-control custom-input"
              name="threads"
              value={specification.threads}
              onChange={handleChange}
              placeholder="Enter Number of Threads"
            />
          </div>
          <div className="mb-3" style={{ width: "32%" }}>
            <label className="d-flex form-label">Speed (GHz)</label>
            <input
              type="number"
              step="0.1"
              className="form-control custom-input"
              name="speed"
              value={specification.speed}
              onChange={handleChange}
              placeholder="Enter Speed in GHz"
            />
          </div>
        </div>
        <br />
        <h3 className="d-flex">GPU Specifications</h3>
        <hr />
        <div className="d-flex justify-content-between">
          <div className="mb-3" style={{ width: "49%" }}>
            <label className="d-flex form-label">GPU Manufacturer</label>
            <input
              type="text"
              className="form-control custom-input"
              name="gpuManufacturer"
              value={specification.gpuManufacturer}
              onChange={handleChange}
              placeholder="Enter GPU Manufacturer"
            />
          </div>
          <div className="mb-3" style={{ width: "49%" }}>
            <label className="d-flex form-label">GPU Model</label>
            <input
              type="text"
              className="form-control custom-input"
              name="gpuModel"
              value={specification.gpuModel}
              onChange={handleChange}
              placeholder="Enter GPU Model"
            />
          </div>
        </div>
        <br />
        <h3 className="d-flex">Dimensions</h3>
        <hr />
        <div className="d-flex justify-content-between">
          <div className="mb-3" style={{ width: "32%" }}>
            <label className="d-flex form-label">Size</label>
            <input
              type="text"
              className="form-control custom-input"
              name="size"
              value={specification.size}
              onChange={handleChange}
              placeholder="Enter Size"
            />
          </div>
          <div className="mb-3" style={{ width: "32%" }}>
            <label className="d-flex form-label">Resolution</label>
            <input
              type="text"
              className="form-control custom-input"
              name="resolution"
              value={specification.resolution}
              onChange={handleChange}
              placeholder="Enter Resolution"
            />
          </div>
          <div className="mb-3" style={{ width: "32%" }}>
            <label className="d-flex form-label">Refresh Rate (Hz)</label>
            <input
              type="number"
              className="form-control custom-input"
              name="refreshRate"
              value={specification.refreshRate}
              onChange={handleChange}
              placeholder="Enter Refresh Rate in Hz"
            />
          </div>
        </div>

        <br />
        <h3 className="d-flex">Memory Details</h3>
        <hr />
        <div className="d-flex justify-content-between">
          <div className="mb-3" style={{ width: "49%" }}>
            <label className="d-flex form-label">RAM Size</label>
            <input
              type="text"
              className="form-control custom-input"
              name="ramSize"
              value={specification.ramSize}
              onChange={handleChange}
              placeholder="Enter RAM Size"
            />
          </div>
          <div className="mb-3" style={{ width: "49%" }}>
            <label className="d-flex form-label">RAM Type</label>
            <input
              type="text"
              className="form-control custom-input"
              name="ramType"
              value={specification.ramType}
              onChange={handleChange}
              placeholder="Enter RAM Type"
            />
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <div className="mb-3" style={{ width: "49%" }}>
            <label className="d-flex form-label">Storage Size</label>
            <input
              type="text"
              className="form-control custom-input"
              name="storageSize"
              value={specification.storageSize}
              onChange={handleChange}
              placeholder="Enter Storage Size"
            />
          </div>
          <div className="mb-3" style={{ width: "49%" }}>
            <label className="d-flex form-label">Storage Type</label>
            <input
              type="text"
              className="form-control custom-input"
              name="storageType"
              value={specification.storageType}
              onChange={handleChange}
              placeholder="Enter Storage Type"
            />
          </div>
        </div>
        <br />
        <h3 className="d-flex">Other Details</h3>
        <hr />
        
        <div className="mb-3" style={{ width: "100%" }}>
          <label className="d-flex form-label">Description</label>
          <textarea
            className="form-control custom-input"
            name="description"
            value={specification.description}
            onChange={handleChange}
            placeholder="Enter Description"
            style={{borderRadius:'10px'}}
          ></textarea>
        </div>
        <div className="d-flex justify-content-between">
          <div className="mb-3" style={{ width: "32%" }}>
            <label className="d-flex form-label">Color</label>
            <input
              type="text"
              className="form-control custom-input"
              name="color"
              value={specification.color}
              onChange={handleChange}
              placeholder="Enter Color"
            />
          </div>
          <div className="mb-3" style={{ width: "32%" }}>
            <label className="d-flex form-label">OS</label>
            <input
              type="text"
              className="form-control custom-input"
              name="os"
              value={specification.os}
              onChange={handleChange}
              placeholder="Enter OS"
            />
          </div>
          <div className="mb-3" style={{ width: "32%" }}>
            <label className="d-flex form-label">WiFi</label>
            <input
              type="text"
              className="form-control custom-input"
              name="wifi"
              value={specification.wifi}
              onChange={handleChange}
              placeholder="Enter WiFi"
            />
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <div className="mb-3" style={{ width: "32%" }}>
            <label className="d-flex form-label">Bluetooth</label>
            <input
              type="text"
              className="form-control custom-input"
              name="bluetooth"
              value={specification.bluetooth}
              onChange={handleChange}
              placeholder="Enter Bluetooth"
            />
          </div>
          <div className="mb-3" style={{ width: "32%" }}>
            <label className="d-flex form-label">Weight (kg)</label>
            <input
              type="number"
              step="0.1"
              className="form-control custom-input"
              name="weight"
              value={specification.weight}
              onChange={handleChange}
              placeholder="Enter Weight in kg"
            />
          </div>
          <div className="mb-3" style={{ width: "32%" }}>
            <label className="d-flex form-label">Dimensions (mm)</label>
            <input
              type="text"
              className="form-control custom-input"
              name="dimensions"
              value={specification.dimensions}
              onChange={handleChange}
              placeholder="Enter Dimensions in mm"
            />
          </div>
        </div>
        
        <div className="d-flex justify-content-between">
          <div className="mb-3" style={{ width: "32%" }}>
            <label className="d-flex form-label">USB Ports</label>
            <input
              type="number"
              className="form-control custom-input"
              name="usbPorts"
              value={specification.usbPorts}
              onChange={handleChange}
              placeholder="Enter USB Ports"
            />
          </div>
          <div className="mb-3" style={{ width: "32%" }}>
            <label className="d-flex form-label">HDMI Ports</label>
            <input
              type="number"
              className="form-control custom-input"
              name="hdmiPorts"
              value={specification.hdmiPorts}
              onChange={handleChange}
              placeholder="Enter HDMI Ports"
            />
          </div>
          <div className="mb-3" style={{ width: "32%" }}>
            <label className="d-flex form-label">Webcam</label>
            <input
              type="text"
              className="form-control custom-input"
              name="webcam"
              value={specification.webcam}
              onChange={handleChange}
              placeholder="Enter Webcam"
            />
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <div className="mb-3" style={{ width: "32%" }}>
            <label className="d-flex form-label">Speakers</label>
            <input
              type="text"
              className="form-control custom-input"
              name="speakers"
              value={specification.speakers}
              onChange={handleChange}
              placeholder="Enter Speakers"
            />
          </div>
          <div className="mb-3" style={{ width: "32%" }}>
            <label className="d-flex form-label">Battery</label>
            <input
              type="text"
              className="form-control custom-input"
              name="battery"
              value={specification.battery}
              onChange={handleChange}
              placeholder="Enter Battery"
            />
          </div>
          <div className="mb-3" style={{ width: "32%" }}>
            <label className="d-flex form-label">Warranty</label>
            <input
              type="text"
              className="form-control custom-input"
              name="warranty"
              value={specification.warranty}
              onChange={handleChange}
              placeholder="Enter Warranty"
            />
          </div>
        </div>
        <div className="d-flex justify-content-evenly mt-3">
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input d-flex"
              name="touchScreen"
              checked={specification.touchScreen}
              onChange={handleChange}
            />
            <label className="form-check-label d-flex">Touch Screen</label>
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input d-flex"
              name="ethernetPort"
              checked={specification.ethernetPort}
              onChange={handleChange}
            />
            <label className="form-check-label d-flex">Ethernet Port</label>
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input d-flex"
              name="sevenDayReplacement"
              checked={specification.sevenDayReplacement}
              onChange={handleChange}
            />
            <label className="form-check-label d-flex">7-Day Replacement</label>
          </div>
        </div>
        <div className="d-flex justify-content-evenly mt-3">
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input d-flex"
              name="freeDelivery"
              checked={specification.freeDelivery}
              onChange={handleChange}
            />
            <label className="form-check-label d-flex">Free Delivery</label>
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input d-flex"
              name="trustedSupplier"
              checked={specification.trustedSupplier}
              onChange={handleChange}
            />
            <label className="form-check-label d-flex">Trusted Supplier</label>
          </div>
        </div>
        </div>
        <button type="submit" className="btn btn-primary mb-3 me-4" style={{borderRadius:'20px'}}>
          Add Specification
        </button>
        <Link to='/home' className="btn btn-light mb-3" style={{borderRadius:'20px'}}>Go Back</Link>
        <br />
      </form>
    </div>
  );
};

export default AddSpecification;
