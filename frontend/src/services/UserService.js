import axios from "axios";

const API_URL = "http://localhost:8080/user";

export const LoginService = async (username, password) => {
    debugger;
    try {
        
      const response = await axios.post(`${API_URL}/login`, { username, password });
      return { status: "success", data: response.data };
    } catch (error) {
      return { status: "error", message: error.response?.data || "Login failed" };
    }
  };

  export const RegisterService=async(user)=>{
    try {
        
      const response = await axios.post(`${API_URL}/register`, { user});
      return { status: "success", data: response.data };
    } catch (error) {
      return { status: "error", message: error.response?.data || "Login failed" };
    }
  };