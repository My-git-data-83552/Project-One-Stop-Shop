
import { useEffect, useState } from "react";
import bg from "../../productImages/addProduct.jpg";
import { getAllProducts } from "../../services/ProductService";
import { toast } from "react-toastify";
import { getAddressByUserId } from "../../services/AddressService";
import SideBar from "../../components/SideBar";
const ShowAddress=()=>{

    const[addresses,setAddresses]=useState(null);
    const [products,setProducts]=useState([]);

    useEffect(() => {
        const fetchAddresses = async () => {
          try {
            const userId=1; //hardcoded for now
            const data = await getAddressByUserId(userId);
            setProducts(data);
          } catch (error) {
            toast.error("Could not fetch addresses");
          }
        };
        fetchAddresses();
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
            <div className="container">
                <h1>Choose Where you want the product to be</h1>
                <table className="table">
                    <thead>
                        <tr>
                        <th>Sr. No.</th>
                        <th>Address Line 1</th>
                        <th>Address Line 2</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                        <td>Sr. No.</td>
                        <td>Address Line 1</td>
                        <td>Address Line 2</td>
                        <td>City</td>
                        <td>State</td>
                        <td>Actions</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            </SideBar>
        </div>
    )
}
export default ShowAddress;