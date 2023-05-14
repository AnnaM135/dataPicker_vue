<template>
  <div class="circular-progress-bar">
    <svg class="svg">
      <circle
        class="background"
        :stroke-width="strokeWidth"
        :r="radius"
        :cx="center"
        :cy="center"
      />
      <circle
        class="progress"
        :stroke-width="strokeWidth"
        :stroke-dasharray="circumference"
        :stroke-dashoffset="circumference - progressOffset"
        :r="radius"
        :cx="center"
        :cy="center"
        stroke-linecap="round"
      />
    </svg>
    <div class="value">{{ currentProgress }}/L.</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radius: 62,
      strokeWidth: 20,
      center: 72,
      circumference: 2 * Math.PI * 50,
      progress: 100,
      progressOffset: 0,
      currentProgress: 0,
      progressDuration: 100,
      progressInterval: null,
    };
  },
  mounted() {
    this.animateProgress();
  },
  methods: {
    animateProgress() {
        const progressStep = 10;
        this.progressInterval = setInterval(() => {
            if(this.currentProgress === this.progress) {
                clearInterval(this.progressInterval);
            } else {
                this.currentProgress += progressStep;
                this.progressOffset = (this.circumference / 100) * (100 - (this.currentProgress - 80));
            }
        }, this.progressDuration)
    },
  },
};
</script>

<style scoped>
.circular-progress-bar {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 144px;
  height: 144px;
  border-radius: 34px;
  overflow: hidden;
}

.svg {
  width: 100%;
  height: 100%;
  transform: rotate(155deg);
}

.background {
  stroke: #F4F5F9;
  fill: transparent;
}

.progress {
  stroke: #08D110;
  fill: transparent;
  transition: 1s ease;
}

.value {
  position: absolute;
  font-size: 18px;
  font-weight: bold;
  color: #08D110;;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
