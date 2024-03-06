import axiosInstance from "../axiosInstance";

export default async function getBabyLionsInfo() {
    try {
        const response = await axiosInstance.get(
            `/api/v1/managers/info/babylions`,
        );
        return response.data
    } catch {
        return false;
    }
};