import type
{
    ISearch
} from "./searchInterface";

class MultipleSearch implements ISearch
{
    operationSearch(): Array<Object>
    {
        throw new Error("Method not implemented.");
    }
}

export default MultipleSearch;