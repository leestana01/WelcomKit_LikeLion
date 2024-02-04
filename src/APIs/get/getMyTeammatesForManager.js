import axios from "axios";

export default async function getMyTeammatesForManager() {
    try {
        const response = await axios.get(
            `${process.env.REACT_APP_SERVER}/api/v1/managers/teammates`,
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