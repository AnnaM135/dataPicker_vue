<script setup>
import { ref, watchEffect, onMounted, onUnmounted, watch, defineEmits, computed  } from "vue";
import Cropper from "cropperjs";
import 'cropperjs/dist/cropper.css';

const emitSelf = defineEmits(['imageCropped'])
const imageInput = ref(null);
const selectedFile = ref(null);
const imageSrc = ref(null);
const img = ref(null);
const fileReader = new FileReader();
let cropper = null

fileReader.onload = (event) => {
    imageSrc.value = event.target.result;
}

const fileChanged = (e) => {
    const files = e.target.files || e.dataTransfer.files;
    if(files.length) {
        selectedFile.value = files[0]
    }
}

const fileCleared = () => {
    selectedFile.value = null;
    img.value = null
}



onMounted(() => {
    cropper = new Cropper(img.value, {
        aspectRatio: 1,
        minCropBoxWidth: 256,
        minCropBoxHeight: 256,
        viewMode: 3,
        dragMode: 3,
        dragMode: 'move',
        cropBoxMovable: false,
        cropBoxResizable: false,
        zoomOnWheel: true
    })
    // cropper.on("zoom", (event) => {
    //     zoomLevel.value = event.detail.ratio;
    //     zoomPercentage.value = (event.detail.ratio * 100).toFixed(0);
    // });
})

onUnmounted(() => {
    cropper.destroy();
})

watchEffect(() => {
    if(selectedFile.value) {
        fileReader.readAsDataURL(selectedFile.value)
    } else {
        imageSrc.value = null
        img.value = null
    }
})

watch(
    imageSrc, 
    () => {
        if(imageSrc.value) {
            cropper.replace(imageSrc.value)
        }
    },
    {flush: 'post'}
)

const zoomLevel = ref(1); // Initial zoom level
const zoomPercentage = computed(() => (zoomLevel.value * 100).toFixed(0));

const handleZoomChange = (event) => {
  cropper.zoomTo(zoomLevel.value);

};

const zoomIn = () => {
  if (zoomLevel.value < 3) {
    zoomLevel.value += 0.1;
    handleZoomChange();
  }
};

const zoomOut = () => {
  if (zoomLevel.value > 0.1) {
    zoomLevel.value -= 0.1;
    handleZoomChange();
  }
};

const handleImageCropped = () => {
    cropper.getCroppedCanvas({
        width: 256,
        height: 256,
        imageSmoothingQuality: 'high'
    })
    .toBlob((blob) => {
        console.log(blob);
        emitSelf('imageCropped', blob);
    }, 'image/jpeg')
}

</script>

<template>
<div class="wrap">
    <div>
        <img v-show="imageSrc" :src="imageSrc" ref="img" alt="" style="width: 4x  00px; height: 200px">
    </div>
    <div>
        <button v-if="!imageSrc" @click="imageInput.click()">Se-lect Image</button>
        <div v-else>
            <button @click="handleImageCropped">  Crop Image</button>
            <button @click="zoomOut">Zoom Out</button> <!-- New zoom out button -->
            <input type="range" v-model="zoomPercentage" @input="handleZoomChange">
            <button @click="zoomIn">Zoom In</button> <!-- New zoom in button -->
            <span>{{ zoomPercentage }}%</span>
        </div>
        <button @click="fileCleared">Clear</button>
        <input type="file" ref="imageInput" accept=".jpg,.jpeg,.png" @change="fileChanged" :style="{ display: 'none' }">

         
    </div>
    <div>
        <span>Selected File: </span>
        <span v-if="selectedFile">{{ selectedFile.name }}</span>
    </div>
</div>
</template>

<style scoped>
.wrap {
    /* width: 200px; */
    /* height: 200px; */
    border: 1px solid red;
}
</style>