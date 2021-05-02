import axios from 'axios';

//Problem var tokeni gormur deyesen
export const setAuthToken = token => axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

export const getRandomColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const formatDate = date => {
    const dt = new Date(date);
    return `${(dt.getMonth() + 1).toString().padStart(2, '0')}.${dt.getDate().toString().padStart(2, '0')}.${dt.getFullYear().toString().padStart(4, '0')}`
}