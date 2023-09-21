<template>
  <div>
    <input type="file" ref="fileInput" @change="handleFileChange" accept="video/*" />
    <button @click="uploadVideo">Upload Video</button>
    <div v-if="uploading">
      <p>Uploading: {{ uploadProgress }}%</p>
      <progress :value="uploadProgress" max="100"></progress>
    </div>
    <video v-if="videoUrl" controls width="400">
      <source :src="videoUrl" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const fileInput = ref(null);
const uploading = ref(false);
const uploadProgress = ref(0);
const videoUrl = ref(null);

const handleFileChange = () => {
  videoUrl.value = null; // Reset the video player
};

const uploadVideo = () => {
  const file = fileInput.value.files[0];

  if (!file) {
    alert('Please select a video file to upload.');
    return;
  }

  uploading.value = true;

  const reader = new FileReader();

  reader.onload = (event) => {
    videoUrl.value = event.target.result;
    uploading.value = false;
    uploadProgress.value = 0;
  };

  reader.onprogress = (event) => {
    if (event.lengthComputable) {
      uploadProgress.value = (event.loaded / event.total) * 100;
    }
  };

  reader.readAsDataURL(file);
};
</script>
