import axiosInstance from "../axiosInstance";

export default async function getWelcomeLetters() {
    try {
        const response = await axiosInstance.get(
            `/api/v1/letters/welcome`,
        );
        return response.data
    } catch {
        return false;
    }
};