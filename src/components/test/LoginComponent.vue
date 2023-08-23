<script setup>

const login = () => {
  localStorage.setItem("authToken", "test token")
}
</script>

<template>
  <div>
    <h1>Auth View Login</h1>
    <button @click="login">Login</button>
  </div>
</template>

<style>

</style>
