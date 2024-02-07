import axiosInstance from "../axiosInstance";

export default async function updateTeamLeader(managerId) {
    try {
        const response = await axiosInstance.post(
            `/api/v1/managers/leader/${managerId}`, 
            {}
        );
        console.log(`${managerId}를 팀장으로 설정하는데 성공하였습니다.`, response.data);
    } catch (error) {
        console.error(`${managerId}를 팀장으로 설정하는데 실패하였습니다.`, error);
    }
};
