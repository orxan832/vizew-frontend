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

export const formatDateUntilSecond = date => {
    const dt = new Date(date);
    return `${(dt.getMonth() + 1).toString().padStart(2, '0')}/${dt.getDate().toString().padStart(2, '0')}/${dt.getFullYear().toString().padStart(4, '0')} ${dt.getHours().toString().padStart(2, '0')}:${dt.getMinutes().toString().padStart(2, '0')}:${dt.getSeconds().toString().padStart(2, '0')}`
}

export const validation = (data, headers) => {
    let access = true
    Object.keys(headers).filter(key => key !== 'created_at' && key !== 'updated_at').map(label => {
        if (data[label] === undefined || data[label] === '') {
            access = false;
            return;
        }
    });
    return access;
}

export const setDataTags = (values, tags) => {
    const tagsArray = [];
    console.log(Date.now());
    console.log(values);
    values.split(',').map(value => tagsArray.push(tags.find(tag => tag.id === Number(value)).tag));
    return tagsArray.toString();
}