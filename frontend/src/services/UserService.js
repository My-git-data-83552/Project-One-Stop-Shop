import axios from "axios";

const API_URL = "http://localhost:8080/user";

export const login = async (email, password) => {
  const body = { email, password };
  try {
    const response = await axios.post(`${API_URL}/login`, body);
    return response;
  } catch (ex) {
    console.log(`exception: `, ex);
  }

  return null;
};

export const RegisterService = async (
  firstName,
  lastName,
  email,
  password,
  phone,
  role
) => {
  try {
    const response = await axios.post(`${API_URL}/register`, {
      firstName,
      lastName,
      email,
      password,
      phoneNumber: phone,
      role,
    });

    if (response.status === 201) {
      return { status: "success" };
    }
  } catch (error) {
    if (error.response) {
      // The server responded with a status code outside the range of 2xx
      return { status: "error", error: error.response.data.message };
    } else if (error.request) {
      // The request was made but no response was received
      return { status: "error", error: "No response from server" };
    } else {
      // Something happened in setting up the request
      return { status: "error", error: "Error setting up request" };
    }
  }
};


export const getAllUsers = async () => {
    try {
      const token=sessionStorage.getItem('token');
      
        const response = await axios.get(`${API_URL}/admin`,{
          headers:{Authorization:`Bearer ${token}`}
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
};

