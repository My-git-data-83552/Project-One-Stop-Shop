import axios from 'axios';

const URL = "http://localhost:8080/buyer/cart";

export const purchaseAllProducts = async (userId, addressId) => {
  try {
    const response = await axios.post(`${URL}/purchase`, null, {
      params: { userId, addressId },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const addProductToCart = async (cartItemDTO) => {
    const requestBody = {
        userId: cartItemDTO.userId,
        quantity: cartItemDTO.quantity,
    };

    try {
        console.log(cartItemDTO);
        console.log('cart item dto in service of react ', requestBody);
        const response = await axios.post(`${URL}/add/${cartItemDTO.productId}`, requestBody);
        console.log('response - ', response);
        console.log('response.data - ', response.data);
        return response.data;
    } catch (error) {
        console.log('axios error - ', error);
    }
};

export const getCartItems = async (userId) => {
    try {
      const response = await axios.get(`${URL}/user/${userId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching cart items:', error);
      throw error;
    }
  };


// export const addProductToCart =async (cartItemDTO) => {
//     // return axios.post(`${URL}/add/${cartItemDTO.productId}`, cartItemDTO);
//     const requestBody = {       
//         userId: cartItemDTO.userId,
//         quantity: cartItemDTO.quantity,
//     };
//     try{
//         console.log(cartItemDTO);
//         console.log('cart item dto in service of react ' , requestBody);
//     const response=await axios.post(`${URL}/add/${cartItemDTO.productId}`,requestBody);
//     console.log('response - ',response);
//     console.log('response - ',response.data);
//     return response.data;
//     }catch(er){
//         console.log('axios error - ',er);    }
    
// };

