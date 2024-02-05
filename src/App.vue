<template>
  <div class="box">
    <h1>Welcome to your Vue 3 App!</h1>
    <p>Start building your awesome application here.</p>
  </div>
</template>

<script lang="ts" setup>
defineOptions({
  name: 'App',
})
const str = 'Hello, Vue 3!'
</script>

<style scoped lang="scss">
.box {
  width: 600px;
  height: 400pox;
  background-color: black;
  h1 {
    color: white;
  }
}
</style>
