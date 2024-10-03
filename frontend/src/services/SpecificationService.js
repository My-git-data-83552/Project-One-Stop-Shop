import axios from "axios";

const API_URL = "http://localhost:8080";
const token = sessionStorage.getItem('token');

export const addSpecification = async (specification) => {
  try {
    const response = await axios.post(`${API_URL}/admin-seller/specifications`, specification, {      
      headers:{
        Authorization: `Bearer ${token}`,
       } ,
  });
    return response.data;
  } catch (error) {
    throw new Error("Error adding specification: " + error.message);
  }
};

export const getSpecificationById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/all/specifications/${id}`);
    return response.data;
  } catch (error) {
    throw new Error("Error fetching specification: " + error.message);
  }
};

export const getAllSpecifications = async () => {
  try {
    const response = await axios.get(`${API_URL}/all/specifications`);
    return response.data;
  } catch (error) {
    throw new Error("Error fetching specifications: " + error.message);
  }
};

export const updateSpecification = async (id, specificationData) => {
  try {
    const response = await axios.put(`${API_URL}/admin-seller/specifications/${id}`, specificationData, {      
      headers:{
        Authorization: `Bearer ${token}`,
       } ,
  });
    return response.data;
  } catch (error) {
    console.error('Error updating specification:', error);
    throw error;
  }
};
