
<script setup>
import { ref, computed, onMounted  } from "vue";
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css';
import image_1 from "../../assets/images/image_1.jpg";
import image_2 from "../../assets/images/image_2.jpg";
import image_3 from "../../assets/images/image_3.jpg";
import image_4 from "../../assets/images/image_4.jpg";
import image_5 from "../../assets/images/image_5.jpg";
import image_6 from "../../assets/images/image_6.jpg";
import image_7 from "../../assets/images/image_7.jpg";
import image_8 from "../../assets/images/image_8.jpg";
import image_9 from "../../assets/images/image_9.jpg";
import image_10 from "../../assets/images/image_10.jpg";
import image_11 from "../../assets/images/image_11.jpg";
import image_12 from "../../assets/images/image_12.jpg";
import image_13 from "../../assets/images/image_13.jpg";
import image_14 from "../../assets/images/image_14.jpg";
const slides = [image_1, image_2, image_3, image_4, image_5, image_6, image_7, image_8, image_9, image_10, image_11, image_12, image_13, image_14]

const currentSlide = ref(0);

const slideTo = (val) => {
    console.log(val)
  currentSlide.value = val+1
}
const currentSlideIndex = computed(() => currentSlide.value + 1);

</script>
<template>
<div class="test">

  <Carousel id="gallery" :items-to-show="1" :wrap-around="false" v-model="currentSlide">
    <Slide v-for="slide in slides" :key="slide">
      <div class="carousel__item">
        <img :src="slide" alt="">
      </div>
    </Slide>
  </Carousel>

  <Carousel
    id="thumbnails"
    :items-to-show="3"
    :wrap-around="true"
    v-model="currentSlide"
    ref="carousel"
  >
    <Slide v-for="(slide, index) in slides" :key="slide">
      <div class="carousel__item" @click="slideTo(index - 1)">
        <img :src="slide" alt="">
      </div>
    </Slide>
    <template #addons>
      <Pagination />
      <Navigation />
    </template>
  </Carousel>
</div>

</template>


<style >
.test {
    width: 600px;
    height: 600px;
}

 #gallery .carousel__item {
    width: 580px;
    height: 300px;
    border: 1px solid red;
  }

img {
    width: 100%;
    height: 100%;
    border-radius: 18px;
}
  #thumbnails  {
    margin-top: 30px;
    
  }
 #thumbnails .carousel__item {
    width: 180px;
    height: 180px;
    cursor: pointer;
    border: 1px solid green;
  }

  .carousel__pagination {
    padding: 0;
  }
.carousel__pagination-button:hover::after, .carousel__pagination-button--active::after {
    background-color: orange;
}
.carousel__pagination-button::after {
    content: "1";
    padding: 10px;
    border: 1px solid red;
    width: unset;
    height: unset;
}
.carousel__prev, .carousel__next {
    top: 90%;
    background-color: green;
}
</style>