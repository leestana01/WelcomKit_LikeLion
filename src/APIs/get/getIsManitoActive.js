import axiosInstance from "../axiosInstance";

export default async function getIsManitoActive() {
    try {
        const response = await axiosInstance.get(
            `/api/v1/settings/active`,
        );
        return response.data
    } catch {
        return false;
    }
};