<template>
    <li
        class="group py-2 w-full hover:bg-[#0F58A8] cursor-pointer">
        <NuxtLink
            path="/login"
            class="flex gap-x-3 text-[#248BFD]"
            :class="{
                'ml-9': isExpand,
                'ml-6': !isExpand
            }">
            <UIcon
                v-if="typeof(icon) === 'string'"
                :name="(icon as string)"
                class="text-2xl w-5 h-6"
                :class="{
                    'text-white': $route.path === path,
                    'group-hover:text-white text-[#0f58a8]': $route.path !== path
                }"/>
            <component
                v-else
                :is="icon"/>
            <span
                class="font-medium text-[#0F58A8] group-hover:text-white"
                :class="{
                    'hidden': !isExpand
                }">{{ label }}</span>
        </NuxtLink>
    </li>
</template>

<script setup lang="ts">
defineProps({
    label: {
        type: String,
        required: false,
        default: ''
    },
    icon: {
        type: [Object, String],
        required: false
    },
    isExpand: {
        type: Boolean,
        required: false,
        default: false
    },
    path: {
        type: String,
        required: false,
        default: ''
    }
});
</script>