import axios from "axios";

const URL = "http://localhost:8080/api/productImage";

export const getCoverImageByProductId = async (productId) => {
  const response = await axios.get(`${URL}/cover/${productId}`, {
    responseType: "arraybuffer",
  });
  return `data:image/jpeg;base64,${btoa(
    new Uint8Array(response.data).reduce(
      (data, byte) => data + String.fromCharCode(byte),
      ""
    )
  )}`;
};

export const getAllImages = async () => {
  try {
    const response = await axios.get(`${URL}/all`);
    return response.data;
  } catch (error) {
    throw new Error("Error fetching cover images");
  }
};

export const saveImage = async (productId, formData) => {
  try {
    const response = await axios.post(`${URL}/${productId}`, formData, {
      headers: {
        "Content-Type": "multipart/formdata",
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
