<script setup>
import { ref, onMounted } from "vue";

import image_1 from "../assets/images/image_1.jpg";
import circle from "../assets/images/circle.gif";
const cards = ref([
    {id: 1, image: "../../assets/images/image_1.jpg", name: "Name 1"},
    {id: 2, image: "../../assets/images/image_1.jpg", name: "Name 2"},
    {id: 3, image: "../../assets/images/image_1.jpg", name: "Name 3"}
]);

</script>

<template>
    <div class="cards">
        <div class="cards__box" v-for="item in cards" :key="item.id">
            <div class="live__container">
                <div class="live-gif__wrap">
                    <svg viewBox="0 0 100 100">
                        <circle class="bg" cx="50" cy="50" r="40" />
                        <circle class="meter" cx="50" cy="50" r="40" :style="`animation-duration: ${index+1}s;`" />
                    </svg>
                    <div class="live-gif__center">
                        <img src="../assets/images/live-auction.gif" alt="" />
                    </div>
                </div>
             </div>
            <img :src="image_1" alt="">
            <p>{{ item.name }}</p>
            <button>Join and bid</button>
        </div>
    </div>
</template>

<style scoped>
.cards {
    display: flex;
    justify-content: center;
    column-gap: 30px;
    margin-top: 100px;
}

.cards__box {
    position: relative;

width: 300px;
    height: 350px;
    background-color: lightcyan;
}
.cards__box > img {
    width: 300px;
    height: 180px;
}

.live__container {
    position: absolute;
    top: 12%;
    left: 32%;
    z-index: 111;
}
.live-gif__wrap {
 position: relative;
    width: 100px;
    height: 100px;
    background: rgba(41, 114, 255, 0.46);
    border-radius: 50%;
    box-shadow: 0px 0px 5px 0px #fff inset, 0px 5px 10px 0px #fff inset;
    backdrop-filter: blur(2.5px);
    display: grid;
    place-items: center;
}
svg {
    width: 100px;
    height: 100px;
}
svg circle {
    fill: none;
    stroke-width: 5px;
    stroke-linecap: round;
}

svg circle.bg {
    stroke: white;
}

svg circle.meter {
    stroke: aqua;
    stroke-dashoffset: 300px;
    stroke-dasharray: 300px;
    animation: prog linear forwards infinite;
}
@keyframes prog {
    0% {
        stroke-dashoffset: 300px;
    }
    100% {
        stroke-dashoffset: 0px;
    }
}

.live-gif__border {
 width: 100%;
    height: 100%;
    border-radius: 50%;
}

.live-gif__center {
   position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.live-gif__center img {
width: 56px;
height: 56px;
}
</style>
