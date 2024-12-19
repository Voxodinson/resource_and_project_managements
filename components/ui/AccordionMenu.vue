<template>
    <li
        @click="toggleAccordion(index)"
        role="accordion"
        class="bg-transparent py-2 w-11/12 flex items-center justify-between cursor-pointer group">
        <button
            class="bg-transparent flex gap-x-3 items-center text-[#248BFD] text-nowrap"
            :class="classTitle ? 'ml-6' : 'ml-9'">
            <UIcon
                v-if="typeof(icon) === 'string'"
                :name="icon"
                class="text-2xl text-[1rem] text-black "/>
            <component
                v-else
                :is="icon"/>
            <span
                class="font-medium text-black text-[.8rem]"
                :class="classTitle">{{ title }}</span>
        </button>
        <UIcon 
            name="line-md:chevron-right-circle-twotone"
            class="w-5 h-5 text-gray-300 group-hover:text-gray-500 hover:scale-110 transition-all duration-200 ease-in-out"
            :class="{
                'rotate-90': activeIndex === index,
                'hidden': classTitle
            }"/>
    </li>
    <ul
        role="list"
        class="list-none flex flex-col gap-y-2 transition-all"
        :class="{
            'hidden': activeIndex !== index
        }">
        <slot/>
    </ul>
</template>

<script setup lang="ts">
import type {
    DefineComponent
} from 'vue';

withDefaults(defineProps<{
    icon: string | DefineComponent<any, any, any>,
    title: string,
    index: number,
    activeIndex: number,
    classTitle: string
}>(),{
    icon: '',
    title: '',
    index: 0,
    activeIndex: -1,
    classTitle: ''
});

/**
 * Begin::Set event trigger to parent component
 */
const emit = defineEmits<{
    (event: 'toggleAccordion', index: number): void;
}>();
/**
 * End::Set event trigger to parent component
 */

/**
 * Begin::Some logical in this component
 */
const toggleAccordion = (index: number): void => {
    emit('toggleAccordion', index);
};
/**
 * End::Some logical in this component
 */
</script>