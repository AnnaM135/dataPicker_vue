<script setup>
import Test from "./components/Test.vue";
import DatePicker from "./components/DatePicker.vue";
import DatePickerTest from "./components/DatePickerTest.vue";
import ImageCropper from "./components/ImageCropper.vue";
// import Croping from "./components/Croping.vue";
import NewCropper from "./components/NewCropper.vue";
import NewCropperMultiple from "./components/NewCropperMultiple.vue";
import UploadVideo from "./components/UploadVideo.vue";
import GalerySlides from "./components/auction/GalerySlides.vue";
import CustomPagination from "./components/CustomPagination.vue";
import Cards from "./components/Cards.vue";
import ProgressBar from "./components/ProgressBar.vue";

</script>

<template>
  <!-- <RouterView /> -->
  <div class="center">
    <!-- <Test /> -->
    <!-- <DatePicker /> -->
    <!-- <DatePickerTest /> -->
    <!-- <ImageCropper /> -->
    <!-- <Croping /> -->
    <!-- <NewCropper /> -->
    <!-- <NewCropperMultiple /> -->
    <!-- <UploadVideo /> -->
    <!-- <GalerySlides /> -->
    <!-- <CustomPagination /> -->
    <ProgressBar />
    <Cards />
  </div>
</template>

<style scoped>
.center {
  display: flex;
  justify-content: center;
}
</style>
