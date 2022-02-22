<template>
  <div>
    Counter: <b>{{ counterStore.count }}</b>
  </div>
</template>

<script setup>
  import { useCounterStore } from '../stores/counter'
  const counterStore = useCounterStore()

</script>