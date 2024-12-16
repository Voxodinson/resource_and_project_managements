<template>
    <li
        class="border-y border-solid border-gray-300 bg-gray-200 p-2 flex items-center justify-start min-h-[40px]">
        <span
            class="text-[#0F58A8] uppercase font-bold"
            :class="{
                [classTitle as string]: classTitle
            }">{{ label }}</span>
    </li>
</template>

<script setup lang="ts">
defineProps({
    label: {
        type: String,
        required: true,
        default: ''
    },
    classTitle: {
        type: String,
        required: false,
        default: ''
    }
});
</script>