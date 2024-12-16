import type {
    IGetDataStrategy
} from "./dataInterface";

class GetDataContext
{
    private strategy: IGetDataStrategy;

    constructor(strategy: IGetDataStrategy)
    {
        this.strategy = strategy;
    }

    setStrategy(strategy: IGetDataStrategy): void
    {
        this.strategy = strategy;
    }

    getDataForm(event: SubmitEvent): object
    {
        const result: Object = this.strategy.getData(event) as Object;
        return result;
    }

    getDataFormFileBase64(event: SubmitEvent): object
    {
        const result: Object = this.strategy.getDataFileBase64(event) as Object;
        return result;
    }

    setDataWithFile(target: HTMLFormElement, data: object): void
    {
        this.strategy.setDataFile(target, data);
    }

    setData(target: HTMLFormElement, data: object): void
    {
        this.strategy.setData(target, data);
    }
}

export default GetDataContext;