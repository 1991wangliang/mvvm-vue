<template>
  <div class="about">
    <h1>{{about.name}}</h1>
    <button @click="about.test">test</button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { aboutStore } from '@/store/about'

export default defineComponent({
  setup() {
    // 夸界面传递数据
    const about = aboutStore()
    return {
      about
    }
  }
})

</script>
