<template>
    <li
        class="py-1 block border-b-[1px] border-gray-300">
        <span
            class="text-black text-[.9rem] capitalize"
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