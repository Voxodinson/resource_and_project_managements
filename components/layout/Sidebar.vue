<template>
    <div 
        class=" bg-white transition-all h-[95vh] duration-200 ease-in-out "
        :class="{
            'w-[25%]': !expand,
            'w-[5%]': expand
        }">
        <div 
            class="w-full h-[5vh] bg-black flex items-center justify-between relative"
            :class="{
              'justify-between' : !expand,
              'justify-center' : expand
            }">
            <UInput
                icon="i-heroicons-magnifying-glass-20-solid"
                size="sm"
                color="white"
                :trailing="false"
                placeholder="Search..."
                class="bg-none text-black rounded-md text-[.8rem] w-[70%] ml-2 overflow-hidden z-30"
                :class="{
                    'w-[300px] bg-gray-200 absolute left-[100%]' : expand,
                    'block' : !expand
                }"
                v-if="!expand ? !search : search"/>
            <UIcon 
                class="w-5 h-5 opacity-60 hover:opacity-100 hover:text-white hover:scale-110 transition-all duration-200 ease-in-out"
                :class="{
                  'ml-2 block': expand,
                  'hidden' : !expand
                }"
                @click="toggleSearch(!search)"
                :name="!search ? 'i-heroicons-magnifying-glass-20-solid' : 'material-symbols-light:cancel-outline-rounded'"/>
            <UIcon 
                name="f7:sidebar-left"
                class="w-5 h-5 opacity-60 hover:opacity-100 hover:text-white hover:scale-110 transition-all mr-2 duration-100 ease-in-out"
                :class="{
                  'mr-2': expand
                }"
                @click="toggleSidebar(!expand)"/>
        </div>
        <div class="h-[calc(100vh-44vh)]">
            <Section
                class=""
                :class-title="!expand ? '' : 'hidden'"
                label="Sale & Marketing"/>
            <AccordionMenu
                icon="oui:integration-general"
                title="General Settings"
                :class-title="!expand ? '' : 'hidden'"
                :index="2"
                :active-index="activeIndex"
                @toggle-accordion="toggleAccordion">
                <Menu
                    icon="mingcute:exchange-dollar-line"
                    title="Exchange Rate"
                    path="/"
                    class-name="pl-3"
                    :class-title="!expand ? '' : 'hidden'"
                    @set-title="showTitle"/>
            </AccordionMenu>
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