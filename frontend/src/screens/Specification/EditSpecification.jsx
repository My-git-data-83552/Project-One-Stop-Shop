import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { getSpecificationById, updateSpecification } from '../../services/SpecificationService';
import { toast } from 'react-toastify';

const EditSpecification = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location=useLocation();
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

  const product = location.state?.product;

  useEffect(() => {
    const fetchSpecification = async () => {
      try {
        const data = await getSpecificationById(id);
        setSpecification(data);

      } catch (error) {
        console.error('Failed to fetch specification:', error);
      }
    };

    fetchSpecification();
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSpecification({
      ...specification,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateSpecification(id, specification);
      navigate('/products'); // Redirect to the specifications list page or wherever appropriate
        toast.success('Specs Updated Successfully');
    } catch (error) {
      console.error('Failed to update specification:', error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Edit Specification</h2>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-4 mb-3">
            <label className="form-label">CPU Manufacturer</label>
            <input
              type="text"
              className="form-control"
              name="cpuManufacturer"
              value={specification.cpuManufacturer}
              onChange={handleChange}
              placeholder="Enter CPU Manufacturer"
            />
          </div>
          <div className="col-md-4 mb-3">
            <label className="form-label">GPU Manufacturer</label>
            <input
              type="text"
              className="form-control"
              name="gpuManufacturer"
              value={specification.gpuManufacturer}
              onChange={handleChange}
              placeholder="Enter GPU Manufacturer"
            />
          </div>
          <div className="col-md-4 mb-3">
            <label className="form-label">RAM Size</label>
            <input
              type="text"
              className="form-control"
              name="ramSize"
              value={specification.ramSize}
              onChange={handleChange}
              placeholder="Enter RAM Size"
            />
          </div>
        </div>

        {/* Add other fields similarly */}

        <br />
        <div className="d-flex justify-content-between">
          <button type="button" onClick={() => navigate('/products')} className="btn btn-danger btn-lg">
            Cancel
          </button>
          <button type="submit" className="btn btn-primary btn-lg">
            Save
          </button>
        </div>
      </form>
      <br />
    </div>
  );
};

export default EditSpecification;
