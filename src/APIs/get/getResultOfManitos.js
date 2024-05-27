import axiosInstance from "../axiosInstance";

export default async function getResultOfManitos() {
    try {
        const response = await axiosInstance.get(
            `/api/v1/settings/result`,
        );
        return response.data
    } catch {
        return false;
    }
};