import axiosInstance from "../axiosInstance";

export default async function getMyTeammatesForManager() {
    try {
        const response = await axiosInstance.get(
            `/api/v1/managers/teammates`,
        );
        return response.data
    } catch {
        return false;
    }
};