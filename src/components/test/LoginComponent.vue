<script setup>
import { defineAsyncComponent } from 'vue'
import AsyncPopup from './AsyncLazyImage.vue'; 

const AsyncPopupComponent = defineAsyncComponent({
  loader: () => import('./AsyncLazyImage.vue'),
  loadingComponent: { template: '<div>Loading image...</div>'  }/* shows while loading */,
  errorComponent: { template: '<div>Error image...</div>'  } /* shows if there's an error */,
  delay: 5000 /* delay in ms before showing loading component */,
  timeout: 8000 /* timeout after this many ms */,
})

const login = () => {
  localStorage.setItem("authToken", "test token")
}

</script>

<template>
  <div>
    <h1>Auth View Login</h1>
    <button @click="login">Login</button>
    <AsyncPopupComponent />
  </div>
</template>

<style>

</style>
