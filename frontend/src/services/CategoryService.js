import axios from "axios";
import { toast } from "react-toastify";

const URL = "http://localhost:8080/all"; // Adjust the URL as needed
const token = sessionStorage.getItem('token');

export const getCategories = async () => {
  try {

    const response = await axios.get(`${URL}/categories`, {      
      headers:{
        Authorization: `Bearer ${token}`,
       } ,
  });
    return response.data;
  } catch (error) {
    console.error("Error getting categories:", error);
    throw error;
  }
};

export const getCategoryById = async (id) => {
  try {
    const response = await axios.get(`${URL}/categories/${id}`, {      
      headers:{
        Authorization: `Bearer ${token}`,
       } ,
  });
    return response.data;
  } catch (error) {
    console.log(error);
    toast.error("Something went wrong...");
    throw error;
  }
};

export const addCategories = async (category) => {
  try {
    const response = await axios.post(`http://localhost:8080/admin-seller/categories`, category, {
      headers: {
        ContentType: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.log("Saving Categories failed...", error);
    throw error;
  }
};

export const editCategories = async (id, category) => {
  try {
    const response = await axios.put(`${URL}/categories/admin/${id}`, category, {
      headers: { "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
       },
    });
    return response.data;
  } catch (error) {
    console.log("Updation failed...", error);
    throw error;
  }
};

export const deleteCategory = async (id) => {
  try {
    const response = await axios.delete(`${URL}/categories/admin/${id}`, {      
      headers:{
        Authorization: `Bearer ${token}`,
       } ,
  });
    return response.data;
  } catch (error) {
    console.log("Could not delete in service React layer => ", error);
    throw error;
  }
};
