
<template>
  <div
      class="flex flex-col w-full">
      <Navbar/>
      <div
          class="bg-[#DFEBF9] h-[100vh-5vh] w-full flex"
          :class="{
              'w-[calc(100%-25%)]': !expand,
              'w-[calc(100%-5%)]': expand
          }">
          <Sidebar
              @expand="toggleExpand"/>
          <div
              class="overflow-hidden w-full h-[calc(100vh-5vh)]">
              <NuxtPage/>
          </div>
      </div>
  </div>
</template>
<script setup lang="ts">
import {
  Sidebar,
  Navbar
} from '@/components/layout';
/**
* Begin::Declare variable section
*/
const expand: Ref<boolean> = ref<boolean>(true);
/**
* End::Declare variable section
*/

/**
* Begin::Some logical in this component
*/
const toggleExpand = (value: boolean): void => {
  expand.value = value;
}
/**
* End::Some logical in this component
*/
</script>
