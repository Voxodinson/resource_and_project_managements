import {
    useAuthStore
} from "@/store/auth";
import ContextAPI from './contextAPI';
import {
    Success,
    Error
} from "@/utils/dialog";
import type {
    ResponseStatus
} from "@/models/type";

abstract class StateAPI
{
    protected context!: ContextAPI;
    protected token: string | null | undefined = null;
    protected base_url: string = (import.meta.env.VITE_BASE_URL as ImportMetaEnv)+'admin/v1/en/';

    constructor()
    {
        this.token = useCookie('token').value;
    }

    setContextAPI(context: ContextAPI)
    {
        this.context = context;
    }

    private checkError(response: ResponseStatus): void
    {
        if(response.error || response.status !== 'OK')
        {
            Error(response.message);
        }
        else
        {
            Success(response.message);
        }
    }

    private redirectLogin(): any
    {
        const {
            logUserOut } = useAuthStore();
        logUserOut();
        const token = useCookie('token');

        if(!token.value)
        {
            return navigateTo('/login');
        }
    }

    protected async checkStatus(res: Response, alert: boolean): Promise<object | any>
    {
        let response: any = '';

        switch (res.status)
        {
            case 200:
            case 201:
            case 202:
                response = await res.json();
                if(alert) this.checkError(response);
                break;
            case 401:
            case 403:
                console.error(`${res.status} (Unauthorized!)`);
                this.redirectLogin();
                break;
            case 404:
                console.error(`${res.status} (Not Found!)`);
                this.checkError(response);
                break;
            case 409:
                response = await res.json();
                this.checkError(response);
                break;
            case 422:
                response = await res.json();
                this.checkError(response);
                break;
            case 500:
                console.error(`${res.status} (Internal Server Error)`);
                break;
            default:
                console.error(`${res.status} (Unknown Error)`);
                break;
        }
        return response;
    }

    abstract post(endpoint: string, payload?: object, alert?: boolean): object;
    abstract get(endpoint: string, alert?: boolean): object;
    abstract update(endpoint: string, payload?: object, alert?: boolean): object;
    abstract delete(endpoint: string, payload?: object, alert?: boolean): object;
}

export default StateAPI;