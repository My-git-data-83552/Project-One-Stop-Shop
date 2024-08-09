import axios from 'axios';

const API_URL = 'http://localhost:8080/api/productImage';

export const getCoverImageByProductId = async (productId) => {
  const response = await axios.get(`${API_URL}/cover/${productId}`, { responseType: 'arraybuffer' });
  return `data:image/jpeg;base64,${btoa(
    new Uint8Array(response.data).reduce((data, byte) => data + String.fromCharCode(byte), '')
  )}`;
};

export const getAllImages = async () => {
  try {
    const response = await axios.get(`${API_URL}/all`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching cover images');
  }
};
