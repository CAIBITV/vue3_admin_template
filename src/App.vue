<template>
  <div class="box">
    <h1>Welcome to your Vue 3 App!</h1>
    <p>Start building your awesome application here.</p>
    <el-button type="primary" :icon="Plus">Hello, Element!</el-button>
    <el-button type="success" :icon="Edit">Hello, Element!</el-button>
    <el-pagination
      v-model:current-page="currentPage1"
      :page-size="100"
      :small="small"
      :disabled="disabled"
      :background="background"
      layout="total, prev, pager, next"
      :total="1000"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
    <Test />
  </div>
</template>

<script lang="ts" setup>
defineOptions({
  name: 'App',
})

import Test from '@/components/Test.vue'

import { Plus, Edit } from '@element-plus/icons-vue'

import { ref } from 'vue'

const currentPage1 = ref(5)
const small = ref(false)
const background = ref(false)
const disabled = ref(false)

const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`)
}
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
