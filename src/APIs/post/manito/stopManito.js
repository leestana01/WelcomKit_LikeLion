import axiosInstance from "../../axiosInstance";

export default async function stopManito() {
    try {
        const response = await axiosInstance.post(
            `/api/v1/settings/stop`, 
            {}
        );
        console.log(`마니또 중지(발표)에 성공하였습니다.`, response.data);
    } catch (error) {
        console.error(`마니또 중지(발표)에 실패하였습니다`, error);
    }
};
