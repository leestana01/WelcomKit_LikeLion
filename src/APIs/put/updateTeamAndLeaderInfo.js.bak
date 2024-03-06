import axiosInstance from "../axiosInstance";

export default async function updateTeamAndLeaderInfo(updates) {
    // try {
    //     const response = await axiosInstance.put(
    //         `/api/v1/managers/info`,
    //         form
    //     );
    //     console.log(`팀 정보를 설정하는데 성공하였습니다.`, response.data);
    // } catch (error) {
    //     console.error(`팀 정보를 설정하는데 실패하였습니다.`, error);
    // }
    if (updates.length > 0) {
        try {
            const response = await axiosInstance.put(
                `/api/v1/managers/info`,
                updates // 이 부분에서 updates 배열을 요청 본문으로 전달
            );
            console.log(`팀 정보를 설정하는데 성공하였습니다.`, response.data);
        } catch (error) {
            console.error(`팀 정보를 설정하는데 실패하였습니다.`, error);
        }
    } else {
        console.error('업데이트할 정보가 없습니다.');
    }
};
