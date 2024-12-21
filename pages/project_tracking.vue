<template>
    <div class="flex items-center justify-between h-[45px] px-4 bg-white border-b-[1px] border-gray-200">
        <UBreadcrumb 
            :links="linksItem"
            divider="/"
            :ui="{
                base: 'font-semibold text-[.8rem]',
                inactive: 'hover:text-blue-200',
                active: 'text-blue-400',
            }"/>
        <div class=" flex gap-3 items-center justify-center h-full">
            <UTooltip 
                text="Manage Card Dashboard"
                :popper="{ offsetDistance: 12 }">
                <UButton
                    icon="material-symbols-light:cards-rounded"
                    size="sm"
                    color="white"
                    variant="soft" 
                    label="Manage Cards"
                    :padded="false"
                    class=" hover:bg-gray-100 hover:text-black p-1 transition-all duration-300 ease-in-out"/>
            </UTooltip>
            <UTooltip 
                text="Setting"
                :popper="{ offsetDistance: 12 }">
                <UButton
                    icon="material-symbols:settings-outline-rounded"
                    size="sm"
                    color="white"
                    variant="soft" 
                    :padded="false"
                    class=" hover:bg-gray-100 hover:text-black p-1 transition-all duration-300 ease-in-out"/>
            </UTooltip>
        </div>
    </div>
    <div>
        THIS IS HOME PAGE
    </div>
  </template>
  
<script setup>
  
definePageMeta({
    colorMode: 'light'
});
  
const linksItem = [
    {
        label: 'Project Mangement'
    },
    {
        label: 'Projects',
        to: '/project'
    },
    {
        label: 'Projects Tracking',
    }
];
</script>