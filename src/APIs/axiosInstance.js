import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_SERVER,
    timeout: 5000, // 10000ms = 10초
});
    
axiosInstance.interceptors.request.use(
    config => {
        const token = sessionStorage.getItem('jwtToken');
        if (token) {
            config.headers['Authorization'] = token;
        }
        return config;
    },
    (err) => {
        return Promise.reject(err);
    },
);

export default axiosInstance;