<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
      <div>
        <h1>{{ home.name }}</h1>
        <button @click="home.test()">test</button>
        <input type="text" v-model="home.name" />
        <button @click="home.hello()">hello</button>
        <button @click="hint()">hint</button>
        <button @click="reset()">reset</button>
        <button @click="dispose()">dispose</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { homeStore } from '@/store/home'

export default defineComponent({
  setup() {
    const home = homeStore()

    home.$subscribe((mutation, state) => {
      // store state监听
      console.log('mutation', mutation)
      console.log('state', state)
    })

    home.$onAction(({ name }) => {
      // store函数监听
      console.log('action name', name)
    })

    const hint = () => {
      // 自定义 getters
      alert(home.nameLength)
    }

    const reset = () => {
      // 重置数据
      home.$reset()
    }

    const dispose = () => {
      // 会让subscribe onAction 失效
      home.$dispose()
    }

    return {
      home,
      hint,
      reset,
      dispose
    }
  }
})

</script>
