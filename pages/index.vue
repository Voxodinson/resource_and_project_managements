<template>
  <div class="flex items-center justify-between h-[5vh] px-4 bg-white border-b-[1px] border-gray-200">
      <UBreadcrumb 
          :links="linksItem"
          divider="/"/>
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
      label: 'Home',
      to: '/'
  },
  {
      label: 'Navigation',
      to: '/'
  }, 
  {
      label: 'Breadcrumb',
      to: '/'
  }
];
</script>