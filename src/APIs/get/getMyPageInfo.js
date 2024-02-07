import axiosInstance from "../axiosInstance";

export default async function getMyPageInfo() {
    try {
        const response = await axiosInstance.get(
            `/api/v1/users/mypage`,
        );
        return response.data
    } catch {
        return false;
    }
};