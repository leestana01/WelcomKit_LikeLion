import axiosInstance from "../axiosInstance";

export default async function updatePassword(password) {
    try {
        const response = await axiosInstance.post(
            `${process.env.REACT_APP_SERVER}/api/v1/users/password`, 
            {
                'password':password
            }
        );
        console.log(`비밀번호 변경에 성공하였습니다.`, response.data);
    } catch (error) {
        console.error(`비밀번호 변경에 실패하였습니다.`, error);
    }
};
