<script setup>
// import { ref } from "vue"
// import VuePictureCropper, { cropper } from 'vue-picture-cropper'
// import pic from "/src/assets/images/image_1.jpg"


// const zoomPercentage = ref(100);

// const cropperOptions = ref({
//   viewMode: 3,
//   dragMode: 'crop',
//   aspectRatio: 16 / 9,
//   zoom: 1, 
// });

// const zoomIn = () => {
//   zoomPercentage.value += 10; 
//   cropperOptions.value.zoom = zoomPercentage.value / 100;
//     console.log(cropperOptions.value.zoom)
// };

// const zoomOut = () => {
//   zoomPercentage.value -= 10; 
//   cropperOptions.value.zoom = zoomPercentage.value / 100; 
// };

import{ ref } from "vue"
import myUpload from 'vue-image-crop-upload';
import imgDataUrl from "/src/assets/images/image_1.jpg"

const show = ref(true);
const params = ref({
    token: '12321',
    name: 'avatar'
},)
const headers = ref({
    token: '12321',
    name: 'avatar'
},)

// const imgDataUrl = ref("")

const toggleShow = () => {
    show.value = !show.value;
}
const cropSuccess = (imgDataUrl, field) => {
      console.log('-------- crop success --------');
    //   imgDataUrl.value = imgDataUrl;
    }
const cropUploadSuccess = (jsonData, field)=>{
      console.log('-------- upload success --------');
      console.log(jsonData);
      console.log('field: ' + field);
    }
    const cropUploadFail = (status, field) => {
      console.log('-------- upload fail --------');
      console.log(status);
      console.log('field: ' + field);
    }
</script>


<template>
<div>
<my-upload field="img"
        @crop-success="cropSuccess"
        @crop-upload-success="cropUploadSuccess"
        @crop-upload-fail="cropUploadFail"
        v-model="show"
    :width="250"
    :height="250"
    url="/upload"
    :params="params"
    :headers="headers"
    :noCircle="true"
    :noSquare="true"
    langType="en"
    img-format="png"></my-upload>
  <img :src="imgDataUrl">
    <div class="container">
    <!-- <VuePictureCropper
        :boxStyle="{
        width: '100%',
        height: '100%',
        backgroundColor: 'red',
        margin: 'auto',
        fillColor: 'green'
        }"
        :img="pic"
       
        :options="cropperOptions"
    /> -->
    </div>
<!-- <div class="zoom-control">
      <button @click="zoomOut">Zoom Out</button>
      <button @click="zoomIn">Zoom In</button>
      <span>{{ zoomPercentage }}%</span>
    </div> -->
</div>

</template>
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

.zoom-control label {
  margin-right: 10px;
}

</style>
