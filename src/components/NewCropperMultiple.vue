<script setup>
import { ref, computed } from "vue";
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

const updateFileProgress = (index, progress) => {
  selectedFiles.value[index].progress = progress;
};

const uploadFile = (file, index) => {
  // Simulate file upload with a timeout
  const simulateUpload = () => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += 5; // Simulated progress increment
      if (progress >= 100) {
        clearInterval(interval);
      }
      updateFileProgress(index, progress);
    }, 500); // Adjust the interval to control the progress update speed
  };

  // Start the file upload simulation
  simulateUpload();
};

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
      const index = selectedFiles.value.length;
      selectedFiles.value.push({
        file: file,
        progress: 0
      });
      createFileReader(file, index);

      // Upload the file and update progress
      uploadFile(file, index);
    }
  }
}
const showProgressBars = computed(() => {
  return selectedFiles.value.some(file => file.progress < 100);
});

const fileCleared = () => {
  selectedFiles.value = []; // Clear the array of selected files
  imageSrcs.value = []; // Clear the array of image data URLs
  imgRefs.value = []; // Clear the array of img refs
  fileReaders.forEach((reader) => reader.abort()); // Abort all ongoing FileReader operations
}
</script>

<template>
  <div class="wrap">
    <!-- <div>
      <div v-for="(imageSrc, index) in imageSrcs" :key="index">
        <img v-show="imageSrc" :src="imageSrc" :ref="imgRefs[index]" alt="" style="width: 400px; height: 200px">
      </div>
    </div> -->
     <div>
      <!-- Display progress bars while progress is less than 100 -->
      <div v-if="showProgressBars">
        <template v-for="(file, index) in selectedFiles" :key="index">
          <div>
            <p>{{ file.file.name }}</p>
            <progress :value="file.progress" max="100"></progress>
            <span>{{ file.progress }}%</span>
          </div>
        </template>
      </div>
      <!-- Display images when progress reaches 100 -->
      <div v-else>
        <div v-for="(imageSrc, index) in imageSrcs" :key="index">
          <img v-show="imageSrc" :src="imageSrc" :ref="imgRefs[index]" alt="" style="width: 400px; height: 200px">
        </div>
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
    <!-- <div class="processing" >
      <template v-for="(file, index) in selectedFiles" :key="index">
        <div v-show="file.progress < 100">
          <p>{{ file.name }}</p>
          <progress :value="file.progress" max="100"></progress>
          <span>{{ file.progress }}%</span>
        </div>
      </template>
    </div> -->
  </div>
</template>

<style scoped>
/* Add styles for the progress bar */
progress {
  width: 100%;
  height: 20px;
}
</style>