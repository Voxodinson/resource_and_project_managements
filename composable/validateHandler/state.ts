import Context from "./context";

abstract class State
{
    protected context!: Context;

    setContext(context: Context)
    {
        this.context = context;
    }

    abstract validateText(event: Event): void;
    abstract validateEmail(event: Event): void;
    abstract validateDate(event: Event): void;
    abstract validatePassword(event: Event): void;
    abstract validateNumber(event: Event): void;
    abstract validatePhoneNumber(event: Event): void;
    abstract validateUsername(event: Event): void;
    abstract validateValue(target: HTMLSelectElement): void;
}

export default State;