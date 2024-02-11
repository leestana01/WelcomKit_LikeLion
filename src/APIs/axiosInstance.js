import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_SERVER,
    timeout: 5000, // 10000ms = 10초
});
    
axiosInstance.interceptors.request.use(
    (config) => {
        config.headers['Authorization'] = sessionStorage.getItem('jwtToken');
        return config;
    },
    (err) => {
        return Promise.reject(err);
    },
);

export default axiosInstance;