import StateAPI from "./stateAPI";

class ContextAPI
{
    private state!: StateAPI;

    constructor(state: StateAPI)
    {
        this.setStateAPI(state);
    }

    private setStateAPI(state: StateAPI): void
    {
        this.state = state;
        this.state.setContextAPI(this);
    }

    async post(endpoint: string, alert?: boolean, payload?: object): Promise<object>
    {
        return this.state?.post(endpoint, payload, alert);
    }

    async get(endpoint: string, alert?: boolean): Promise<object>
    {
        return this.state?.get(endpoint, alert);
    }

    async update(endpoint: string, alert?: boolean, payload?: object): Promise<object>
    {
        return this.state?.update(endpoint, payload, alert);
    }

    async delete(endpoint: string, alert?: boolean, payload?: object): Promise<object>
    {
        return this.state?.delete(endpoint, payload, alert);
    }
}

export default ContextAPI;