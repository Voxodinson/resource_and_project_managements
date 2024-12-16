<template>
    <UDropdown
        :items="items"
        :popper="{
            placement: 'bottom-start'
        }"
        :ui="{
            trigger: 'rounded-3xl  overflow-hidden',
            background: 'bg-white',
        }">
        <div
            class="bg-white flex gap-x-2  rounded-md items-center">
            <UAvatar
                src=""
                alt="user"
                size="sm"/>
        </div>
    </UDropdown>
</template>

<script setup lang="ts">
import type {
    DropdownItem
} from '@nuxt/ui/dist/runtime/types';
import {
    storeToRefs
} from 'pinia';
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
 * Begin::Declare variable section
 */
const {
    authenticated,
    username } = storeToRefs(useAuthStore());
const { logUserOut } = useAuthStore();
const router: Router = useRouter();
const items: Ref<DropdownItem[][]> = computed(() => [
    [
        {
            label: (username.value as string),
            class: 'justify-center pb-3 hover:bg-transparent',
            avatar: {
                src: '',
                size: 'lg'
            }
        },
        {
            label: isFullscreen.value ? 'ExitScreen' : 'FullScreen',
            icon: isFullscreen.value ? 'ant-design:fullscreen-exit-outlined' : 'gridicons:fullscreen',
            iconClass: "text-green-500",
            click: async (): Promise<void> => {
                await toggleFullscreen();
            }
        },
        {
            label: 'Logout',
            icon: "octicon:sign-out",
            iconClass: "text-blue-500",
            click: (): void => {
                logout();
            }
        }
    ]
]);
const isFullscreen: Ref<boolean> = ref<boolean>(false);
/**
 * End::Declare variable section
 */

/**
 * Begin::Some logical in this component
 */
const logout = (): void => {
    Confirm('Do you want to log out now?', (): void => {
        logUserOut();
        router.push('/login');
    });
}

const getUsername = (): void => {
    username.value = username.value || localStorage.getItem('username') as string;
}

const toggleFullscreen = async (): Promise<void> => {
    // @ts-ignore
    if(document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement)
    {
        handleExitFullscreen();
        isFullscreen.value = false;
    }
    else
    {
        await handleRequestFullscreen();
        isFullscreen.value = true;
    }
}

const handleRequestFullscreen = async (): Promise<void> => {
    const body: HTMLBodyElement = document.body as HTMLBodyElement;
    if(await body.requestFullscreen)
    {
        body.requestFullscreen();
    }
    // @ts-ignore
    else if(await body.mozRequestFullScreen)
    {
        // @ts-ignore
        body.mozRequestFullScreen();
    }
    // @ts-ignore
    else if(await body.webkitRequestFullscreen)
    {
        // @ts-ignore
        body.webkitRequestFullscreen();
    }
    // @ts-ignore
    else if(body.msRequestFullscreen)
    {
        // @ts-ignore
        body.msRequestFullscreen();
    }
}

const handleExitFullscreen = (): void => {
    if(document.exitFullscreen)
    {
        document.exitFullscreen();
    }
    // @ts-ignore
    else if(document.mozCancelFullScreen)
    {
        // @ts-ignore
        document.mozCancelFullScreen();
    }
    // @ts-ignore
    else if(document.webkitExitFullscreen)
    {
        // @ts-ignore
        document.webkitExitFullscreen();
    }
    // @ts-ignore
    else if(document.msExitFullscreen)
    {
        // @ts-ignore
        document.msExitFullscreen();
    }
}

const checkFullscreen = async (): Promise<void> => {
    // @ts-ignore
    if(document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement)
    {
        handleRequestFullscreen();
        isFullscreen.value = true;
    }
    else
    {
        isFullscreen.value = false;
    }
}
/**
 * End::Some logical in this component
 */

onMounted(async (): Promise<void> => {
    getUsername();
    await checkFullscreen();
});
</script>