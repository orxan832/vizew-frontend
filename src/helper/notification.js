import { store } from 'react-notifications-component';

const notification = {
    insert: "top",
    container: "bottom-center",
    animationIn: ["animated", "zoomIn"],
    animationOut: ["animated", "zoomOut"],
    dismiss: {
        duration: 5000,
        onScreen: true,
        pauseOnHover: true
    }
}

export const success = message => {
    store.addNotification({
        ...notification,
        title: 'Uğurlu :)',
        type: 'success',
        message: message
    })
}

export const error = message => {
    store.addNotification({
        ...notification,
        title: 'Xəta!',
        type: 'danger',
        message: message
    })
}

export const info = message => {
    store.addNotification({
        ...notification,
        title: 'Bildiriş!',
        type: 'info',
        message: message
    })
}