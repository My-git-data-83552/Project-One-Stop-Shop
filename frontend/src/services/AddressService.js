import axios from 'axios';

const BASE_URL = 'http://localhost:8080/buyer/address';

export const addAddress = async (addressDTO) => {
    try {
        const response = await axios.post(BASE_URL, addressDTO);
        return response.data;
    } catch (error) {
        console.error("Error adding address", error);
        throw error;
    }
};

export const getAllAddresses = async () => {
    try {
        const response = await axios.get(BASE_URL);
        return response.data;
    } catch (error) {
        console.error("Error fetching addresses", error);
        throw error;
    }
};

export const getAddressByUserId = async (userId) => {
    try {
        const response = await axios.get(`${BASE_URL}/user/${userId}`);
        console.log(response);
        return response.data;
    } catch (error) {
        console.error(`Error fetching address with ID  = ${userId}`, error);
        throw error;
    }
};

export const getAddressById = async (id) => {
    try {
        const response = await axios.get(`${BASE_URL}/${id}`);
        console.log(response);
        return response.data;
    } catch (error) {
        console.error(`Error fetching address with ID ${id}`, error);
        throw error;
    }
};
