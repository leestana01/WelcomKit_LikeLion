import axiosInstance from "../axiosInstance";

export default async function getMyManito() {
    try {
        const response = await axiosInstance.get(
            `/api/v1/users/manito`,
        );
        return response.data
    } catch {
        return false;
    }
};