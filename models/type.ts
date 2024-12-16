import type {
    JSX
} from "vue/jsx-runtime";

type ColumnKey = string | ((item: object, index: number) => JSX.Element) | ((item: object, index: number) => VNode);

interface Column
{
    title: string;
    class?: string;
    key?: ColumnKey;
}

interface ResponseStatus
{
    error: boolean,
    status: string,
    message: string,
    errors: object,
    data: object | null
}

interface DataChild
{
    status: string,
    data: Array<Object> | Object,
    page_no: number,
    per_page: number,
    total: number,
    total_page: number
}

interface Tab
{
    label: string
}

interface Items
{
    [key: string]: string | number;
}

interface Options
{
    [key: string]: Items[]
}

export type
{
    Column,
    DataChild,
    Tab,
    Items,
    Options,
    ResponseStatus
};