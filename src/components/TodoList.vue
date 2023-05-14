<template>
    <div>
        <h2>Todo List</h2>
        <div v-for="task in tasks" :key="task.id">
            <ToDoItem :task="task"/>            
        </div>
    </div>    
    
</template>
<script setup>

import { defineProps } from 'vue';
import ToDoItem from "../components/ToDoItem.vue" 
const props = defineProps({
    tasks: Array,
})

</script>