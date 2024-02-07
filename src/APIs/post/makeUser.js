import axiosInstance from "../axiosInstance";

export default async function makeUser(username, password, department, part, teamId) {
    try {
        const response = await axiosInstance.post(
            `/api/v1/auth/join`,
            {
                name: username,
                password: password,
                department: department,
                part: part,
                // userType: "ROLE_USER",
                teamId: teamId
            }
        );
        console.log(`${username} 생성에 성공하였습니다.`, response.data);
    } catch (error) {
        console.error(`${username} 생성에 실패하였습니다.`, error);
    }
};
