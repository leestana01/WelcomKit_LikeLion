import axiosInstance from "../axiosInstance";

export default async function updateManagerInfo(department, teamId, part, teamMessage, teamLeaderMessage) {
    try {
        const response = await axiosInstance.post(
            `/api/v1/managers/mypage`, 
            {
                'department':department,
                'teamId': teamId,
                'part': part,
                'teamMessage': teamMessage,
                'teamLeaderMessage': teamLeaderMessage
            }
        );
        console.log(`팀 메시지를 설정하는데 성공하였습니다.`, response.data);
    } catch (error) {
        console.error(`팀 메시지를 설정하는데 실패하였습니다.`, error);
    }
};
