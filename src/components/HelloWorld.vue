<template>
  <div>
    <h1>{{ hello.name }}</h1>
    <button @click="hello.test()">test</button>
    <input type="text" v-model="hello.name" />
    <button @click="hello.hello()">button</button>
  </div>
</template>

<script setup lang="ts">
import { initBean } from './helloWorld'
const hello = initBean()
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
