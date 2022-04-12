// @ts-check
import { defineStore } from 'pinia'

export const homeStore = defineStore({
  id: 'home',
  state: () => ({
    name: 'lorne'
  }),
  getters: {
    nameLength: (state):number => {
      return state.name.length
    }
  },
  actions: {
    hello() {
      this.$patch({
        name: 'hello'
      })
    },
    test() {
      this.name = 'hello'
    }
  }
})
