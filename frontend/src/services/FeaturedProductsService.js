import axios from "axios";

const URL = "http://localhost:8080/admin/featuredProducts";
const BASE_URL = "http://localhost:8080";

export const AddFeaturedProduct = async (formData) => {
  try {
    const token = sessionStorage.getItem('token');
    const response = await axios.post(URL, formData, {
      headers: {
        "Content-Type": "multipart/formdata",
        Authorization: `Bearer ${token}`,
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
    const response = await axios.get(`${BASE_URL}/all/featuredProducts`)
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const DeleteFeaturedProduct=async (id)=>{
  try{
    const token = sessionStorage.getItem('token');
    const response = await axios.delete(`${URL}/${id}`, {
      
      headers:{
        Authorization: `Bearer ${token}`,
       } ,
  });
    return response.data;
  }
  catch(error){
    console.log('error in delete fp service react' , error);
    throw error;
  }
};
