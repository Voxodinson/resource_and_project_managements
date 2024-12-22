<template>
    <li
        class="group py-2 pl-2 w-full text-sm transition border-[1px] border-white hover:bg-gray-100 rounded-sm list-none mt-2"
        :class="{
            'bg-gray-200 border-gray-300': route.path === path,
            'bg-transparent': route.path !== path,
            [className as string]: className
        }">
        <NuxtLink
            :to="path"
            class="flex gap-x-3 text-black text-nowrap cursor-pointer">
            <UIcon
                v-if="typeof(icon) === 'string'"
                :name="(icon as string)"
                class="text-[1.2rem]"
                :class="{
                    'text-[#2c5974]': route.path === path,
                    'text-gray-500': route.path !== path
                }"/>
            <component
                v-else
                :is="icon"/>
            <span
                :title="title"
                class="text-[.9rem] font-normal mt-0.5"
                :class="{
                    'text-[#2c5974]': route.path === path,
                    'text-gray-500': route.path !== path,
                    [classTitle as string]: classTitle
                }">{{ title }}</span>
        </NuxtLink>
    </li>
</template>

<script setup lang="ts">
import {
    type RouteLocationNormalizedLoadedGeneric
} from "vue-router";
import {
    type DefineComponent
} from "vue";

withDefaults(defineProps<{
    icon: string | DefineComponent<any, any, any>,
    title: string,
    path: string,
    className?: string,
    classTitle: string
}>(),{
    icon: '',
    title: '',
    path: '',
    className: '',
    classTitle: ''
});


/**
 * Begin::Declare variable section
 */
const route: RouteLocationNormalizedLoadedGeneric = useRoute();
/**
 * End::Declare variable section
 */

</script>