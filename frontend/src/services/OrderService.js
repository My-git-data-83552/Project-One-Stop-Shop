import axios from "axios";

const URL = "http://localhost:8080/buyer/orders";
const token = sessionStorage.getItem('token');

export const SaveOrders = async (formData) => {
  try {
    const response = await axios.post(URL, formData,{
      headers:{
          Authorization:`Bearer ${token}`,
      }
  });
   
    return response.data;
  } catch (error) {
    console.error("Error saving the order:", error);
    throw error;
  }
};

// Function to get order by ID
export const getOrderById = async (id) => {
  try {
    const response = await axios.get(`${URL}/${id}`);
    console.log("Order fetched successfully:", response,{
      headers:{
          Authorization:`Bearer ${token}`,
      }
  });
    return response.data;
  } catch (error) {
    console.error("Error fetching the order:", error);
    throw error;
  }
};

export const getOrdersByUserId = async (userId) => {
  try {
    const response = await axios.get(`${URL}/user/${userId}`,{
      headers:{
          Authorization:`Bearer ${token}`,
      }
  });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
