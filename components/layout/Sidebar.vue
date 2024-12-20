<template>
    <div 
        class="  transition-all h-[calc(100vh-50px)] bg-white duration-200 ease-in-out border-r-[1px] border-gray-200"
        :class="{
            'w-[25%]': !expand,
            'w-[57px]': expand
        }">
        <div 
            class="w-full h-[45px] flex items-center relative border-b-[1px] border-gray-200"
            :class="{
              'justify-between' : !expand,
              'justify-center' : expand
            }">
            <h3
                :class="{
                    'hidden': expand,
                    'block ml-2': !expand
                }">Home</h3>
            <UIcon 
                name="f7:sidebar-left"
                class="w-5 h-5 opacity-60 text-gray-700 hover:opacity-100 hover:text-black hover:scale-110 transition-all mr-2 duration-100 ease-in-out"
                :class="{
                  'ml-1.5': expand
                }"
                @click="toggleSidebar(!expand)"/>
        </div>
        <div class="h-[calc(100vh-95px)] p-2">
            <Section
                :class-title="!expand ? '' : 'hidden'"
                label="Main menu"/>
            <Menu
                icon="mage:dashboard-check"
                title="Dashboard"
                path="/"
                class-name=""
                :class-title="!expand ? '' : 'hidden'"/>
            <Section
                :class-title="!expand ? '' : 'hidden'"
                label="Projects Management"/>
            <Menu
                icon="fluent:document-bullet-list-24-regular"
                title="Projects"
                path="/project"
                class-name=""
                :class-title="!expand ? '' : 'hidden'"/>
            <Section
                :class-title="!expand ? '' : 'hidden'"
                label="Employees Management"/>
            <Menu
                icon="fluent:people-team-32-regular"
                title="Employees"
                path=""
                class-name=""
                :class-title="!expand ? '' : 'hidden'"/>
            <Menu
                icon="fluent:people-team-add-20-regular"
                title="Recruitment"
                path=""
                class-name=""
                :class-title="!expand ? '' : 'hidden'"/>
            <Menu
                icon="fluent:payment-32-regular"
                title="Payroll"
                path=""
                class-name=""
                :class-title="!expand ? '' : 'hidden'"/>
            <Section
                :class-title="!expand ? '' : 'hidden'"
                label="Clients Management"/>
            <Menu
                icon="lineicons:hand-shake"
                title="Clients"
                path=""
                class-name=""
                :class-title="!expand ? '' : 'hidden'"/>
            <Menu
                icon="stash:people-group-duotone"
                title="Client Type"
                path=""
                class-name=""
                :class-title="!expand ? '' : 'hidden'"/>
        </div>
    </div>
</template>

<script setup lang="ts">
import {
    Menu,
    Section
} from '@/components/layout';
import {
    AccordionMenu
} from "@/components/ui/";
import {
    useAuthStore
} from '@/store/auth';
import {
    Confirm
} from "@/utils/dialog";
import {
    type Router,
    useRouter
} from "vue-router";
/**
 * Begin::Set event trigger to parent component
 */
const emit = defineEmits<{
    (event: 'setTitle', title: string): void;
    (event: 'expand', state: boolean): void;
}>();
/**
 * End::Set event trigger to parent component
 */

/**
 * Begin::Declare variable section
 */
const activeIndex: Ref<number> = ref<number>(-1);
const expand: Ref<boolean> = ref<boolean>(false);
const search: Ref<boolean> = ref<boolean>(false);
const { logUserOut } = useAuthStore();
const router: Router = useRouter();
/**
 * End::Declare variable section
 */

/**
 * Begin::Some logical in this component
 */
const showTitle = (title: string): void => {
    emit('setTitle', title);
    document.title = title;
};

const toggleAccordion = (index: number): void => {
    activeIndex.value = activeIndex.value === index ? -1 : index;
};

const toggleSidebar = (value: boolean): void => {
    if(search.value === true){
        search.value = false as boolean;
    }
    expand.value = value as boolean;
}

const toggleSearch = (value: boolean): void => {
    search.value = value as boolean;
}


const logout = (): void => {
    Confirm('messages.Do you want to log out now?', (): void => {
        logUserOut();
        router.push('/login');
    });
}
/**
 * End::Some logical in this component
 */
</script>