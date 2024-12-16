<template>
    <svg
        width="15"
        height="11"
        viewBox="0 0 10 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0.199497 1.10038C0.422276 0.886612 0.778392 0.891746 0.994914 1.11185L4.4839 4.65859L8.0737 1.21391C8.29646 1.00015 8.6526 1.00528 8.8691 1.22538C9.08561 1.44549 9.08054 1.79721 8.85778 2.01098L4.86461 5.8427C4.64185 6.05646 4.28571 6.05132 4.06921 5.83123L0.18817 1.88598C-0.0283471 1.66587 -0.0232758 1.31415 0.199497 1.10038Z" 
            :fill="className"/>
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