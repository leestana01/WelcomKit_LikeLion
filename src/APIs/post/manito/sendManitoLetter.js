import axiosInstance from "../../axiosInstance";

export default async function sendManitoLetter(message) {
    try {
        const response = await axiosInstance.post(
            `/api/v1/letters/create/manito`, 
            { "message" : message}
        );
        console.log(`마니또 설정에 성공하였습니다.`, response.data);
    } catch (error) {
        console.error(`마니또 설정에 실패하였습니다`, error);
    }
};
