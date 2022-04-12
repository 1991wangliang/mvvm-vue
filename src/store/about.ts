// @ts-check
import { defineStore } from 'pinia'
import { homeStore } from '@/store/home'

export const aboutStore = defineStore({
  id: 'about',
  state: () => ({
    name: 'lorne'
  }),
  actions: {
    hello() {
      this.$patch({
        name: 'hello'
      })
    },
    test() {
      const home = homeStore()
      this.name = home.name
    }
  }
})
