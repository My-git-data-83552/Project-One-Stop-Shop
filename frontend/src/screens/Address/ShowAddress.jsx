import { useEffect, useState } from "react";
import bg from "../../productImages/addProduct.jpg";
import { toast } from "react-toastify";
import { getAddressByUserId } from "../../services/AddressService";
import SideBar from "../../components/SideBar";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { SaveOrders } from "../../services/OrderService";
import { SaveOrderItems } from "../../services/OrderItemsService";
import { getProductById } from "../../services/ProductService";
const ShowAddress = () => {
  const { id } = useParams();
  const [addresses, setAddresses] = useState([]);
  const [product, setProduct] = useState([]);
  const [orders, setOrders] = useState({
    status: "",
    totalAmount: 0,
    userId: "",
  });
  const [orderItems, setOrderItems] = useState({
    quantity: 0,
    totalPrice: 0,
    orderId: "",
    productId: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    const fetchAddresses = async () => {
      try {
        const userId = 1; //hardcoded for now
        const addressData = await getAddressByUserId(userId);

        setAddresses(addressData);
        // console.log("address data:", addressData);
        const productData = await getProductById(id);
        setProduct(productData);
        // console.log("Product data:", productData);
      } catch (error) {
        toast.error("Could not fetch addresses");
      }
    };
    fetchAddresses();
  }, []);

  const selectAddress = async (addressId) => {
    try {
      orders.totalAmount = product.price; //as single product buying so this
      orders.status = 0;
      orders.userId = 1;
      orders.addressId=addressId;
      // console.log("before axios", orders);

      const data = await SaveOrders(orders);
      // console.log("save orders", data);

      orderItems.quantity = 1;
      orderItems.productId = product.id;
      orderItems.orderId = data.id;
      orderItems.totalPrice = product.price;

      const orderItemsData = await SaveOrderItems(orderItems);
      // console.log("save orderItems ", orderItemsData);

      toast.success("Order Placed Thank you!");
      navigate("/payment");
    } catch (er) {
      toast.error("Something went wrong.Order Not Placed... try Again");
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
        <div className="container">
          <h1>Choose Where you want the product to be Shipped</h1>
          <table className="table table-striped">
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
              {addresses.map((address, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{address.addressLine1}</td>
                  <td>{address.addressLine2}</td>
                  <td>{address.city}</td>
                  <td>{address.state}</td>
                  <td>
                    <Link
                      className="btn btn-outline-success"
                      onClick={() => selectAddress(address.id)}
                      style={{
                        borderColor: "transparent",
                        borderRadius: "100px",
                      }}
                    >
                      Select
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SideBar>
    </div>
  );
};
export default ShowAddress;
