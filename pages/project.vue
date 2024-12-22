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
        class="w-full flex flex-col gap-3 p-2">
        <ProjectCard
            :data="data.data"/>
    </div>
</template>
  
<script setup>
import { 
    ProjectCard 
} from '@/childPages';
definePageMeta({
    colorMode: 'light'
});
  
const linksItem = [
    {
        label: 'Project Mangement'
    },
    {
        label: 'Project',
    }
];

const data = {
    status: 'ok',
    data: [
        {
            "id": 1,
            "name": "Vox Odinson delivery web admin",
            "image": "https://cdn.dribbble.com/userupload/16603678/file/original-3b8b3138ed4630ab64c0380ede6ea683.jpg?format=webp&resize=640x480&vertical=center",
            "created_at": "2024-12-22T12:00:00Z",
            "teams": ["Team Alpha", "Team Beta"],
            "project_cost": 50000,
            "deadline_time": "2024-12-31T23:59:59Z",
            "status":"in design",
            "start_work":"10-12-2024",
            "deathline": "10-03-2025",
            "client": {
                "id": 101,
                "name": "John Doe",
                "phone": "+1234567890",
                "address": "123 Main Street, Cityville",
                "company_name": "ClientCorp",
                "email": "john.doe@clientcorp.com"
            },
            "teams": [
                {
                    'id': 1,
                    'name': 'vox odinson',
                    'position':'Backend Developer',
                    'image':'https://avatars.githubusercontent.com/u/904724?v=4'
                },
                {
                    'name': 'vox odinson',
                    'position':'Backend Developer',
                    'image':'https://avatars.githubusercontent.com/u/904724?v=4'
                },
                {
                    'name': 'vox odinson',
                    'position':'Backend Developer',
                    'image':'https://avatars.githubusercontent.com/u/904724?v=4'
                },
                {
                    'name': 'vox odinson',
                    'position':'Backend Developer',
                    'image':'https://avatars.githubusercontent.com/u/904724?v=4'
                },
                {
                    'name': 'vox odinson',
                    'position':'Backend Developer',
                    'image':'https://avatars.githubusercontent.com/u/904724?v=4'
                },
                {
                    'name': 'vox odinson',
                    'position':'Backend Developer',
                    'image':'https://avatars.githubusercontent.com/u/904724?v=4'
                },
            ]
        },
        {
            "id": 1,
            "name": "Vox Odinson delivery web admin",
            "image": "https://cdn.dribbble.com/userupload/16603678/file/original-3b8b3138ed4630ab64c0380ede6ea683.jpg?format=webp&resize=640x480&vertical=center",
            "created_at": "2024-12-22T12:00:00Z",
            "teams": ["Team Alpha", "Team Beta"],
            "project_cost": 50000,
            "deadline_time": "2024-12-31T23:59:59Z",
            "status":"in design",
            "start_work":"10-12-2024",
            "deathline": "10-03-2025",
            "client": {
                "id": 101,
                "name": "John Doe",
                "phone": "+1234567890",
                "address": "123 Main Street, Cityville",
                "company_name": "ClientCorp",
                "email": "john.doe@clientcorp.com"
            },
            "teams": [
                {
                    'id': 1,
                    'name': 'vox odinson',
                    'position':'Backend Developer',
                    'image':'https://avatars.githubusercontent.com/u/904724?v=4'
                },
                {
                    'name': 'vox odinson',
                    'position':'Backend Developer',
                    'image':'https://avatars.githubusercontent.com/u/904724?v=4'
                },
                {
                    'name': 'vox odinson',
                    'position':'Backend Developer',
                    'image':'https://avatars.githubusercontent.com/u/904724?v=4'
                },
                {
                    'name': 'vox odinson',
                    'position':'Backend Developer',
                    'image':'https://avatars.githubusercontent.com/u/904724?v=4'
                },
                {
                    'name': 'vox odinson',
                    'position':'Backend Developer',
                    'image':'https://avatars.githubusercontent.com/u/904724?v=4'
                },
                {
                    'name': 'vox odinson',
                    'position':'Backend Developer',
                    'image':'https://avatars.githubusercontent.com/u/904724?v=4'
                },
            ]
        },
        {
            "id": 1,
            "name": "Vox Odinson delivery web admin",
            "image": "https://cdn.dribbble.com/userupload/16603678/file/original-3b8b3138ed4630ab64c0380ede6ea683.jpg?format=webp&resize=640x480&vertical=center",
            "created_at": "2024-12-22T12:00:00Z",
            "teams": ["Team Alpha", "Team Beta"],
            "project_cost": 50000,
            "deadline_time": "2024-12-31T23:59:59Z",
            "status":"in design",
            "start_work":"10-12-2024",
            "deathline": "10-03-2025",
            "client": {
                "id": 101,
                "name": "John Doe",
                "phone": "+1234567890",
                "address": "123 Main Street, Cityville",
                "company_name": "ClientCorp",
                "email": "john.doe@clientcorp.com"
            },
            "teams": [
                {
                    'id': 1,
                    'name': 'vox odinson',
                    'position':'Backend Developer',
                    'image':'https://avatars.githubusercontent.com/u/904724?v=4'
                },
                {
                    'name': 'vox odinson',
                    'position':'Backend Developer',
                    'image':'https://avatars.githubusercontent.com/u/904724?v=4'
                },
                {
                    'name': 'vox odinson',
                    'position':'Backend Developer',
                    'image':'https://avatars.githubusercontent.com/u/904724?v=4'
                },
                {
                    'name': 'vox odinson',
                    'position':'Backend Developer',
                    'image':'https://avatars.githubusercontent.com/u/904724?v=4'
                },
                {
                    'name': 'vox odinson',
                    'position':'Backend Developer',
                    'image':'https://avatars.githubusercontent.com/u/904724?v=4'
                },
                {
                    'name': 'vox odinson',
                    'position':'Backend Developer',
                    'image':'https://avatars.githubusercontent.com/u/904724?v=4'
                },
            ]
        },
        {
            "id": 1,
            "name": "Vox Odinson delivery web admin",
            "image": "https://cdn.dribbble.com/userupload/16603678/file/original-3b8b3138ed4630ab64c0380ede6ea683.jpg?format=webp&resize=640x480&vertical=center",
            "created_at": "2024-12-22T12:00:00Z",
            "teams": ["Team Alpha", "Team Beta"],
            "project_cost": 50000,
            "deadline_time": "2024-12-31T23:59:59Z",
            "status":"in design",
            "start_work":"10-12-2024",
            "deathline": "10-03-2025",
            "client": {
                "id": 101,
                "name": "John Doe",
                "phone": "+1234567890",
                "address": "123 Main Street, Cityville",
                "company_name": "ClientCorp",
                "email": "john.doe@clientcorp.com"
            },
            "teams": [
                {
                    'id': 1,
                    'name': 'vox odinson',
                    'position':'Backend Developer',
                    'image':'https://avatars.githubusercontent.com/u/904724?v=4'
                },
                {
                    'name': 'vox odinson',
                    'position':'Backend Developer',
                    'image':'https://avatars.githubusercontent.com/u/904724?v=4'
                },
                {
                    'name': 'vox odinson',
                    'position':'Backend Developer',
                    'image':'https://avatars.githubusercontent.com/u/904724?v=4'
                },
                {
                    'name': 'vox odinson',
                    'position':'Backend Developer',
                    'image':'https://avatars.githubusercontent.com/u/904724?v=4'
                },
                {
                    'name': 'vox odinson',
                    'position':'Backend Developer',
                    'image':'https://avatars.githubusercontent.com/u/904724?v=4'
                },
                {
                    'name': 'vox odinson',
                    'position':'Backend Developer',
                    'image':'https://avatars.githubusercontent.com/u/904724?v=4'
                },
            ]
        }
    ],
    page_no: 1,
    per_page: 10,
    total: 10,
    total_page: 10
};

</script>