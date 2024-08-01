import axios from "axios";

const CATEGORY_URL = 'http://localhost:8080/api/products/categories'; // Adjust the URL as needed

export const getCategories = async () => {
    try {
        const response = await axios.get(CATEGORY_URL);
        return response.data;
    } catch (error) {
        console.error('Error getting categories:', error);
        throw error;
    }
};
