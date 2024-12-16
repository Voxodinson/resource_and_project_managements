interface IGetDataStrategy
{
    getData(event: SubmitEvent, options?: object): object;
    getDataFileBase64(event: SubmitEvent, options?: object): object;
    setDataFile(target: HTMLFormElement, data: object): void;
    setData(target: HTMLFormElement, data: object): void;
}

export type
{
    IGetDataStrategy
};