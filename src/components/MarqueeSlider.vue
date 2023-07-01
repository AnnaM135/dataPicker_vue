<script setup>
import { ref } from "vue";

import image_1 from "../assets/images/image_1.jpg";
import image_2 from "../assets/images/image_2.jpg";
import image_3 from "../assets/images/image_3.jpg";
import image_4 from "../assets/images/image_4.jpg";
import image_5 from "../assets/images/image_5.jpg";
import image_6 from "../assets/images/image_6.jpg";
import image_7 from "../assets/images/image_7.jpg";
import image_8 from "../assets/images/image_8.jpg";
import image_9 from "../assets/images/image_9.jpg";
import image_10 from "../assets/images/image_10.jpg";
import image_11 from "../assets/images/image_11.jpg";
import image_12 from "../assets/images/image_12.jpg";
import image_13 from "../assets/images/image_13.jpg";
import image_14 from "../assets/images/image_14.jpg";

const images = ref([
  image_1,
  image_2,
  image_3,
  image_4,
  image_5,
  image_6,
  image_7,
  image_8,
  image_9,
  image_10,
  image_11,
  image_11,
  image_12,
  image_13,
  image_14,
]);

// https://codepen.io/hexagoncircle/pen/wvmjomb
//https://ryanmulligan.dev/blog/css-marquee/

</script>

<template>
  <div class="marquee__container">
    <div class="marquee">
      <div class="marquee__group">
        <img
          v-for="(image, index) in images"
          :src="image"
          alt=""
          :key="index"
        />
      </div>

      <div aria-hidden="true" class="marquee__group">
        <img
          v-for="(image, index) in images"
          :src="image"
          alt=""
          :key="index"
        />
      </div>
    </div>

    <div class="marquee marquee__reverse">
      <div class="marquee__group">
        <img
          v-for="(image, index) in images"
          :src="image"
          alt=""
          :key="index"
        />
      </div>

      <div aria-hidden="true" class="marquee__group">
        <img
          v-for="(image, index) in images"
          :src="image"
          alt=""
          :key="index"
        />
      </div>
    </div>
  </div>
</template>

<style scopped>
.marquee__container {
  --size: clamp(10rem, 1rem + 40vmin, 30rem);

  --gap: calc(var(--size) / 14);

  display: flex;
  flex-direction: column;
  gap: var(--gap);
  margin: auto;
  max-width: 100vw;
}

.marquee {
  --size: clamp(10rem, 1rem + 40vmin, 30rem);
  --gap: calc(var(--size) / 14);

  display: flex;
  overflow: hidden;
  user-select: none;
  gap: var(--gap);
}

.marquee__reverse .marquee__group {
  animation-direction: reverse;
  animation-delay: -3s;
}

.marquee__group {
  --size: clamp(10rem, 1rem + 40vmin, 30rem);
  --duration: 60s;
  --gap: calc(var(--size) / 14);
  --scroll-start: 0;
  --scroll-end: calc(-100% - var(--gap));

  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: var(--gap);
  min-width: 100%;
  animation: scroll-x var(--duration) linear infinite;
}
.marquee__group img {
  --size: clamp(10rem, 1rem + 40vmin, 30rem);
  --color-bg-accent: #ecdcc0;

  display: grid;
  place-items: center;
  width: var(--size);
  background: var(--color-bg-accent);
  aspect-ratio: 16/9;
  padding: calc(var(--size) / 10);
  border-radius: 0.5rem;
}

@keyframes scroll-x {
    
  from {
    transform: translateX(var(--scroll-start));
  }
  to {
    transform: translateX(var(--scroll-end));
  }
}
</style>