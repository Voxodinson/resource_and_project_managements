<template>
  <div
    class="w-full mx-auto flex h-[100vh]">
    <div
      class="panel-image bg-slate-50 w-full flex justify-center items-center">
      <div
        class="flex h-[450px] justify-center items-center bg-white shadow-sm overflow-hidden">
        <div
          class="rounded-l-lg overflow-hidden image bg-red-300 h-full">
          <img
            src=""
            alt="Logo"
            class="object-cover w-full h-full"
            loading="lazy" />
        </div>
        <div
          class="form-submit w-[600px]">
          <form
            name="signin"
            method="POST"
            enctype="multipart/form-data"
            class="panel-login p-16 flex flex-col justify-center space-y-4"
            @submit.prevent="getData">
            <div
              class="flex justify-center items-center aspect-square">
              <img
                src=""
                alt="logo"
                class="w-[120px] object-scale-down"
                loading="lazy"/>
            </div>
            <small
              v-if="messages"
              class="text-center text-red-500">{{ messages }}</small>
            <h4
              class="text-xl text-gray-700 text-center font-semibold my-4">Sign in to your account</h4>
            <UFormGroup
              class="w-full"
              label="Username | Email"
              name="username">
              <UInput
                type="text"
                color="white"
                variant="outline"
                size="md"
                name="username"
                minlength="3"
                maxlength="50"
                placeholder="Enter your username"
                v-model="user.username"
                required/>
            </UFormGroup>
            <UFormGroup
              class="w-full"
              label="Password"
              name="password">
              <UInput
                :type="show ? 'text' : 'password'"
                color="white"
                variant="outline"
                size="md"
                name="password"
                minlength="6"
                maxlength="20"
                placeholder="Enter you password"
                v-model="user.password"
                required/>
              <UButton
                type="button"
                @click="show = !show"
                variant="link"
                color="white"
                size="sm"
                class="absolute top-0 right-0 w-auto h-full border-0 outline-0"
                square>
                <UIcon
                  :name="show ? 'fluent:eye-off-20-regular' : 'fluent:eye-24-regular'"
                  class="text-xl"/>
              </UButton>
            </UFormGroup>
            <UButton
              type="submit"
              color="blue"
              variant="solid"
              size="md"
              class="flex items-center justify-center text-md rounded-lg"
              label="Login"
              square/>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  Validation,
  Context
} from "@/composable/validateHandler/";
import {
  GetDataContext,
  GetDataNormalForm
} from "@/composable/dataHandler/";
import {
  storeToRefs
} from 'pinia';
import {
  useAuthStore
} from '@/store/auth';

definePageMeta({
  layout: 'login',
  colorMode: 'light'
});

useSeoMeta({
  title: 'Login'
});

/**
 * Begin::Declare interface section
 */
interface User
{
  username: string,
  password: string
}
/**
 * End::Declare interface section
 */

/**
 * Begin::Declare variable object section
 */
const context: GetDataContext = new GetDataContext(new GetDataNormalForm());
const validate: Context = new Context(new Validation());
/**
 * End::Declare variable object section
 */

/**
 * Begin::Declare variable section
 */
const user: Ref<User> = ref<User>({
  username: '',
  password: ''
});
const { authenticateUser } = useAuthStore();
const {
  authenticated,
  messages } = storeToRefs(useAuthStore());
const router = useRouter();
const show: Ref<boolean> = ref<boolean>(false);
/**
 * End::Declare variable section
 */

/**
 * Begin::Some logical in this component
 */
const getData = (event: Event): void => {
  const data: object = context.getDataForm(event as SubmitEvent) as object;
  user.value = data as User;
  login();
}

const login = async (): Promise<void> => {
  await authenticateUser(user.value);
  if(authenticated)
  {
    router.push('/');
  }
}
/**
 * End::Some logical in this component
 */
</script>