import axiosInstance from "../axiosInstance";

export default async function getBabyLions() {
    try {
        const response = await axiosInstance.get(
            `/api/v1/users/babylions`,
        );
        return response.data
    } catch {
        return false;
    }
};