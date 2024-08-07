import { Link } from "react-router-dom";
import bg from "../productImages/logout.jpg";

export default function Logout(){
    return (
       
        <div 
        className="container-fluid"
         style={{
            // backgroundImage: `url(${bg})`, 
            backgroundImage:'https://user-images.githubusercontent.com/5574267/130804494-a9d2d69c-f170-4576-b2e1-0bb7f13dd92d.gif',
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh",
            width: "100vw",
        }}>
            <br />
            <h1>Logout Success!!!</h1>    
            <hr />
            <Link to='/login' className="btn btn-light me-4">Login Again?</Link>
            <Link to='/home' className="btn btn-primary">Keep Browsing</Link>
            
        </div>
    )
}