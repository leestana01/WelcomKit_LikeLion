import axiosInstance from "../axiosInstance";

export default async function getAllUsers() {
    try {
        const response = await axiosInstance.get(
            `/api/v1/users/users`,
        );
        return response.data
    } catch {
        return false;
    }
};