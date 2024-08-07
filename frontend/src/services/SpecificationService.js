import axios from "axios";

const API_URL = "http://localhost:8080/specifications";

export const addSpecification = async (specification) => {
  try {
    const response = await axios.post(API_URL, specification);
    return response.data;
  } catch (error) {
    throw new Error("Error adding specification: " + error.message);
  }
};

export const getSpecificationById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    throw new Error("Error fetching specification: " + error.message);
  }
};

export const getAllSpecifications = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    throw new Error("Error fetching specifications: " + error.message);
  }
};
