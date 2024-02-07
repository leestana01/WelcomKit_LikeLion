import axiosInstance from "../axiosInstance";

export default async function getUserCountByPart() {
    try {
        const response = await axiosInstance.get(
            `/api/v1/managers/users`
        );
        return response.data
    } catch {
        return false;
    }
};