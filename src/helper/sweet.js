import swal from 'sweetalert';

export const sweetSuccess = message => {
    swal({
        title: "Uğurlu!",
        text: message,
        icon: "success",
    });
}

export const sweetError = message => {
    swal({
        title: "Xəta!",
        text: message,
        icon: "error",
    });
}

export const sweetInfo = message => {
    swal({
        title: "Bildiriş!",
        text: message,
        icon: "info",
    });
}

export const sweetConfirm = (func, text = 'Dəyişikliklər yadda saxlandıqdan sonra bərpa olunmayacaq!') => {
    swal({
        title: "Əminsinizmi?",
        text,
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
        .then((confirm) => {
            if (confirm) {
                func();
            }
        });
}