<template>
  <div>
    <li v-for="(item, indx) in listTaskStore" :key="indx">
      <div>
        {{ indx + 1}}
        <span>{{ item }}</span>
        {{' '}}
        <button @click="() => removeTask(indx)">close</button>
      </div>
    </li>
  </div>
</template>

<script setup>
import { useTask } from '../../stores/task'

const taskStore = useTask();
const listTaskStore = taskStore.listTask

const removeTask = (id) => {
  taskStore.removeTasking(id)
}
</script>