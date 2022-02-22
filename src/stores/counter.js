import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => {
    return {
      count: 0,
      numberOfChange: 0,
    }
  },

  actions: {
    incrementBy( value ) {
      this.count += value;
      this.numberOfChange += 1;
    }
  }
})