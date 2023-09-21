<template>
  <vue-cropper
  ref="cropper"
  :src="imgSrc"
  alt="Source Image"
  @ready="..."
  @cropstart="..."
  @cropmove="..."
  @cropend="..."
  @crop="..."
  @zoom="..."
>
</vue-cropper>
</template>

<script setup>
import VueCropper from 'vue-cropperjs';
import 'cropperjs/dist/cropper.css';
</script>

<style scoped>
.container {
  width: 700px;
  height: 600px;
}

.zoom-control {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.zoom-control button {
  margin-right: 10px;
}

</style>
