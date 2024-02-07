import axiosInstance from "../../axiosInstance";

export default async function resetManito() {
    try {
        const response = await axiosInstance.post(
            `/api/v1/settings/reset`, 
            {}
        );
        console.log(`마니또 하드리셋에 성공하였습니다.`, response.data);
    } catch (error) {
        console.error(`마니또 하드리셋에 실패하였습니다`, error);
    }
};
