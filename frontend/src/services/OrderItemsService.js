import axios from "axios";

const URL = "http://localhost:8080/api/orderItems";

export const SaveOrderItems = async (formData) => {
    try {
        const response = await axios.post(URL, formData);
        console.log('Order items response:', response);
        return response.data; // Ensure the response data is returned
    } catch (er) {
        console.error("Error saving order items:", er);
        throw er;
    }
};
