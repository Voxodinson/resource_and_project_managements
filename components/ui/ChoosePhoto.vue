<template>
    <input
        ref="input"
        type="file"
        :name="name"
        :accept="accept"
        :id="useId()"
        class="data-input absolute h-[2px] w-[2px] -z-10 outline-none overflow-hidden m-0 p-0 bg-transparent border-0"
        :tabindex="0"
        :data-image="image"
        role="input"
        required/>
    <div
        role="image"
        @drop.prevent="(event: Event): void => {
            handleDrop(event);
        }"
        @paste.prevent="(event: Event): void => {
            handlePaste(event as ClipboardEvent);
        }"
        @mouseenter="(event: Event): void => {
            const target: HTMLDivElement = (event.target as HTMLElement).closest('[role=\'image\']') as HTMLDivElement;
            if(target)
            {
                target.contentEditable = 'true';
            }
        }"
        @mouseleave="(event: Event): void => {
            const target: HTMLDivElement = (event.target as HTMLElement).closest('[role=\'image\']') as HTMLDivElement;
            if(target)
            {
                target.contentEditable = 'false';
            }
        }"
        @input.prevent
        @dragover.prevent
        @keydown.prevent
        class="relative w-full h-full focus:outline-none">
        <div
            v-if="image === null"
            @click="triggerClick"
            class="flex items-center justify-center w-full h-full relative cursor-pointer">
            <img
                src="@/assets/images/addImage.png"
                alt="add photo"
                loading="lazy"
                class="w-[30px] h-[30px]"/>
        </div>
        <div
            v-else
            class="relative w-full h-full">
            <img
                :src="image"
                alt="photo"
                loading="lazy"
                class="data-set w-full h-full object-scale-down"/>
            <div
                @click="resetFile"
                class="absolute top-0 right-0 bg-gray-200 p-1 cursor-pointer">
                <Xmark/>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {
    Xmark
} from "@/components/icons/";
import type {
    VNodeRef
} from "vue";

defineProps({
    name: {
        type: String,
        required: true
    },
    accept: {
        type: String,
        default: 'image/{png,jpg}'
    }
});

/**
 * Begin::Declare variable section
 */
const image: Ref<string | ArrayBuffer | any> = ref(null);
const input: Ref<VNodeRef | null> = ref<VNodeRef | null>(null);
/**
 * End::Declare variable section
 */

/**
 * Begin::Some logical in this component
 */
const handleFile = (file: File): void => {
    if(file)
    {
        const reader: FileReader = new FileReader();
        reader.onload = () => {
            image.value = reader.result;
        }
        reader.readAsDataURL(file);
    }
}

const triggerClick = (): void => {
    const inputElement: HTMLInputElement = (input.value as unknown) as HTMLInputElement;

    if(inputElement)
    {
        inputElement.onchange = (event: Event): void => {
            const file: File | undefined = (event.target as HTMLInputElement)?.files?.[0];
            handleFile(file as File);
        }
        inputElement?.click();
    }
}

const handleDrop = (event: Event): void => {
    const droppedFiles = (event as DragEvent).dataTransfer?.files;

    if(droppedFiles && droppedFiles.length > 0)
    {
        const file = droppedFiles[0];
        if(file) setFileToInput(file);
        handleFile(file);
    }
}

const handlePaste = async (event: ClipboardEvent): Promise<void> => {
    const items = event.clipboardData?.items;

    for(const item of (items || []))
    {
        if(item.type.indexOf('image') !== -1)
        {
            const file: File | null = item.getAsFile();
            if(file) setFileToInput(file);
            handleFile(file as File);
        }
    }
}

const setFileToInput = (file: File): void => {
    const inputElement: HTMLInputElement = (input.value as unknown) as HTMLInputElement;
    const dataTransfer = new DataTransfer();
    dataTransfer.items.add(file);
    inputElement.files = dataTransfer.files;
    inputElement.dispatchEvent(new Event('change', {
        bubbles: true,
        cancelable: true,
        composed: true
    }));
}

const resetFile = (): void => {
    const inputElement: HTMLInputElement | null = input.value as HTMLInputElement | null;

    if(inputElement)
    {
        inputElement.value = '';
    }
    image.value = null;
}
/**
 * End::Some logical in this component
 */
</script>