<template>
    <svg
        width="25"
        height="25"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        class="cursor-pointer"
        :class="className">
        <g>
            <path
                d="M1 16a15 15 0 1 1 15 15A15 15 0 0 1 1 16m28 0a13 13 0 1 0-13 13 13 13 0 0 0 13-13"/>
            <path
                d="M12.13 21.59 17.71 16l-5.58-5.59a1 1 0 0 1 0-1.41 1 1 0 0 1 1.41 0l6.36 6.36a.91.91 0 0 1 0 1.28L13.54 23a1 1 0 0 1-1.41 0 1 1 0 0 1 0-1.41"/>
        </g>
    </svg>
</template>

<script setup lang="ts">
defineProps({
    className: {
        type: String,
        required: false
    }
});
</script>