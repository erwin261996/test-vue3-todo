<template>
  <div>
    <ul>
      <Items />
    </ul>
  </div>
</template>

<script setup>
import { useTask } from '../../stores/task'
import Items from './Item.vue'

const taskStore = useTask();
const listTaskStore = taskStore.listTask
</script>