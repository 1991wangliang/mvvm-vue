<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
      <div>
        <h1>{{ hello.name }}</h1>
        <button @click="hello.test()">test</button>
        <input type="text" v-model="hello.name" />
        <button @click="hello.hello()">button</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { initBean } from '@/views/HomeView.model'
const hello = initBean()
</script>
