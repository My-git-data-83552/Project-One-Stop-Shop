import { useEffect, useState } from "react";
import bg from "../../productImages/addProduct.jpg";
import { toast } from "react-toastify";
import { getAddressByUserId } from "../../services/AddressService";
import BuyerSidebar from "../../components/BuyerSidebar";
import { Link, useNavigate, useParams } from "react-router-dom";
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
        const userId = sessionStorage.getItem("userId");

        if (!userId) {
          toast.error("User not logged in. Please login first.");
          navigate("/login"); // Redirect to login page or any other appropriate page
          return;
        }

        const addressData = await getAddressByUserId(userId);
        setAddresses(addressData);

        const productData = await getProductById(id);
        setProduct(productData);
      } catch (error) {
        toast.error("Could not fetch addresses");
      }
    };
    fetchAddresses();
  }, [id, navigate]);

  const selectAddress = async (addressId) => {
    try {
      orders.totalAmount = product.price; // as single product buying so this
      orders.status = 0;
      orders.userId = sessionStorage.getItem("userId"); // Ensure userId is set from sessionStorage
      orders.addressId = addressId;

      const data = await SaveOrders(orders);

      orderItems.quantity = 1;
      orderItems.productId = product.id;
      orderItems.orderId = data.id;
      orderItems.totalPrice = product.price;

      await SaveOrderItems(orderItems);

      toast.success("Order Placed. Thank you!");
      navigate("/payment");
    } catch (error) {
      toast.error("Something went wrong. Order not placed. Please try again.");
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
      <BuyerSidebar>
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
                <tr key={index}>
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
      </BuyerSidebar>
    </div>
  );
};

export default ShowAddress;
