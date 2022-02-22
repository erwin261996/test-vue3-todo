import {defineStore} from 'pinia'

export const useTask = defineStore('task', {

  state: () => {
    return {
      listTask: []
    }
  },

  actions: {
    addTasking(name) {
      this.listTask.push(name);
    },
    removeTasking(id) {
      this.listTask.splice(id, 1);
    },
  }
})