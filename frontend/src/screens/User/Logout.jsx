import { useEffect } from "react";
import { Link } from "react-router-dom";
import bg from "../../productImages/logout.jpg";
import SideBar from "../../components/SideBar";

export default function Logout() {
    useEffect(() => {
        // Clear session storage on logout
        sessionStorage.clear();
    }, []);

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
                <br />
                <h1>Logout Success!!!</h1>
                <hr />
                <Link
                    to="/login"
                    className="btn btn-light me-4"
                    style={{
                        borderRadius: "20px",
                    }}
                >
                    Login Again?
                </Link>
                <Link
                    to="/home"
                    className="btn btn-primary"
                    style={{
                        borderRadius: "20px",
                    }}
                >
                    Keep Browsing
                </Link>
            </SideBar>
        </div>
    );
}
