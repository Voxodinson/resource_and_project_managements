<template>
    <li
        class="py-1 block"
        :class="classTitle">
        <span
            class="text-black text-[.9rem] capitalize border-none"
            :class="{
                [classTitle as string]: classTitle}">
            {{ label }}
        </span>
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
