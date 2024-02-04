import axios from "axios";

export default async function updateTeamLeader(managerId) {
    try {
        const response = await axios.post(
            `${process.env.REACT_APP_SERVER}/api/v1/managers/leader/${managerId}`, 
            {},
            {
                headers: {
                    Authorization: `Bearer ${sessionStorage.getItem('jwtToken')}`
                }
            }
        );
        console.log(`${managerId}를 팀장으로 설정하는데 성공하였습니다.`, response.data);
    } catch (error) {
        console.error(`${managerId}를 팀장으로 설정하는데 실패하였습니다.`, error);
    }
};
