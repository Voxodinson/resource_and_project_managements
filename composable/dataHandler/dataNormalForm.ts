import {
    ImageHandler
} from "../imageHandler";
import type {
    IGetDataStrategy
} from './dataInterface';

class GetDataNormalForm extends ImageHandler implements IGetDataStrategy
{
    private removeHiddenName(form: HTMLFormElement): HTMLFormElement
    {
        form.querySelectorAll('input[type=\'hidden\']').forEach(input => {
            input.remove();
        })
        return form;
    }

    private getBase64(form: HTMLFormElement, key: string): string
    {
        const base64: string = (form.querySelector(`[name='${key}']`) as HTMLInputElement).dataset.image as string;
        return base64;
    }

    private onResetForm(event: Event): void
    {
        const form: HTMLFormElement = event.target as HTMLFormElement;

        form.addEventListener('reset',() => {
            const inputList: NodeListOf<Element> = form.querySelectorAll('[role=\'input\']') || null;

            if(inputList)
            {
                let timeout = setTimeout(() => {
                    inputList.forEach((input: Element): void => {
                        if(input.tagName === 'SELECT')
                        {
                            input.dispatchEvent(new Event('change',{
                                bubbles: true,
                                cancelable: false
                            }));
                        }
                    });
                    clearTimeout(timeout);
                },30);
            }
        });
    }

    getData(event: SubmitEvent): object
    {
        let data: {
            [key: string]: string | number | any
        } = {};
        const formData: FormData = new FormData(this.removeHiddenName(event.target as HTMLFormElement) as HTMLFormElement);
        
        for(const [key, value] of formData.entries())
        {
            data[key] = value;
        }
        this.onResetForm(event);
        return data;
    }

    getDataFileBase64(event: SubmitEvent): object
    {
        let data: {
            [key: string]: string | number | any
        } = {};
        const form: HTMLFormElement = event.target as HTMLFormElement;
        const formData: FormData = new FormData(form);

        for(const [key, value] of formData.entries())
        {
            if(value instanceof File)
            {
                data[key] = this.getBase64(form, key);
            }
            else
            {
                data[key] = value;
            }
        }
        this.onResetForm(event);
        return data;
    }

    setDataFile(target: HTMLFormElement, data: Record<string, any>): void
    {
        const inputList: NodeListOf<Element> = target.querySelectorAll('[role=\'input\']');

        inputList.forEach((el: Element): void => {
            const inputElement: HTMLInputElement = el as HTMLInputElement;
            const name: string = inputElement.name as string;

            if(inputElement.type === 'file')
            {
                this.setImage(inputElement, data['image_url']);
            }
            else if(inputElement.tagName === 'SELECT')
            {
                inputElement.value = data[name];
                const event: MouseEvent = new MouseEvent('change', {
                    bubbles: true,
                    cancelable: true,
                    view: window
                });
                inputElement.dispatchEvent(event);
            }
            else
            {
                inputElement.value = data[name];
            }
        });
    }

    setData(target: HTMLFormElement, data: Record<string, any>): void
    {
        const inputList: NodeListOf<Element> = target?.querySelectorAll('[role=\'input\']') || null;
        
        if(inputList)
        {
            inputList.forEach((el: Element): void => {
                const inputElement: HTMLInputElement = el as HTMLInputElement;
                const name: string = inputElement.name as string;
    
                if(inputElement.tagName === 'SELECT')
                {
                    inputElement.value = data[name];
                    const event: MouseEvent = new MouseEvent('change', {
                        bubbles: true,
                        cancelable: true,
                        view: window
                    });
                    inputElement.dispatchEvent(event);
                }
                else
                {
                    inputElement.value = data[name];
                }
            });
        }
    }
}

export default GetDataNormalForm;