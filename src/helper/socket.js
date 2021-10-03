import io from 'socket.io-client';
let socket;

export const initSocket = () => {
    socket = io(process.env.REACT_APP_BACKEND);
    socket.on('connection');
    return socket;
}