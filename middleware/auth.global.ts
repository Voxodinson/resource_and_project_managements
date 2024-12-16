import {
  storeToRefs
} from "pinia";
import {
  useAuthStore
} from "@/store/auth";

export default defineNuxtRouteMiddleware((to) => {
  const {
    authenticated } = storeToRefs(useAuthStore());
  const token = useCookie("token");

  if(token.value)
  {
    authenticated.value = true;
  }

  if(token.value && to?.name === "signin")
  {
    return navigateTo("/");
  }

  if(!token.value && to?.name !== "signin")
  {
    abortNavigation();
    return navigateTo("/signin");
  }
});