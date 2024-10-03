import axios from "axios";

const URL = "http://localhost:8080/buyer/orderItems";

export const SaveOrderItems = async (formData) => {
    try {
        const token = sessionStorage.getItem('token');
        const response = await axios.post(URL, formData,{
            headers:{
                Authorization:`Bearer ${token}`,
            }
        });
        return response.data;
    } catch (er) {
        console.error("Error saving order items:", er);
        throw er;
    }
};
