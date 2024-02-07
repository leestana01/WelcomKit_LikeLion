import axiosInstance from "../axiosInstance";

export default async function getMyTeammates() {
    try {
        const response = await axiosInstance.get(
            `/api/v1/users/teammates`,
        );
        return response.data;
    } catch {
        return false;
    }
};