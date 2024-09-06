<script setup>
import {ref} from "vue"
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
import DataTable from "./components/DataTable.vue";

const columns=ref(['ID', 'Name', 'Email', 'Role', 'Status']) 
const data = ref([
  { id: 1, name: 'John Doe', email: 'john.doe@example.com', role: 'Admin', status: 'Active' },
  { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', role: 'Editor', status: 'Inactive' },
  { id: 3, name: 'Michael Johnson', email: 'michael.j@example.com', role: 'Viewer', status: 'Pending' },
  { id: 4, name: 'Emily Davis', email: 'emily.davis@example.com', role: 'Admin', status: 'Active' },
  { id: 5, name: 'William Brown', email: 'william.brown@example.com', role: 'Editor', status: 'Inactive' },
  { id: 6, name: 'Sophia Taylor', email: 'sophia.taylor@example.com', role: 'Viewer', status: 'Pending' },
  { id: 7, name: 'James Anderson', email: 'james.anderson@example.com', role: 'Admin', status: 'Active' },
  { id: 8, name: 'Isabella Thomas', email: 'isabella.thomas@example.com', role: 'Editor', status: 'Inactive' },
  { id: 9, name: 'Benjamin Wilson', email: 'benjamin.wilson@example.com', role: 'Viewer', status: 'Pending' },
  { id: 10, name: 'Olivia Moore', email: 'olivia.moore@example.com', role: 'Admin', status: 'Active' }
]);


</script>

<template>
  <!-- <RouterView /> -->
  <div class="center">
    <DataTable :data="data" :columns="columns" :checkbox="true" :actions="true"/>
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
    <!-- <ProgressBar /> -->
    <!-- <Cards /> -->
  </div>
</template>

<style scoped>
.center {
  display: flex;
  justify-content: center;
}
</style>
