import StateAPI from "./stateAPI";

class SimpleAPI extends StateAPI
{
    private header: HeadersInit;

    constructor()
    {
        super();
        this.header = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + this.token
        };
    }

    override async post(endpoint: string, payload: object = {}, alert: boolean = false): Promise<object>
    {
        const response: Response = await fetch(this.base_url + endpoint, {
            method: 'POST',
            headers: this.header,
            body: JSON.stringify(payload)
        });
        return this.checkStatus(response, alert);
    }

    override async get(endpoint: string, alert: boolean = false): Promise<object>
    {
        const response: Response = await fetch(this.base_url + endpoint, {
            method: 'GET',
            headers: this.header
        });
        return this.checkStatus(response, alert);
    }

    override async update(endpoint: string, payload: object = {}, alert: boolean = false): Promise<object>
    {
        const response: Response = await fetch(this.base_url + endpoint, {
            method: 'PUT',
            headers: this.header,
            body: JSON.stringify(payload)
        });
        return this.checkStatus(response, alert);
    }

    override async delete(endpoint: string, payload: object = {}, alert: boolean = false): Promise<object>
    {
        const response: Response = await fetch(this.base_url + endpoint, {
            method: 'DELETE',
            headers: this.header,
            body: JSON.stringify(payload)
        });
        return this.checkStatus(response, alert);
    }
}

export default SimpleAPI;