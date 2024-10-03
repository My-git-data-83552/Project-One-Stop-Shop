import bg from "../../productImages/LoginPage.jpg";
import lbg from "../../productImages/LoginPage1.jpg";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../services/UserService";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const onLogin = async () => {
    if (email.length === 0) {
      toast.warn("Enter email");
    } else if (password.length === 0) {
      toast.warn("Enter password");
    } else {
      try {
        const result = await login(email, password);

        const customer = result.data;
        if (customer && customer.customer.id) {
          sessionStorage.setItem("token", customer.jwt);
          sessionStorage.setItem("userId", customer.customer.id);
          sessionStorage.setItem("role", customer.customer.role);
          toast.success("Logged in successfully");

          if (customer.customer.role === "ROLE_BUYER") {
            navigate("/home");
          } else if (customer.customer.role === "ROLE_SELLER") {
            navigate("/products");
          } else {
            navigate("/admin");
          }
        } else {
          toast.error("User ID not found");
        }
      } catch (error) {
        toast.error("Login failed");
      }
    }
  };

  const browse = () => {
    if (sessionStorage.getItem("token") != null){
      sessionStorage.clear();
      toast.info("!!!you are Logged Out");
    }
    <div class="alert alert-primary d-flex align-items-center" role="alert">
      <svg class="bi flex-shrink-0 me-2" role="img" aria-label="Info:">
        {/* <use xlink:href="#info-fill" /> */}
      </svg>
      <div>You will be logged out</div>
    </div>
   
    navigate("/home");
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
      <div className="row">
        <div
          className="col-3" //shadow-lg p-3
          style={{
            // backgroundImage: `url${lbg}`,
            backgroundColor: "black",
            backgroundSize: "cover",
            backgroundPosition: "center",
            // opacity:'70%',
            color: "white",
            borderRadius: "0%",
            height: "100vh",
            width: "50%",
          }}
        >
          <br />
          <br />
          <br />
          <h1 className="mb-4 mt-4">
            <strong>Welcome Back!</strong>
          </h1>
          <div
            className="row"
            style={{
              justifyContent: "center",
            }}
          >
            <div className="col-8">
              <form>
                <div className="mb-3">
                  <label
                    htmlFor="exampleInputEmail1"
                    className="d-flex ms-1 form-label"
                  >
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
                      backgroundColor: "white",
                      borderColor: "black",
                    }}
                  />
                  <div
                    id="emailHelp"
                    className="form-text"
                    style={{
                      color: "white",
                    }}
                  >
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="exampleInputPassword1"
                    className="d-flex ms-1 form-label"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    className="form-control"
                    placeholder="Password"
                    id="exampleInputPassword1"
                    style={{
                      backgroundColor: "white",
                      borderColor: "black",
                    }}
                  />
                </div>
                <p style={{ color: "white" }}>
                  Don't have an Account?
                  <Link to="/register" className="ms-2">
                    Create an account
                  </Link>
                </p>
                <br />
                <div className="d-grid gap-2">
                  <Link
                    onClick={onLogin}
                    className="button-blue mb-3"
                    type="button"
                  >
                    Login
                  </Link>
                  <button
                    className="button-gold mb-4"
                    onClick={browse}
                    type="button"
                  >
                    Browse Without login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div
          className="col-4"
          style={{
            backgroundImage: `url(${lbg})`,
            // backgroundColor:'red',
            backgroundSize: "cover",
            backgroundPosition: "center",
            // opacity:'70%',
            borderRadius: "0%",
            height: "100vh",
            width: "50%",
          }}
        ></div>
      </div>
      {/* </SideBar> */}
    </div>
  );
}
