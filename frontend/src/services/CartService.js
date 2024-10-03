import axios from "axios";
import { toast } from "react-toastify";

const URL = "http://localhost:8080/buyer/cart";

export const purchaseAllProducts = async (userId, addressId) => {
  try {
    const token = sessionStorage.getItem("token");
    const response = await axios.post(`${URL}/purchase`, null, {
      params: { userId, addressId },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const addProductToCart = async (cartItemDTO) => {
  const requestBody = {
    userId: cartItemDTO.userId,
    quantity: cartItemDTO.quantity,
  };
  const token = sessionStorage.getItem("token");

  try {
    const response = await axios.post(
      `${URL}/${cartItemDTO.productId}`,
      requestBody,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log("axios error - ", error);
  }
};

export const getCartItems = async (userId) => {
  try {
    const token = sessionStorage.getItem("token");
    const response = await axios.get(`${URL}/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching cart items:", error);
    throw error;
  }
};
