import axios from "axios";
import { toast } from "react-toastify";

const URL = "http://localhost:8080/all"; // Adjust the URL as needed

export const getCategories = async () => {
  try {
    const response = await axios.get(`${URL}/categories`);
    return response.data;
  } catch (error) {
    console.error("Error getting categories:", error);
    throw error;
  }
};

export const getCategoryById = async (id) => {
  try {
    const response = await axios.get(`${URL}/categories/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
    toast.error("Something went wrong...");
    throw error;
  }
};

export const addCategories = async (category) => {
  try {
    const response = await axios.post(`${URL}/categories/admin`, category, {
      headers: {
        "Content-Type": "application/json",
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
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (error) {
    console.log("Updation failed...", error);
    throw error;
  }
};

export const deleteCategory = async (id) => {
  try {
    const response = await axios.delete(`${URL}/categories/admin/${id}`);
    return response.data;
  } catch (error) {
    console.log("Could not delete in service React layer => ", error);
    throw error;
  }
};
