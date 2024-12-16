<template>
    <li
        class="group py-2 w-full hover:bg-blue-200"
        :class="{
            'bg-blue-300': route.path === path,
            'bg-transparent': route.path !== path,
            [className as string]: className
        }">
        <NuxtLink
            @click="$emit('setTitle', title)"
            :to="path"
            class="flex gap-x-3 text-gray-400 group-hover:text-white text-nowrap"
            :class="{
                'ml-6': classTitle,
                'ml-9': !classTitle
            }">
            <UIcon
                v-if="typeof(icon) === 'string'"
                :name="(icon as string)"
                class="text-2xl w-5 h-6"
                :class="{
                    'text-white': route.path === path,
                    'group-hover:text-white text-[#0f58a8]': route.path !== path
                }"/>
            <component
                v-else
                :is="icon"/>
            <span
                :title="title"
                class="font-medium"
                :class="{
                    'text-white': route.path === path,
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

const props = withDefaults(defineProps<{
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
 * Begin::Set event trigger to parent component
 */
const emit = defineEmits<{
    (event: 'setTitle', title: string): void;
}>();
/**
 * End::Set event trigger to parent component
 */

/**
 * Begin::Declare variable section
 */
const route: RouteLocationNormalizedLoadedGeneric = useRoute();
/**
 * End::Declare variable section
 */

onMounted((): void => {
    if(route.path === props.path)
        emit('setTitle', props.title);
});
</script>