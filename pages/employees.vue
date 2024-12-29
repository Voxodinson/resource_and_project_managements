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
    <div
        class="w-full grid grid-cols-3 gap-3 p-3">
        <EmployeeCard
            :data="[]"/>
    </div>
  </template>
  
<script setup>
import { 
    EmployeeCard 
} from '@/childPages';
definePageMeta({
    colorMode: 'light'
});
  
const linksItem = [
    {
        label: 'Employees Mangement'
    },
    {
        label: 'Employees'
    }
];
const data = {
    status: 'ok',
    data: [],
    page_no: 1,
    per_page: 10,
    total: 10,
    total_page: 10
};

</script>