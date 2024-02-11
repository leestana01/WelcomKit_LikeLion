import axiosInstance from "../../axiosInstance";

export default async function getManitoLetters() {
    try {
        const response = await axiosInstance.get(
            `/api/v1/letters/manito`,
        );
        return response.data
    } catch {
        return false;
    }
};