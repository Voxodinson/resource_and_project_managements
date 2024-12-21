<template>
    <li
        @click="toggleAccordion(index)"
        role="accordion"
        class="bg-transparent py-2 flex items-center justify-between cursor-pointer group border-b-[1px] border-gray-300">
        <button
            class="bg-transparent flex gap-x-3 items-center text-[#248BFD] text-nowrap">
            <span
                class="text-black text-[.9rem] capitalize"
                :class="classTitle">{{ title }}</span>
        </button>
        <UIcon 
            name="line-md:chevron-right-circle-twotone"
            class="w-5 h-5 text-gray-200 group-hover:text-gray-400 hover:scale-110 transition mr-2.5"
            :class="{
                'rotate-90': activeIndex === index,
            }"/>
    </li>
    <ul
        role="list"
        class="list-none flex flex-col"
        :class="{
            'hidden': activeIndex !== index
        }">
        <slot/>
    </ul>
</template>

<script setup lang="ts">

withDefaults(defineProps<{
    title: string,
    index: number,
    activeIndex: number,
    classTitle: string
}>(),{
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