import bg from "../productImages/loginBackgroundImage.jpg";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import SideBar from "../components/SideBar";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const onLogin = async () => {
    if (email.length === 0) {
      toast.warn("Please enter email");
    } else if (password.length === 0) {
      toast.warn("Please enter password");
    } else {
      // call login API and check its success
      navigate("/home");
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
      <div className="row">
        <div className="col-6"></div>
        <div
          className="col-5 mt-5 shadow-lg p-3" //shadow-lg p-3
          style={{ backgroundColor: "tranparent", borderRadius: "5%" }}
        >
          <h1 className="mb-4 mt-4" >Welcome Back!</h1>
          <form>
            <div className="mb-3">
              <label  htmlFor="exampleInputEmail1" className="d-flex ms-1 form-label">
                Email address
              </label>
              <input
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                className="form-control transparent-input"
                id="email"
                aria-describedby="emailHelp"
                style={{
                  backgroundColor:'transparent',
                  borderColor:'white'
                }}
              />
              <div id="emailHelp" className="form-text" >
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="exampleInputPassword1" className="d-flex ms-1 form-label">
                Password
              </label>
              <input
                type="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className="form-control"
                placeholder="*****************"
                id="exampleInputPassword1"
                style={{
                  backgroundColor:'transparent',
                  borderColor:'white'
                }}
              />
            </div>
            <p style={{color:'white'}}>
              Don't have an Account?
              <Link to="/register" className="ms-2">
                Create an account
              </Link>
            </p>
            <br />
            <div className="d-grid gap-2">
              <button
                onClick={onLogin}
                className="btn btn-outline-success  mb-3"
                type="button"
                style={{ borderRadius: "100px",
                  borderColor:'transparent'
                 }}
              >
                Login
              </button>
              <Link
                className="btn btn-outline-warning mb-4"
                to="/home"
                type="button"
                style={{ borderRadius: "100px",
                  borderColor:'transparent'
                 }}
              >
                Go Home
              </Link>
            </div>
          </form>
        </div>
        <div className="col-1 mb-5"></div>
      </div>
      </SideBar>
    </div>
  );
}
