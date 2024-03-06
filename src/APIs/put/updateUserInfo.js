import axiosInstance from "../axiosInstance";

export async function putManagerInfo(updates) {
    const api_location = `/api/v1/managers/info/managers`
    await updateUserInfo(updates, api_location)
}

export async function putBabyLionInfo(updates) {
    const api_location = `/api/v1/managers/info/babylions`
    await updateUserInfo(updates, api_location)
}

async function updateUserInfo(updates, api_location) {
    if (updates.length > 0) {
        try {
            const response = await axiosInstance.put(
                api_location,
                updates
            );
            console.log(`팀 정보를 설정하는데 성공하였습니다.`, response.data);
        } catch (error) {
            console.error(`팀 정보를 설정하는데 실패하였습니다.`, error);
        }
    } else {
        console.error('업데이트할 정보가 없습니다.');
    }
};
