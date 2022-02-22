<script setup>
import { useCounterStore } from '../stores/counter'
const counterStore = useCounterStore();

</script>

<template>
  <h1>Testing Counter With Vue-Router And Pinia</h1>
  <p>Counter: <b>{{ counterStore.count }}</b></p>
  <p>Number Of Change: <b>{{ counterStore.numberOfChange }}</b></p>

  <div class="d-flex">
    <button @click="counterStore.incrementBy(1)">+ 1</button>
    <button @click="counterStore.incrementBy(2)">+ 2</button>
    <button @click="counterStore.incrementBy(5)">+ 5</button>
  </div>
</template>

<style scoped lang="scss">
.d-flex {
  display: flex;
  & button {
      margin-right: 1rem
    }
}
</style>
