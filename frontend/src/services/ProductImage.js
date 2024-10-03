import axios from "axios";

const URL = "http://localhost:8080";

export const getCoverImageByProductId = async (productId) => {
  const token = sessionStorage.getItem('token');
  const response = await axios.get(`${URL}/all/productImage/cover/${productId}`, {
    responseType: "arraybuffer",
  }
);
  return `data:image/jpeg;base64,${btoa(
    new Uint8Array(response.data).reduce(
      (data, byte) => data + String.fromCharCode(byte),
      ""
    )
  )}`;
};

export const getAllImages = async () => {
  try {
    const token = sessionStorage.getItem('token');
    const response = await axios.get(`${URL}/all/productImage`);
    return response.data;
  } catch (error) {
    throw new Error("Error fetching cover images");
  }
};

export const saveImage = async (productId, formData) => {
  try {
    const token = sessionStorage.getItem('token');
    const response = await axios.post(`${URL}/admin-seller/productImage/${productId}`, formData, {
      headers: {
        "Content-Type": "multipart/formdata",
        Authorization:`Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
