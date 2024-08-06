import axios from "axios";

const API_URL = "http://localhost:8080/user";

export const login = async (email, password) => {
    debugger;
    try {
        
      const response = await axios.post(`${API_URL}/login`, { email, password });
      return { status: "success", data: response.data };
    } catch (error) {
      return { status: "error", message: error.response?.data || "Login failed" };
    }
  };