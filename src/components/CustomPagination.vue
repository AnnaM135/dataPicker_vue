<template>
<div>
  <div class="pagination">
    <a class="pagination__item" @click="prevPage" :disabled="currentPage === 1">
      <button>Prev</button>
    </a>
    <div v-if="currentPage < totalPages - 2">
        <a class="pagination__item" v-for="(page, index) in [currentPage, currentPage+1, currentPage+2]" :key="index" @click="goToPage(page)">{{page}}</a>
    </div>
    <span v-if="currentPage < totalPages - 3">...</span>
    <a class="pagination__item" @click="goToPage(totalPages)" :class="{ active: currentPage === totalPages }">{{ totalPages }}</a>
    <a class="pagination__item" @click="nextPage" :disabled="currentPage === totalPages">
      <button>Next</button>
    </a>
  </div>

  <div> {{ currentPage }} </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const currentPage = ref(1);
const itemsPerPage = 8;
const totalItems = 80; // Replace with your actual total item count

const totalPages = computed(() => Math.ceil(totalItems / itemsPerPage));

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};

const goToPage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
  }
};
</script>

<style scoped>
.pagination {
    display: flex;
    align-items: center;
}
/* Add your CSS styles for pagination items, icons, and active state here */
.pagination__item {
    border: 1px solid red;
    padding: 5px;
    margin-inline: 5px;
}
</style>
