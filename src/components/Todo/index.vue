<script setup>
// Imports
import {ref} from 'vue'
import ListItems from './ListItems.vue'
import { useTask } from '../../stores/task'

const taskStore = useTask()

// Variables
const textWrite = ref('')

// Methods
const addTask = () => {
  taskStore.addTasking(textWrite.value)
  textWrite.value='';
}
</script>

<template>
  <div>
    <div>
      <input type="text" placeholder="Write something" v-model="textWrite"/>
      <button type="submit" @click="() => addTask()">Add to Todo</button>
    </div>

    <ListItems />

  </div>
</template>