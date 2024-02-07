import axiosInstance from "../../axiosInstance";

export default async function startManito() {
    try {
        const response = await axiosInstance.post(
            `/api/v1/settings/start`, 
            {}
        );
        console.log(`마니또 설정에 성공하였습니다.`, response.data);
    } catch (error) {
        console.error(`마니또 설정에 실패하였습니다`, error);
    }
};
