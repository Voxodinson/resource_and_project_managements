import Swal from "sweetalert2";

const Success = (title: string): void => {
    Swal.fire({
        toast: true,
        position: 'top-end',
        icon: 'success',
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

export default Success;