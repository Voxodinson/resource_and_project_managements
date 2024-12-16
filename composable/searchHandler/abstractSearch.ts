import type
{
    ISearch
} from './searchInterface';

class AbstractSearch
{
    protected implement: ISearch;

    constructor(implement: ISearch)
    {
        this.implement = implement;
    }

    operation(): Array<Object>
    {
        const result: Array<Object> = this.implement.operationSearch();
        return result;
    }
}

export default AbstractSearch;