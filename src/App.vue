<template>
  <div>
    <h1>测试Axios二次封装</h1>
  </div>
</template>

<script lang="ts" setup>
defineOptions({
  name: 'App'
})
import service from '@/utils/request'
import { onMounted } from 'vue'

onMounted(() => {
  service({
    url: '/user/login',
    method: 'post',
    data: {
      username: 'admin',
      password: '123'
    }
  }).then((res) => {
    console.log(res)
  })
})
</script>

<style scoped lang="scss">
div {
  h1 {
    color: $base-color;
  }
}
</style>
