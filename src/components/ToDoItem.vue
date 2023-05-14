<script setup>
    import { defineProps, defineEmits } from 'vue';

    const props = defineProps({
        task: Object
    })
    // const emit = defineEmits(['done'])
    function done() {
        console.log(this.task)
    }

</script>
<template>
    <div>
        <h3 :class="{isDone: task.complated}">
            <input type="checkbox" @change="done">
            {{ task.title }}
        </h3>
    </div>
</template>

<style scoped>
    .isDone {
        text-decoration: line-through;
    }
</style>