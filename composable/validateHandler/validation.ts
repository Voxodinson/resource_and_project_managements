import State from "./state";

class Validation extends State
{
    private checkElementIsExist(element: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement): void
    {
        const smallEl: HTMLElement = element.nextElementSibling as HTMLElement;

        if(smallEl)
        {
            smallEl.textContent = element.title || element.ariaDescription || element.ariaInvalid;
            smallEl.className = 'error text-red-500 text-end';
        }
        else
        {
            const smallElement: HTMLElement = document.createElement('small') as HTMLElement;
            (element.parentElement as HTMLDivElement).append(smallElement);
            smallElement.textContent = element.title || element.ariaDescription || element.ariaInvalid;
            smallElement.className = 'error text-red-500 text-end';
        }
        
        element.reportValidity();
    }

    private removeElementIfExist(element: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement): void
    {
        const smallEl: HTMLElement = element.nextElementSibling as HTMLElement;
        if(smallEl) smallEl.remove();
        element.reportValidity();
    }

    private isValidOrNot(value: boolean, element: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement): void
    {
        if(value)
        {
            this.removeElementIfExist(element);
        }
        else
        {
            this.checkElementIsExist(element);
        }
    }

    private getTarget(targetElement: Event | HTMLSelectElement): HTMLSelectElement
    {
        if(targetElement instanceof HTMLSelectElement)
        {
            return targetElement as HTMLSelectElement;
        }
        else
        {
            return targetElement.target as HTMLSelectElement;
        }
    }

    override validateText(event: Event): void
    {
        const inputText: HTMLInputElement | HTMLTextAreaElement = event.target as HTMLInputElement | HTMLTextAreaElement;
        const valid = inputText.validity.valid;
        this.isValidOrNot(valid, inputText);
    }

    override validateEmail(event: Event): void
    {
        const inputEmail: HTMLInputElement = event.target as HTMLInputElement;
        const valid = inputEmail.validity.valid;
        this.isValidOrNot(valid, inputEmail);
    }

    override validateDate(event: Event): void
    {
        const inputDate: HTMLInputElement = event.target as HTMLInputElement;
        const valid = inputDate.validity.valid;
        this.isValidOrNot(valid, inputDate);
    }

    override validatePassword(event: Event): void
    {
        const inputPassword: HTMLInputElement = event.target as HTMLInputElement;
        const valid = inputPassword.validity.valid;
        this.isValidOrNot(valid, inputPassword);
    }

    override validateNumber(event: Event): void
    {
        const inputNumber: HTMLInputElement = event.target as HTMLInputElement;
        const valid = inputNumber.validity.valid;
        this.isValidOrNot(valid, inputNumber);
    }

    override validatePhoneNumber(event: Event): void
    {
        const inputPhoneNumber: HTMLInputElement = event.target as HTMLInputElement;
        const valid = inputPhoneNumber.validity.valid;
        this.isValidOrNot(valid, inputPhoneNumber);
    }

    override validateUsername(event: Event): void
    {
        const inputUsername: HTMLInputElement = event.target as HTMLInputElement;
        const valid = inputUsername.validity.valid;
        this.isValidOrNot(valid, inputUsername);
    }

    override validateValue(target: HTMLSelectElement): void
    {
        const selectElement: HTMLSelectElement = this.getTarget(target) as HTMLSelectElement;
        const valid = selectElement.validity.valid;
        this.isValidOrNot(valid, selectElement);
    }
}

export default Validation;