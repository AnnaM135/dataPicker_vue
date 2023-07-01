<script setup>
import HelloWorld from "../components/HelloWorld.vue";
import TodoList from "../components/TodoList.vue";
import Test from "../components/Test.vue";
import ProgressComponent from "../components/ProgressComponent.vue"
import LineChartComponent from "../components/LineChartComponent.vue"
import AnimationCard from "../components/AnimationCard.vue"
import MarqueeSlider from "../components/MarqueeSlider.vue"
import { ref } from 'vue'

const tasks = ref([
  {
    id: 1,
    title: "task 1",
    complated: false
  },
  {
    id: 2,
    title: "task 2",
    complated: true
  },
  {
    id: 3,
    title: "task 3",
    complated: false
  }
])


</script>
<template>
  <main>
    <h1>This is an home page</h1>
    <HelloWorld />
    <TodoList :tasks="tasks"/>
    <div style="margin-top: 50px"></div>
    <Test />
    <div style="margin-top: 50px"></div>
    <ProgressComponent />
    <div style="margin-top: 50px"></div>
    <!-- <LineChartComponent /> -->
    <!-- <AnimationCard /> -->

    <MarqueeSlider />
  </main>
</template>

