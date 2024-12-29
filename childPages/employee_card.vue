<template>
    <div
        v-for="(i, idx) in 6"
        class="w-full p-2 bg-white shadow-sm rounded-md border-[1px] border-gray-200">
        <div class="w-full flex items-center justify-between">
            <span
                class="px-6 py-1 bg-blue-400 text-white text-[.8rem] rounded-full capitalize">
                active
            </span>
            <UDropdown 
                :items="items" 
                :popper="{ placement: 'bottom-end' }">
                <UIcon
                    name="mdi:dots-vertical" />
            </UDropdown>
        </div>
        <div 
            class="w-full flex flex-col items-center gap-3 mt-3 justify-center">
            <div 
                class="w-full flex flex-col items-center justify-center">
                <div class="w-[100px] h-[100px] rounded-full overflow-hidden border-[1px] border-gray-200 shadow-sm relative">
                    <img 
                        src="https://i.pinimg.com/474x/d3/f3/b4/d3f3b4a5bac5a1e52a801dba8d952851.jpg" 
                        alt="user image"
                        class="w-full h-full object-cover">
                </div>
                <h3
                    class="text-[1rem] capitalize text-gray-700 font-semibold">
                    Vox Odinson
                </h3>
                <span
                    class="text-[.8rem] uppercase text-gray-400">
                    Backend Developer
                </span>
            </div>
            <div class="w-full bg-gray-50 rounded-md border-[1px] border-gray-200 p-2 *:w-full *:flex *:justify-between *:items-center *:border-b-[1px] *:border-gray-100 *:mt-1">
                <div
                    class="*:text-gray-700 *:font-normal *:text-[.9rem]">
                    <span
                        class="flex items-center gap-1">
                        <UIcon
                            name="material-symbols:grid-3x3-rounded"
                            class="text-[1rem]"/>
                        ID: 
                    </span>
                    <span>
                        EMP-100503
                    </span>
                </div>
                <div
                    class="*:text-gray-700 *:font-normal *:text-[.9rem]">
                    <span
                        class="flex items-center gap-1">
                        <UIcon
                            name="material-symbols:alarm-outline"
                            class="text-[1rem]"/>
                        Work Time: 
                    </span>
                    <span>
                        Fulltime
                    </span>
                </div>
                <div
                    class="*:text-gray-700 *:font-normal *:text-[.9rem]">
                    <span
                        class="flex items-center gap-1">
                        <UIcon
                            name="material-symbols:mail-outline-rounded"
                            class="text-[1rem]"/>
                        Email: 
                    </span>
                    <span>
                        Voxodinson@gmail.com
                    </span>
                </div>
                <div
                    class="*:text-gray-700 *:font-normal *:text-[.9rem]">
                    <span
                        class="flex items-center gap-1">
                        <UIcon
                            name="material-symbols:call"
                            class="text-[1rem]"/>
                        Tel: 
                    </span>
                    <span>
                        067961719
                    </span>
                </div>
                <div
                    class="*:text-gray-700 *:font-normal *:text-[.9rem]">
                    <span
                        class="flex items-center gap-1">
                        <UIcon
                            name="solar:history-3-line-duotone"
                            class="text-[1rem]"/>
                        Joined At: 
                    </span>
                    <span>
                        10-05-2003
                    </span>
                </div>
            </div>
            <UButton
                variant="soft"
                color="white"
                label="View Information"
                class="w-full flex items-center justify-center bg-blue-400 text-white text-[.8rem]"/>
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { 
    Items 
} from '@/models/type';

definePageMeta({
    colorMode: 'light'
});

// withDefaults(defineProps<{
//     data: Items[],
// }>(),{
//     data: () => ([]),
// });

const items = [
  [{
    label: 'Profile',
    avatar: {
      src: 'https://avatars.githubusercontent.com/u/739984?v=4'
    }
  }], [{
    label: 'Edit',
    icon: 'i-heroicons-pencil-square-20-solid',
    shortcuts: ['E'],
    click: () => {
      console.log('Edit')
    }
  }, {
    label: 'Duplicate',
    icon: 'i-heroicons-document-duplicate-20-solid',
    shortcuts: ['D'],
    disabled: true
  }], [{
    label: 'Archive',
    icon: 'i-heroicons-archive-box-20-solid'
  }, {
    label: 'Move',
    icon: 'i-heroicons-arrow-right-circle-20-solid'
  }], [{
    label: 'Delete',
    icon: 'i-heroicons-trash-20-solid',
    shortcuts: ['⌘', 'D']
  }]
]
</script>