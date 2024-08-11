import axios from "axios";

const URL = "http://localhost:8080/admin/featuredProducts";

export const AddFeaturedProduct = async (formData) => {
  try {
    const response = await axios.post(URL, formData, {
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

export const FetchFeaturedProducts = async () => {
  try {
    const response = await axios.get(URL);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const DeleteFeaturedProduct=async (id)=>{
  try{
    const response = await axios.delete(`${URL}/${id}`);
    return response.data;
  }
  catch(error){
    console.log('error in delete fp service react' , error);
    throw error;
  }
};
