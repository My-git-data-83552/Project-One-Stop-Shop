import axios from "axios";

const BASE_URL = "http://localhost:8080";
const CATEGORY_URL = "http://localhost:8080/api/categories";

export const addProduct = async (product) => {
  try {
    const token = sessionStorage.getItem('token');
    const userId=sessionStorage.getItem('userId');
    const response = await axios.post(`${BASE_URL}/admin-seller/${userId}`, product,{
      headers:{
          Authorization:`Bearer ${token}`,
      }
  });
    return response.data;
  } catch (error) {
    console.error("Error adding product:", error);
    throw error;
  }
};

export const getProductById = async (id) => {
  try {
    const token = sessionStorage.getItem('token');
    const response = await axios.get(`${BASE_URL}/all/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error getting product by ID:", error);
    throw error;
  }
};

export const getProductByUserId=async ()=>{
  try{
    const userId=sessionStorage.getItem("userId");
    const response=await axios.get(`${BASE_URL}/all/user/${userId}`);
    return response.data;
  }catch(error){
    console.log(error);
    throw error;
  }
}

export const getAllProducts = async () => {
  try {
    const token = sessionStorage.getItem('token');
    const response = await axios.get(`${BASE_URL}/all`);
    return response.data;
  } catch (error) {
    console.error("Error getting all products:", error);
    throw error;
  }
};

export const getCategories = async () => {
  try {
    const token = sessionStorage.getItem('token');
    const response = await axios.get(CATEGORY_URL);
    return response.data;
  } catch (error) {
    console.error("Error getting categories:", error);
    throw error;
  }
};

// export const EditProduct = async (product, id) => {
//   try {
//     const token = sessionStorage.getItem('token');
//     const response = await axios.put(`${BASE_URL}/admin-seller/${id}`, product,{
//       headers:{
//           Authorization:`Bearer ${token}`,
//       }
//   });
//     return response.data;
//   } catch (error) {
//     console.log(error);
//     throw error;
//   }
// };


export const editProduct = async (id,product) => {
  try {
    const token = sessionStorage.getItem('token');
    const response = await axios.put(`${BASE_URL}/admin-seller/${id}`, product,{
      headers:{
          Authorization:`Bearer ${token}`,
      }
  });
    return response.data;
  } catch (error) {
    console.error("Error updating product:", error.response ? error.response.data : error.message);
    throw error;
  }
};



export const deleteProduct = async (id) => {
  try {
    const token = sessionStorage.getItem('token');
    const response = await axios.put(`${BASE_URL}/admin-seller/delete/${id}`,null,{
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
