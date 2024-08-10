import { Link, useParams, useNavigate } from "react-router-dom";
import bg from "../../productImages/addProduct.jpg";
import { useState } from "react";
import { saveImage } from "../../services/ProductImage";
import { toast } from "react-toastify";

export const AddProductImage = () => {
  const { id } = useParams();
  const nav = useNavigate();
  const [productImage, setProductImage] = useState({
    file: null,
    isCover: false,
  });

  const handleFileChange = (e) => {
    setProductImage({
      ...productImage,
      file: e.target.files[0],
    });
  };

  const handleCheckboxChange = (e) => {
    setProductImage({
      ...productImage,
      isCover: e.target.checked,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Logic to handle image upload and additional data
    // You might use FormData to send the file and other fields

    const formData = new FormData();
    formData.append("file", productImage.file);
    formData.append("isCover", productImage.isCover);
    try {
      console.log("form data before axios - ", formData);
      const data = await saveImage(id, formData);
      console.log("After Axios - ", data);
      toast.success("Product Image Added Successfully!");
    } catch (er) {
      toast.error("Image not added...");
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
      <br />
      <h1 className="mb-4">Add Product Image</h1>
      <div className="container mt-3">
        <div className="row justify-content-center align-items-center">
          <form className="col-6" onSubmit={handleSubmit}>
            <div>
              <input
                type="file"
                className="form-control mb-4"
                id="file"
                onChange={handleFileChange}
                required
                style={{ backgroundColor: "transparent", borderColor: "gray" }}
              />
              <div className="input-group mb-3">
                <div
                  className="input-group-text"
                  style={{
                    backgroundColor: "transparent",
                    borderColor: "transparent",
                  }}
                >
                  <input
                    className="form-check-input mt-0"
                    type="checkbox"
                    aria-label="Checkbox for following text input"
                    id="isCover"
                    name="isCover"
                    onChange={handleCheckboxChange}
                    checked={productImage.isCover}
                  />
                </div>
                <input
                  type="text"
                  className="form-control"
                  aria-label="Text input with checkbox"
                  value="Cover Image"
                  style={{
                    backgroundColor: "transparent",
                    borderColor: "transparent",
                  }}
                />
              </div>
            </div>

            <div className="d-grid">
              <input
                type="submit"
                onClick={handleSubmit}
                className="btn btn-outline-success mb-4 btn-lg"
                style={{ borderRadius: "100px" }}
                value="Upload Image"
              />
              <Link
                className="btn btn-outline-primary mb-4 btn-lg"
                style={{ borderRadius: "100px" }}
                to="/home"
              >
                Go Back
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
