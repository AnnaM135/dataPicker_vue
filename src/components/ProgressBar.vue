<template>
  <div class="wallet" :style="{ width: `${containerWidth}px` }">
     {{progressBarWidth}}
    <div class="progress-bar">
      <div class="progress-fill" :style="{ width: progressBarWidth }"></div>
    </div>
    <div class="parts-label">
      <span v-for="part in parts" :key="part" :style="{ width: `${vandakiChap}px` }">{{ part }}K</span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';

// Define the total amount in the wallet and the number of parts
const totalAmount = 5000;  // total price must be
const numberOfParts = 5;  // how part 
const containerWidth = 300;

// Create a ref for the wallet amount
const walletAmount = ref(1200);
const vandakiGumar = totalAmount / numberOfParts;
const vandakiChap = containerWidth / numberOfParts 

// 300 / 5 = 60
// 500 / 5 = 1000
// if walletAmount -> 1500 -> 60 + 30
// yourWallet / 1000 * 60

// Calculate the width of the progress bar
const progressBarWidth = computed(() => {
  return `${(walletAmount.value / vandakiGumar) * vandakiChap}px`;
});
// Generate an array of part numbers from 1 to numberOfParts
const parts = Array.from({ length: numberOfParts }, (_, index) => index + 1);
</script>

<style>
.wallet {
  background: #f0f0f0;
  border: 1px solid #ccc;
  padding: 10px 0;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  height: 60px;
}

.progress-bar {
  width: 100%;
  height: 20px;
  background: #e1e1e1;
  position: relative;
  border-radius: 10px;
}

.progress-fill {
  height: 100%;
  background: #4caf50; /* Green color for filled part */
  transition: width 0.5s;
  border-radius: 10px 0 0 10px;  
  position: relative;
}

.progress-fill::after {
    content: "";
    position: absolute;
    top: 50%;
    right: -3px;
    width: 3px;
    height: 110%;
    transform: translateY(-50%);
    background-color: red;
    border-radius: 10px;
}
.parts-label {
  margin-top: 10px;
  font-size: 14px;
  display: flex;
  width: 100%;
}
.parts-label > span {
    border: 1px solid red;
    display: grid;
    place-items: end;
}
</style>
