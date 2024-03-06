import axiosInstance from "../axiosInstance";

export default async function getWelcomeLetter(targetId) {
    try {
        const response = await axiosInstance.get(
            `/api/v1/letters/welcome/${targetId}`,
        );
        return response.data
    } catch {
        return false;
    }
};