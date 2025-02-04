import axios from 'axios';
import { UserData } from '../reduser/rreducerUser';

const API_URL = "http://localhost:3000/api/user";

// עדכון הפונקציה להתחברות כך שתתמוך בנתונים החדשים
export const loginUser = async (email: string, password: string) => {
  try {
    console.log("loginUser", email, password);
    
    const response = await axios.post(`${API_URL}/login`, { email, password });
    return response.data.user;
  } catch (error) {
    console.error("Login failed", error);
    throw error;
  }
};

// עדכון הפונקציה לרישום כך שתשלח את כל הנתונים החדשים
export const registerUser = async (userData: UserData) => {
  console.log("registerUser", userData);
  
  try {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;
  } catch (error) {
    console.error("Registration failed", error);
    throw error;
  }
};

// עדכון הפונקציה לעדכון משתמש כך שתשלח את הנתונים המלאים כולל כתובת וטלפון
export const updateUser = async (id: number, userData: UserData) => {
  console.log("updateUser", id, userData);
  
  try {
    const response = await axios.put(`${API_URL}`, userData, { headers: { 'user-id': id } });
    console.log(response.data);
    
    return response.data;
  } catch (error) {
    console.error("Update failed", error);
    throw error;
  }
};
