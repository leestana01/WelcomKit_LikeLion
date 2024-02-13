import axiosInstance from "../axiosInstance";

export default async function getManagersInfo() {
    try {
        const response = await axiosInstance.get(
            `/api/v1/managers/info/managers`,
        );
        return response.data
    } catch {
        return false;
    }
};