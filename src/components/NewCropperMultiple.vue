<script setup>
import { ref, watchEffect, computed, onMounted, onUnmounted, watch, defineEmits } from "vue";
import Cropper from "cropperjs";
import 'cropperjs/dist/cropper.css';

const imageInput = ref(null);
const selectedFiles = ref([]); // Use an array to store selected image files
const imageSrcs = ref([]); // Use an array to store the data URLs of selected images
const imgRefs = ref([]); // Use an array to store img refs for selected images
const fileReaders = []; // Use an array to store FileReader objects

const createFileReader = (file, index) => {
  const fileReader = new FileReader();
  fileReader.onload = (event) => {
    imageSrcs.value[index] = event.target.result;
  };
  fileReader.readAsDataURL(file);
  fileReaders.push(fileReader);
}

const fileChanged = (e) => {
  const files = e.target.files || e.dataTransfer.files;
  if (files.length) {
    // Clear previously selected files and related data
    selectedFiles.value = [];
    imageSrcs.value = [];
    imgRefs.value = [];
    fileReaders.length = 0;

    // Loop through selected files and store them in selectedFiles array
    for (const file of files) {
      selectedFiles.value.push(file);
      createFileReader(file, selectedFiles.value.length - 1);
    }
  }
}

const fileCleared = () => {
  selectedFiles.value = []; // Clear the array of selected files
  imageSrcs.value = []; // Clear the array of image data URLs
  imgRefs.value = []; // Clear the array of img refs
  fileReaders.forEach((reader) => reader.abort()); // Abort all ongoing FileReader operations
}
const updateFileProgress = (index, progress) => {
  selectedFiles.value[index].progress = progress;
};
const showProgressBars = computed(() => {
  return selectedFiles.value.some(file => file.progress < 100);
});

</script>

<template>
  <div class="wrap">
    <div v-if="showOverallProgressBar">
        <p>Overall Progress</p>
        <progress :value="overallProgress" max="100"></progress>
        <span>{{ overallProgress }}%</span>
      </div>
    <div>
      <div v-for="(imageSrc, index) in imageSrcs" :key="index">
        <img v-show="imageSrc" :src="imageSrc" :ref="imgRefs[index]" alt="" style="width: 400px; height: 200px">
      </div>
    </div>
    <div>
      <button v-if="selectedFiles.length === 0" @click="imageInput.click()">Select Images</button>
      <button @click="fileCleared" v-show="selectedFiles.length > 0">Clear</button>
      <input type="file" ref="imageInput" accept=".jpg,.jpeg,.png" @change="fileChanged" :style="{ display: 'none' }" multiple>
    </div>
    <div>
      <span>Selected Files:</span>
      <ul v-if="selectedFiles.length">
        <li v-for="(file, index) in selectedFiles" :key="index">{{ file.name }}</li>
      </ul>
    </div>
  </div>
</template>
