import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import bg from "../../productImages/addProduct.jpg";
import { useEffect, useState } from "react";

export const AddProductImage = () => {
  const { id } = useParams();
  const nav = useNavigate();

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
          <form className="col-6" onSubmit>
            
            {/* <label className="d-flex" htmlFor="title">Title</label>
                <input
                  type="text"
                  className="form-control mb-4"
                  onChange={(e) => setTitle(e.target.value)}
                  style={{backgroundColor:'transparent',borderColor:'gray'}}
                  id="title"
                  name="title"
                  value
                  required
                /> */}

            <input
              type="file"
              className="form-control mb-4"
              id="file"
              onChange
              required
              style={{ backgroundColor: "transparent", borderColor: "gray" }}
            />
            <div className="d-grid">
              <input
                type="submit"
                className="btn btn-outline-success mb-4 btn-lg"
                style={{ borderRadius: "100px" }}
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
