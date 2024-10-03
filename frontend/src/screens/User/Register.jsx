import { Link, useNavigate } from "react-router-dom";
import bg from "../../productImages/signup.jpeg";
import { useState } from "react";
import { toast } from "react-toastify";
import { RegisterService } from "../../services/UserService";

export default function Register() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    role: "ROLE_BUYER", // Default role
  });

  const navigate = useNavigate();

  const onRegister = async (e) => {
    e.preventDefault(); // Prevents the default form submission

    const { firstName, lastName, email, password, confirmPassword, phone, role } = user;

    if (firstName.length === 0) {
      toast.error("Please enter first name");
    } else if (lastName.length === 0) {
      toast.error("Please enter last name");
    } else if (email.length === 0) {
      toast.error("Please enter email");
    } else if (password.length === 0) {
      toast.error("Please enter password");
    } else if (confirmPassword.length === 0) {
      toast.error("Please confirm the password");
    } else if (password !== confirmPassword) {
      toast.error("Passwords do not match");
    } else {
      const result = await RegisterService(firstName, lastName, email, password, phone, role);

      if (result["status"] === "success") {
        toast.success("Successfully registered a new user");
        navigate("/login");
      } else {
        toast.error(result["error"]);
      }
    }
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
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
        <div className="col-7"
        style={{
          // backgroundColor: "beige",
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height:"100vh"
        }}>
          
        </div>
        <div
          className="col-5"
          style={{
            backgroundColor: "white",
            height:"100vh"
          }}
        >
          <div className="row mt-4" style={{width:"100%",
          justifyContent:'center',
          }}>
          <form style={{ width: "70%" }} onSubmit={onRegister}>
            <h1 className="mb-3" style={{ color: "darkblue" }}>
            <u> <strong> Register Here!</strong></u>
            </h1>
            <div className="mb-3">
              <label htmlFor="firstName" className="d-flex ms-2">
                First Name
              </label>
              <input
                type="text"
                placeholder="First Name"
                className="form-control"
                id="firstName"
                name="firstName"
                value={user.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="lastName" className="d-flex ms-2">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Last Name"
                className="form-control"
                id="lastName"
                name="lastName"
                value={user.lastName}
                onChange={handleChange}                
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="d-flex ms-2">
                Email
              </label>
              <input
                type="email"
                placeholder="Email"
                className="form-control"
                id="email"
                name="email"
                value={user.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="d-flex ms-2">
                Password
              </label>
              <input
                type="password"
                placeholder="Password"
                className="form-control"
                id="password"
                name="password"
                value={user.password}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="confirmPassword" className="d-flex ms-2">
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="Confirm Password"
                className="form-control"
                id="confirmPassword"
                name="confirmPassword"
                value={user.confirmPassword}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="d-flex ms-2">
                Contact #
              </label>
              <input
                type="text"
                className="form-control"
                id="phone"
                name="phone"
                placeholder="Enter 10-digit mobile number"
                maxLength="10"
                value={user.phone}
                onChange={handleChange}
              />
            </div>
            <hr />
            <div className="mb-3 d-flex justify-content-evenly">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="role"
                  id="admin"
                  value="ROLE_ADMIN"
                  onChange={handleChange}
                />
                <label className="form-check-label d-flex" htmlFor="admin">
                  Admin
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="role"
                  id="buyer"
                  value="ROLE_BUYER"
                  onChange={handleChange}
                  checked={user.role === "BUYER"}
                />
                <label className="form-check-label d-flex" htmlFor="buyer">
                  Buyer
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="role"
                  id="seller"
                  value="ROLE_SELLER"
                  onChange={handleChange}
                />
                <label className="form-check-label d-flex" htmlFor="seller">
                  Seller
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="button-blue mt-3 mb-3"
              style={{
                width:"400px",
                justifyContent:"center"
               }}
            >
              Register
            </button>
            <br />
            <Link to="/home" className="button-gold mb-3"
            style={{
              width:"400px",
              justifyContent:"center"
             }}>
              Go Back!
            </Link>
            <div>
              <p>
                Already have an Account?{" "}
                <Link to="/login" className="text-primary">
                  Login here
                </Link>
              </p>
            </div>
          </form>
          </div>
        </div>
        <div className="col-6"></div>
      </div>
    </div>
  );
}
