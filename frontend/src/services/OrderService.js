import axios from "axios";

const URL = "http://localhost:8080/api/orders";

export const SaveOrders = async (formData) => {
  try {
    const response = await axios.post(URL, formData);
    console.log(response);
    return response.data;
  } catch (er) {
    console.log(er);
    throw er;
  }
};

export const getOrderById=async(id)=>{
    try{
        const response = await axios.get(`${URL}/${id}`);
        console.log(response);
        return response.data;
    } catch (er) {
        console.log(er);
        throw er;
      }
};

