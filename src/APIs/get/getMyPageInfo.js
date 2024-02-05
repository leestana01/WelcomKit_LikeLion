import axios from "axios";

export default async function getMyPageInfo() {
    try {
        const response = await axios.get(
            `${process.env.REACT_APP_SERVER}/api/v1/users/mypage`,
            {
                headers : {
                    Authorization: `Bearer ${sessionStorage.getItem('jwtToken')}`
                }
            }
        );
        return response.data
    } catch {
        return false;
    }
};