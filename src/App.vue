<script setup>
import Test from "./components/Test.vue";
import DatePicker from "./components/DatePicker.vue";
import DatePickerTest from "./components/DatePickerTest.vue";
import ImageCropper from "./components/ImageCropper.vue";
// import Croping from "./components/Croping.vue";
import NewCropper from "./components/NewCropper.vue";
import NewCropperMultiple from "./components/NewCropperMultiple.vue";

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
    <NewCropperMultiple />
  </div>
</template>

<style scoped>
.center {
  display: flex;
  justify-content: center;
}
</style>
