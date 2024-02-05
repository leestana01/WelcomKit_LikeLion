import axios from "axios";

export default async function getWelcomeLetters() {
    try {
        const response = await axios.get(
            `${process.env.REACT_APP_SERVER}/api/v1/letters/welcome`,
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