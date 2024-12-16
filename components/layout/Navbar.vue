<template>
    <div class="flex items-center justify-between h-[5vh] bg-[#769FCD] border-b-[1px] border-white">
        <img 
            src="../../assets/images/logo.png" 
            alt="logo"
            class="w-[50px] ml-28">

        <UButtonGroup size="md" orientation="horizontal">
            <UInput
                icon="i-heroicons-magnifying-glass-20-solid"
                size="sm"
                color="white"
                :trailing="false"
                variant="none"
                placeholder="Search..."
                :padded="false"
                class="bg-gray-100 text-gray-700 rounded-l-md text-[.8rem] w-[400px] overflow-hidden py-1.5"/>
            <UButton 
                icon="solar:history-bold" 
                color="white"
                class="px-3 p-1.5"
                :padded="false" />
        </UButtonGroup>
        <div class="flex h-full gap-3 py-3 items-center justify-center mr-4">
            <UTooltip 
                text="Create new task"
                :popper="{ offsetDistance: 12 }">
                <UButton
                    icon="material-symbols:add-circle-outline-rounded"
                    size="sm"
                    color="white"
                    label="New"
                    variant="soft" 
                    :padded="false"
                    class=" hover:bg-gray-100 hover:text-black p-1 transition-all duration-300 ease-in-out"/>
            </UTooltip>
            <div class="h-full border-[1px] border-white"></div>
            <UTooltip 
                text="Open Noted"
                :popper="{ offsetDistance: 12 }">
                <UButton
                    icon="material-symbols:event-note-outline"
                    size="sm"
                    color="white"
                    variant="soft" 
                    :padded="false"
                    class=" hover:bg-gray-100 hover:text-black p-1 transition-all duration-300 ease-in-out"/>
            </UTooltip>
            <UTooltip 
                text="Create Reminder"
                :popper="{ offsetDistance: 12 }">
                <UButton
                    icon="material-symbols:alarm-outline-rounded"
                    size="sm"
                    color="white"
                    variant="soft" 
                    :padded="false"
                    class=" hover:bg-gray-100 hover:text-black p-1 transition-all duration-300 ease-in-out"/>
            </UTooltip>
            <UTooltip 
                text="Quick Action Menu"
                :popper="{ offsetDistance: 12 }">
                <UButton
                    icon="mdi:dots-grid"
                    size="sm"
                    color="white"
                    variant="soft" 
                    :padded="false"
                    class=" hover:bg-gray-100 hover:text-black p-1 transition-all duration-300 ease-in-out"/>
            </UTooltip>
            <UTooltip 
                text="Teams New Noted"
                :popper="{ offsetDistance: 12 }">
                <UChip 
                    text="4"
                    size="2xl">
                    <UButton
                        icon="proicons:comment"
                        size="sm"
                        color="white"
                        variant="soft" 
                        :padded="false"
                        class=" bg-gray-100 text-black p-1 transition-all duration-300 ease-in-out"/>
                </UChip>
            </UTooltip>
            <User/>
        </div>
    </div>
</template>

<script setup lang="ts">
import { 
    User 
} from '.';
</script>