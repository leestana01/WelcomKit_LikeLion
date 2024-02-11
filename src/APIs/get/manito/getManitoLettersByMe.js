import axiosInstance from "../../axiosInstance";

export default async function getManitoLettersByMe() {
    try {
        const response = await axiosInstance.get(
            `/api/v1/letters/manito/mine`,
        );
        return response.data
    } catch {
        return false;
    }
};