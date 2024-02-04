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
        console.log(response.data);
        return response.data
    } catch {
        return false;
    }
};