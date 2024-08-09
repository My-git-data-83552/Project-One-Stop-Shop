import axios from "axios";

const BASE_URL = "http://localhost:8080/api/products";
const CATEGORY_URL = "http://localhost:8080/api/categories";

export const addProduct = async (product) => {
  try {
    const response = await axios.post(BASE_URL, product);
    return response.data;
  } catch (error) {
    console.error("Error adding product:", error);
    throw error;
  }
};

export const getProductById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error getting product by ID:", error);
    throw error;
  }
};

export const getAllProducts = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.error("Error getting all products:", error);
    throw error;
  }
};

export const getCategories = async () => {
  try {
    const response = await axios.get(CATEGORY_URL);
    return response.data;
  } catch (error) {
    console.error("Error getting categories:", error);
    throw error;
  }
};

export const EditProduct = async (product, id) => {
  try {
    const response = await axios.put(`${BASE_URL}/${id}`, product);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};


export const editProduct = async (id,product) => {
  try {
    console.log("Updating product with ID:", id);
    console.log("Product data:", product);

    const response = await axios.put(`${BASE_URL}/${id}`, product);
    console.log("Response data:", response.data);

    return response.data;
  } catch (error) {
    console.error("Error updating product:", error.response ? error.response.data : error.message);
    throw error;
  }
};

export const deleteProduct = async (id)=>{
  try{
    const response = await axios.delete(`${BASE_URL}/${id}`);
    return response.data;
  }
  catch(error){
    console.log(error);
    throw error;
  }
}
