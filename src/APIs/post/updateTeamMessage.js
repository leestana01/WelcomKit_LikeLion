import axiosInstance from "../axiosInstance";

export default async function updateTeamMessage(message) {
    try {
        const response = await axiosInstance.post(
            `/api/v1/users/team-message`, 
            {
                'message':message
            }
        );
        console.log(`팀 메시지를 설정하는데 성공하였습니다.`, response.data);
    } catch (error) {
        console.error(`팀 메시지를 설정하는데 실패하였습니다.`, error);
    }
};
