import axiosInstance from "../../axiosInstance";

export default async function selectMyManito(username) {
    try {
        const response = await axiosInstance.post(
            `/api/v1/users/selected-manito`,
            {
                'selectedManito' : username
            }
        );
        console.log(`${username} 를 성공적으로 등록하였습니다.`, response.data);
        return response.data;
    } catch (error) {
        console.error(`${username} 등록에 실패하였습니다.`, error);
    }
};
