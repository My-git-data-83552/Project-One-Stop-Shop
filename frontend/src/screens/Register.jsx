import { Link, useNavigate } from "react-router-dom";
import bg from "../productImages/register.jpg";
import { useState } from "react";
import { toast } from "react-toastify";
import { RegisterService } from "../services/UserService";

// Dummy register function (replace with your actual API call)
const register = async (firstName, lastName, email, password, phone) => {
  // Implement your registration API call here
  return { status: "success" }; // Change as needed based on your API
};

export default function Register() {
  const[user,setUser]=useState({
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    phone:"",
    role:"",
  });
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");  
  const [role, setRole] = useState("");

  const navigate = useNavigate();

  const onRegister = async (e) => {
    e.preventDefault(); // Prevents the default form submission

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
      
      const result = await RegisterService(
        firstName,
        lastName,
        email,
        password,
        phone,
        role
      );
      console.log(user)
      if (result["status"] === "success") {
        toast.success("Successfully registered a new user");
        navigate("/home");
      } else {
        toast.error(result["error"]);
      }
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
      <div className="row">
        <div className="col-1"></div>
        <div
          className="col-5 mt-5"
          style={{
            backgroundColor: "beige",
            padding: "20px",
            borderRadius: "8px",
          }}
        >
          <form style={{ width: "100%" }} onSubmit={onRegister}>
            <h1 className="mb-3" style={{ color: "brown" }}>
              Register Here!
            </h1>
            <div className="mb-3">
                <label htmlFor="firstName" className="d-flex ms-2">First Name</label>
              <input
                type="text"
                placeholder="First Name"
                className="form-control"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="mb-3">
            <label htmlFor="lastName" className="d-flex ms-2">Last Name</label>
              <input
                type="text"
                placeholder="Last Name"
                className="form-control"
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="mb-3">
            <label htmlFor="email" className="d-flex ms-2">Email</label>
              <input
                type="email"
                placeholder="Email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
            <label htmlFor="password" className="d-flex ms-2">Password</label>
              <input
                type="password"
                placeholder="Password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-3">
            <label htmlFor="confirmPassword" className="d-flex ms-2">Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm Password"
                className="form-control"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <div className="mb-3">
            <label htmlFor="phone" className="d-flex ms-2">Contact #</label>
              <input
                type="text"
                className="form-control"
                id="phone"
                name="phone"
                placeholder="Enter 10-digit mobile number"
                maxLength="10"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <hr />
            <div className="mb-3 d-flex justify-content-evenly">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  onChange={(e) => setRole(e.target.value)}
                />
                <label className="form-check-label d-flex" htmlFor="flexRadioDefault1">
                  Admin
                </label>
              </div>
              <div className="form-check ">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  onChange={(e) => setRole(e.target.value)}
                  checked
                />
                <label className="form-check-label d-flex" htmlFor="flexRadioDefault2">
                  Buyer
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  onChange={(e) => setRole(e.target.value)}
                />
                <label className="form-check-label d-flex" htmlFor="flexRadioDefault1">
                  Seller
                </label>
              </div>
            </div>
            
            <button type="submit" className="btn btn-primary me-5 mt-3 mb-3"  style={{borderRadius:'100px'}}>
              Register
            </button>
            <Link to="/home" className="btn btn-warning" style={{borderRadius:'100px'}}>
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
        <div className="col-6"></div>
      </div>
    </div>
  );
}
