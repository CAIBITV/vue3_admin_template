<template>
  <div>
    <svg :style="{ width, height }">
      <!-- xlink:href 选择用哪个图标，属性只务必是以#icon-图标名字 -->
      <!-- fill:填充颜色 -->
      <use :xlink:href="prefix + name" :fill="color"></use>
    </svg>
  </div>
</template>

<script lang="ts" setup>
defineOptions({
  name: 'SvgIcon'
})

defineProps({
  // xlink:href 属性值前缀
  prefix: {
    type: String,
    default: '#icon-'
  },
  // 图标名字
  name: String,
  // 接受父组件传递颜色
  color: {
    type: String,
    default: 'black'
  },
  // 接收父组件传递的图标宽度
  width: {
    type: String,
    default: '30px'
  },
  // 接收父组件传递的图标高度
  height: {
    type: String,
    default: '30px'
  }
})
</script>

<style scoped lang="scss"></style>
