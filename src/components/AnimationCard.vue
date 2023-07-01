<template>
  <div class="box">
    <div class="left">
        Lorem ipsum dolor sit amet.
    </div>
    <div class="right">
        <div class="card" ref="preElement">nkar1 nkar2</div>
    </div>
  </div>
</template>

<script>
import { onMounted, onUnmounted, ref } from 'vue';

export default {
  setup() {
    const preElement = ref(null);

    const rotateElement = (event) => {
      const x = event.clientX;
      const y = event.clientY;
        console.log(preElement, x, y)
      const middleX = window.innerWidth / 2;
      const middleY = window.innerHeight / 2;

      const offsetX = ((x - middleX) / middleX) * 45;
      const offsetY = ((y - middleY) / middleY) * 45;

      preElement.value.style.setProperty('--rotateX', offsetX + 'deg');
      preElement.value.style.setProperty('--rotateY', -1 * offsetY + 'deg');
    };

    onMounted(() => {
      document.addEventListener('mousemove', rotateElement);
    });

    onUnmounted(() => {
      document.removeEventListener('mousemove', rotateElement);
    });

    return {
      preElement,
    };
  },
};
</script>

<style scoped>
.box {
  min-block-size: 500px;
  display: flex;
  background: green;
}

.left {
    flex: 1;
}

.right {
    flex: 1;
}

.card {
  width: 200px;
  height: 200px;
  border-radius: 1rem;
  position: relative;

  transform-style: preserve-3d;
  transform: perspective(5000px) rotateY(var(--rotateX)) rotateX(var(--rotateY));
  background: red;
}
img {
    position: absolute;
    right: -10px;
}
</style>