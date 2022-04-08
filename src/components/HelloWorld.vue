<template>
  <div class="hello">
    <h1>{{ data.name }}</h1>
    <button @click="data.hello()">button</button>
  </div>
</template>

<script setup lang="ts">
import { helloWorld } from './helloWorld'

const data = helloWorld()
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
