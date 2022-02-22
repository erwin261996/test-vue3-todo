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
    <button @click="counterStore.resetBy()">Reset</button>
  </div>
</template>

<style scoped lang="scss">
.d-flex {
  display: flex;
  & button {
    margin-right: 1rem;
    padding: 10px;
    border: 1px solid dodgerblue;
    background-color: dodgerblue;
    color: #FFF;
    border-radius: 0.4rem;
    transition: all .3s ease;
    cursor: pointer;
    box-shadow: 2px 2px 10px #b9b9b9;
    &:hover {
      background-color: deepskyblue;
    }
  }
}
</style>
