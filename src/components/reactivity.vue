<script setup>
import {computed, ref} from 'vue'

defineProps({

})

const count = ref(1);
// const plusOne = computed(() => count.value +1)

const plusTwo = computed({
  get: () => count.value + 1,
  set: (val) => {
    count.value += val
  }
})

/*const plusthree = computed(() => count.value + 1, {
  onTrack(e) {
    debugger
  },
  onTrigger(e) {
    debugger
  }
})

console.log(plusthree.value)*/

</script>

<template>
  <div>
    Reactivity
    {{ plusTwo }}
    Html
    <button @click="() => {
      plusTwo = 1
    }">more</button>
  </div>
</template>