import {
    Xmark
} from "@/components/icons/";
import {
    AddImage
} from '@/assets/images/';
import {
    createApp
} from 'vue';

const XmarkWrapper = defineComponent({
    render()
    {
        return h(Xmark);
    }
});

class ImageHandler
{
    private removeIfSetImage(inputElement: HTMLInputElement, isBase64Url: boolean): void
    {
        if(!isBase64Url)
        {
            ['required', 'role'].forEach((attr: string) => {
                inputElement.removeAttribute(attr);
            });
        }
    }

    private addIfSetChoose(inputElement: HTMLInputElement): void
    {
        inputElement.setAttribute('required', 'true');
        inputElement.setAttribute('role', 'input');
    }

    private isBase64URL(image: string): boolean
    {
        const regex = /^data:(?:[a-zA-Z]*\/[a-zA-Z]*|text\/plain)(?:;charset=[a-zA-Z0-9-]+)?(;base64)?,/;
        return regex.test(image);
    }

    private triggerClick(inputElement: HTMLInputElement): void
    {
        inputElement.onchange = (event) => {
            const file: File | undefined = (event.target as HTMLInputElement)?.files?.[0];
            if(file)
            {
                const reader: FileReader = new FileReader();
                reader.onload = () => {
                    this.setImage(inputElement, reader.result as string);
                }
                reader.readAsDataURL(file);
            }
        }

        const event: MouseEvent = new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
            view: window
        });
        inputElement.dispatchEvent(event);
    }

    private setImageChooser(divElement: HTMLDivElement, inputElement: HTMLInputElement): void
    {
        divElement.innerHTML = '';

        const divImage: HTMLDivElement = document.createElement('div') as HTMLDivElement;
        divImage.className = 'flex items-center justify-center w-full h-full relative';

        const imageElement: HTMLImageElement = document.createElement('img') as HTMLImageElement;
        imageElement.src = AddImage;
        imageElement.alt = 'add photo';
        imageElement.loading = 'lazy';
        imageElement.className = 'w-[30px] h-[30px]';

        divImage.appendChild(imageElement);

        divImage.onclick = () => {
            this.triggerClick(inputElement);
        }

        divElement.appendChild(divImage);
        this.addIfSetChoose(inputElement);
    }
    
    protected setImage(inputElement: HTMLInputElement, image: string): void
    {
        const divElement = inputElement.nextElementSibling as HTMLDivElement;
        if(!divElement) return;

        divElement.innerHTML = '';

        const imageElement: HTMLImageElement = document.createElement('img') as HTMLImageElement;
        imageElement.src = image || '';
        imageElement.alt = 'photo';
        imageElement.loading = 'lazy';
        imageElement.className = 'w-full h-full object-scale-down';

        const app = createApp(XmarkWrapper);
        const xmarkInstance = app.mount(document.createElement('div'));

        const divRemove: HTMLDivElement = document.createElement('div') as HTMLDivElement;
        divRemove.className = 'absolute top-0 right-0 bg-gray-200 p-1 cursor-pointer';
        divRemove.appendChild(xmarkInstance.$el);

        divRemove.onclick = () => {
            inputElement.value = '';
            this.setImageChooser(divElement, inputElement);
        }

        inputElement.dataset.image = image || '';
        divElement.append(imageElement, divRemove);

        this.removeIfSetImage(inputElement, this.isBase64URL(image));
    }
}

export default ImageHandler;