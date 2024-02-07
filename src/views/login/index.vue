<template>
  <div class="login_container">
    <el-row>
      <el-col :span="12" :xs="0" />
      <el-col :span="12" :xs="24">
        <el-form class="login_form" label-width="100px">
          <h1>Hello</h1>
          <h2>欢迎来到硅谷甄选</h2>
          <el-form-item class="login_form_item" label="用户名">
            <el-input :prefix-icon="User" v-model="formData.username" />
          </el-form-item>
          <el-form-item class="login_form_item" label="密码">
            <el-input
              :prefix-icon="Lock"
              type="password"
              v-model="formData.password"
              show-password
            />
          </el-form-item>
          <el-form-item>
            <el-button class="login_btn" type="primary" size="default">
              登录
            </el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'login'
})
import { User, Lock } from '@element-plus/icons-vue'
import { reactive } from 'vue'

const formData = reactive({
  username: 'admin',
  password: '111111'
})
</script>

<!-- 注意取出了 scoped -->
<style lang="scss">
.login_container {
  width: 100%;
  // 100vh 为视口高度
  height: 100vh;
  // background-color: $base-color;
  background: url('@/assets/images/background.jpg') no-repeat;
  background-size: cover;
  .login_form {
    position: relative;
    width: 80%;
    top: 30vh;
    background: url('@/assets/images/login_form.png') no-repeat;
    background-size: cover;
    padding: 40px;
    h1 {
      font-size: 40px;
      color: #fff;
    }
    h2 {
      font-size: 30px;
      color: #fff;
      margin: 20px 0px;
    }
    // 这里修改了el-form-item的label的颜色，但这个组件是element-plus提供的，所以需要去掉 scoped
    .login_form_item .el-form-item__label {
      color: #fba904;
    }
    .login_btn {
      width: 100%;
    }
  }
}
</style>
