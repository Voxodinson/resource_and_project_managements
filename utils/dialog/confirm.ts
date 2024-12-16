import Swal, {
    type SweetAlertResult
} from "sweetalert2";

const Confirm = (title: string, callback: () => void): void => {
    Swal.fire({
        icon: 'question',
        title: title,
        showCancelButton: true,
        reverseButtons: true,
        width: '21rem',
        cancelButtonColor: '#f62e2e',
        confirmButtonColor: '#0cb8fd',
        customClass: {
            title: 'text-xl'
        }
    })
    .then((result: SweetAlertResult): void => {
        if(result.isConfirmed)
        {
            callback && callback();
        }
    });
}

export default Confirm;