import axiosInstance from "../axiosInstance";

export default async function myInfo() {
    try {
        const response = await axiosInstance.get(
            `/api/v1/users/myinfo`
        );

        
        return response.data
    } catch {
        return false;
    }
};