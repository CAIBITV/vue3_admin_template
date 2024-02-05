<template>
  <div class="box">
    <h1>SVG测试</h1>
    <!-- 测试SVG图标的使用 -->
    <!-- svg:图标外层容器节点内部需要与use标签结合使用 -->
    <svg style="height: 30px; height: 30px">
      <!-- xlink:href 选择用哪个图标，属性只务必是以#icon-图标名字 -->
      <!-- fill:填充颜色 -->
      <use xlink:href="#icon-shop" fill="yellow"></use>
    </svg>
  </div>
</template>

<script lang="ts" setup>
defineOptions({
  name: 'App'
})
</script>

<style scoped lang="scss"></style>
