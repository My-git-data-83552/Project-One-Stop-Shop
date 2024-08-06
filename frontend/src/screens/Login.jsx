import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/UserService';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userData = await login(username, password);
      sessionStorage.setItem('user', JSON.stringify(userData)); // Store user data in session storage
      toast.success('Login successful!');
      navigate('/home');
    } catch (error) {
      toast.error('Login failed. Please try again.');
    }
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;




// import bg from '../productImages/loginBackgroundImage.jpg';
// import React, { useState } from "react";
// import { Link, useNavigate } from 'react-router-dom'
// import { toast } from 'react-toastify'

// export default function Login() {

//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const [user, setUser] = useState(null);

//   // get navigation hook
//   const navigate = useNavigate()

//   useEffect(() => {
//     const fetchUser = async () => {
//         try {
//             const storedUser = sessionStorage.getItem('user');
//             if (storedUser) {
//                 setUser(JSON.parse(storedUser));
//             } else {
//                 const response = await getUserById(userId);
//                 setUser(response.data);
//                 sessionStorage.setItem('user', JSON.stringify(response.data));
//             }
//         } catch (error) {
//             console.error("Error fetching user data", error);
//         }
//     };

//     fetchUser();
// }, [userId]);

//   const onLogin = async () => {
//     if (email.length === 0) {
//       toast.error('Please enter email')
//     } else if (password.length === 0) {
//       toast.error('Please enter password')
//     } else {
//       // call login API and check its success
//         navigate('/home')
//       }
//     }

//   return (
//     <div className="container-fluid" style={{
//         backgroundImage: `url(${bg})`, 
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         height: "100vh",
//         width: "100vw",
//     }}>
//         <div className="row">
//         <div className="col-6"></div>
//         <div className="col-5 mt-5 shadow-lg p-3 " style={{ backgroundColor: "lightcyan", borderRadius: "5%" }}>
//             <h1 className="mb-4 mt-4">Welcome Back!</h1>
//           <form>
//             <div className="mb-3">
//               <label htmlFor="exampleInputEmail1" className="form-label">
//                 Email address
//               </label>
//               <input
//                 type="email"
//                 onChange={(e)=>{setEmail(e.target.value)}}
//                 className="form-control transparent-input"
//                 placeholder="abc@email.com"
//                 id="exampleInputEmail1"
//                 aria-describedby="emailHelp"
//               />
//               <div id="emailHelp" className="form-text">
//                 We'll never share your email with anyone else.
//               </div>
//             </div>
//             <div className="mb-4">
//               <label htmlFor="exampleInputPassword1" className="form-label">
//                 Password
//               </label>
//               <input
//                 type="password"                
//                 onChange={(e)=>{setPassword(e.target.value)}}
//                 className="form-control" 
//                 placeholder="*****************"
//                 id="exampleInputPassword1"
//               />
//             </div>
//             <p>Don't have an Account? 
//             <Link to='/register' className="ms-2">Register here</Link></p>
//             <div className="d-grid gap-2">
//               <button onClick={onLogin} className="btn btn-primary mb-3" type="button" style={{borderRadius:'100px'}}>
//                 Login
//               </button>
//               <Link className="btn btn-warning mb-4" to="/home" type="button" style={{borderRadius:'100px'}} >
//                 Go Back
//               </Link>
//             </div>
//           </form>
//         </div>
//         <div className="col-1 mb-5"></div>
//       </div>
//     </div>
//   );
// }
