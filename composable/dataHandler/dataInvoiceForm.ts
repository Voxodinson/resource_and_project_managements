import type
{
    IGetDataStrategy
} from "./dataInterface";

class GetDataInvoiceForm implements IGetDataStrategy
{
    setData(target: HTMLFormElement, data: object): void {
        throw new Error("Method not implemented.");
    }
    setDataFile(): void
    {
        throw new Error("Method not implemented.");
    }

    getDataFileBase64(event: SubmitEvent, options?: Object): Object
    {
        throw new Error("Method not implemented.");
    }

    getData(event: SubmitEvent): Object
    {
        let data: Object | any = {};
        
        const formData = new FormData(event.target as HTMLFormElement);
        
        return data;
    }
}

export default GetDataInvoiceForm;