import Swal from "sweetalert2";

const Error = (title: string): void => {
    Swal.fire({
        toast: true,
        position: 'top-end',
        icon: 'error',
        title: title,
        showCancelButton: false,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
        customClass: {
            title: 'text-xl'
        }
    });
}

export default Error;