import State from "./state";

class Context
{
    private state!: State;

    constructor(state: State)
    {
        this.setState(state);
    }

    private setState(state: State): void
    {
        this.state = state;
        this.state.setContext(this);
    }

    validateText(event: Event): void
    {
        this.state.validateText(event);
    }

    validateEmail(event: Event): void
    {
        this.state.validateEmail(event);
    }

    validateDate(event: Event): void
    {
        this.state.validateDate(event);
    }

    validatePassword(event: Event): void
    {
        this.state.validatePassword(event);
    }

    validateNumber(event: Event): void
    {
        this.state.validateNumber(event);
    }

    validatePhoneNumber(event: Event): void
    {
        this.state.validatePhoneNumber(event);
    }

    validateUsername(event: Event): void
    {
        this.state.validateUsername(event);
    }

    validateValue(target: HTMLSelectElement): void
    {
        this.state.validateValue(target);
    }
}

export default Context;