import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.REACT_APP_BACKEND
});

if (localStorage.token) axios.defaults.headers['Authorization'] = localStorage.token;

export default instance;