import axios from "axios";
import axiosInstance from "../axiosInstance";

export async function login(username, password) {
    try {
        const response = await axios.post(
            `${process.env.REACT_APP_SERVER}/api/v1/auth/login`, 
            { 'name' : username, 'password' : password }
        );
        const { jwtToken, role } = response.data;
        sessionStorage.setItem('jwtToken', `Bearer ${jwtToken}`);
        sessionStorage.setItem('role', role);
        return true;
    } catch {
        return false;
    }
};

export const logout = () => {
    sessionStorage.removeItem('role');
    delete axiosInstance.defaults.headers.common['Authorization'];
};