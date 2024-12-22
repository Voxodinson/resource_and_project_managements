<template>
    <div
        v-for="(project, idx) in data"
        :key="idx"
        class="w-full flex flex-col rounded-md  bg-white border-gray-200 border-[1px]">
        <div class="w-full px-2 py-1 flex justify-between items-center border-b-[1px] border-gray-200">
            <div class="">
                <UTooltip 
                    text="Add New Members"
                    :popper="{ offsetDistance: 12 }">
                    <UButton
                        icon="material-symbols:add-circle-outline-rounded"
                        size="sm"
                        color="white"
                        variant="soft" 
                        :padded="false"
                        class=" text-gray-400 hover:text-gray-500 p-1 transition"/>
                </UTooltip>
                <UTooltip 
                    text="Edit"
                    :popper="{ offsetDistance: 12 }">
                    <UButton
                        icon="material-symbols:edit-outline-rounded"
                        size="sm"
                        color="white"
                        variant="soft" 
                        :padded="false"
                        class=" text-gray-400 hover:text-gray-500 p-1 transition"/>
                </UTooltip>
            </div>
            <UTooltip 
                text="Create new task"
                :popper="{ offsetDistance: 12 }">
                <UButton
                    icon="material-symbols:delete-outline-rounded"
                    size="sm"
                    color="white"
                    variant="soft" 
                    :padded="false"
                    class="text-red-300 hover:text-red-500 p-1 transition"/>
            </UTooltip>
        </div>
        <div class="flex gap-3 w-full justify-between p-2">
            <div class="w-full flex gap-3">
                <div 
                    class="w-[100px] h-[100px] flex rounded-full overflow-hidden shadow-sm border-[1px] border-gray-200 ">
                    <img 
                        :src="(project.image as string)" 
                        alt="project logo"
                        class="w-full h-full object-cover">
                </div>
                <div 
                    class="">
                    <span 
                        class="text-[.7rem] text-gray-400 uppercase">
                        {{ project.status }}
                    </span>
                    <h3
                        class="text-gray-500 capitalize">
                        {{ project.name }}
                    </h3>
                    <span
                        class="text-[.7rem] text-gray-400 uppercase">
                        Date: 
                        {{ project.start_work }} - {{ project.deathline }}
                    </span>
                    <div 
                        class="mt-3 flex items-center gap-3">
                        <span   
                            class="text-[.8rem] text-gray-400 capitalize">
                            Teams Work &ensp; -
                        </span>
                        <UAvatarGroup 
                            size="xs" 
                            :max="4">
                            <UAvatar
                                v-for="(team, idx) in project.teams"
                                :key="idx"
                                :src="(team?.image as string)"
                                alt="teams profile"/>
                        </UAvatarGroup>
                    </div>
                </div>
            </div>
            <div class="w-fit flex flex-col justify-start items-end gap-3">
                <div class="w-fit flex border-[1px] px-2 bg-blue-50 border-gray-200 p-1 rounded-md">
                    <div class="w-fit flex gap-3 pr-3 items-center justify-center border-r-[1px] border-white">
                        <span
                            class="text-[2rem] text-green-400">
                            17
                        </span> 
                        <span 
                            class="text-[.6rem] text-gray-400 uppercase text-nowrap">
                            days left<br>
                            <span
                                class="block text-blue-400">In Design</span>
                        </span>
                    </div>
                    <div class="w-fit flex gap-3 pl-3 items-center justify-center">
                        <span
                            class="text-[2rem] text-blue-400">
                            90
                        </span> 
                        <span 
                            class="text-[.6rem] text-gray-400 uppercase text-nowrap">
                            days left<br>
                            <span
                                class="block text-blue-400">To Finished</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <UAccordion 
            :items="items" 
            :ui="{ 
                wrapper: 'flex flex-col w-full' 
            }">
            <template 
                #default="{ item,index, open}">
                <UButton 
                    color="white" 
                    variant="soft" 
                    :class="[
                        'bg-gray-100 border-b-[1px] border-white dark:border-white group flex items-center justify-between',
                        index === items.length - 1 && 'border-none'
                    ]" 
                    :ui="{ 
                        rounded: 'rounded-none', 
                        padding: { 
                            sm: 'p-2' } }">
                    <span 
                        class="truncate text-gray-400">
                        {{ item.label }}
                    </span>
                    <template #trailing>
                        <UIcon 
                            name="line-md:chevron-right-circle-twotone"
                            class="w-5 h-5 text-gray-300 group-hover:text-gray-400 hover:scale-110 transition"
                            :class="[open && 'rotate-90']"/>
                    </template>
                </UButton>
            </template>
            <template #1>
                client info
            </template>
            <template #2>
                client info
            </template>
        </UAccordion>
    </div>
</template>

<script lang="ts" setup>
import Team from '@/components/icons/team.vue';
import type { 
    Items 
} from '@/models/type';

withDefaults(defineProps<{
    data: Items[],
}>(),{
    data: () => ([]),
});

/**
 * Begin::Declare variable section
 */
const items = [{
    label: 'Teams Work',
    defaultOpen: false,
    slot: '1'
}, {
    label: 'Client Informations',
    defaultOpen: false,
    slot: '2'
}];
/**
 * End::Declare variable section
 */

</script>