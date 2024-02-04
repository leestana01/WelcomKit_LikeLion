import axios from "axios";

export async function updateProfileImage(file) {
    // FormData 객체 생성
    const formData = new FormData();
    formData.append('image', file);

    try {
        const response = await axios.post(
            `${process.env.REACT_APP_SERVER}/api/v1/users/profile-img`,
            formData,
            {
                headers: {
                    Authorization: `Bearer ${sessionStorage.getItem('jwtToken')}`,
                    'Content-Type': 'multipart/form-data',
                },
            }
        );
        console.log(`프로필 이미지 변경에 성공하였습니다.`, response.data);
    } catch (error) {
        console.error(`프로필 이미지 변경에 실패하였습니다.`, error);
    }
};

export async function updateProfileMiniImage(file) {
    // FormData 객체 생성
    const formData = new FormData();
    formData.append('image', file);

    try {
        const response = await axios.post(
            `${process.env.REACT_APP_SERVER}/api/v1/users/profile-img`,
            formData,
            {
                headers: {
                    Authorization: `Bearer ${sessionStorage.getItem('jwtToken')}`,
                    'Content-Type': 'multipart/form-data',
                },
            }
        );
        console.log(`미니 프로필 이미지 변경에 성공하였습니다.`, response.data);
    } catch (error) {
        console.error(`미니 프로필 이미지 변경에 실패하였습니다.`, error);
    }
};