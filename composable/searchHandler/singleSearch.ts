import type
{
    ISearch
} from "./searchInterface";

class SingleSearch implements ISearch
{
    private items: Array<Object> = [];
    private query: string = '';
    private key: string = '';

    receiver(items: Array<Object>, key: string, query: string): void
    {
        this.items = items;
        this.query = query;
        this.key = key;
    }

    operationSearch(): Array<Object>
    {
        const result: Array<Object> = this.items.filter((item: Object) => {
            return (item[this.key as keyof Object] as unknown as string)
                .toLowerCase()
                .includes(this.query.toLowerCase());
        }) || [];
        return result;
    }
}

export default SingleSearch;