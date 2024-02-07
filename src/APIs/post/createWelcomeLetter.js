import axiosInstance from "../axiosInstance";

export default async function createWelcomeLetter(targetId, message) {
    try {
        const response = await axiosInstance.post(
            `/api/v1/letters/create/welcome`,
            {
                targetId: targetId,
                message: message
            }
        );
        console.log(`${targetId}에게 메시지 전송을 성공하였습니다.`, response.data);
    } catch (error) {
        console.error(`${targetId}에게 메시지를 전송하지 못했습니다.`, error);
    }
};
