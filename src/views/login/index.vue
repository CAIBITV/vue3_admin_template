<template>
  <div class="login_container">
    <el-row>
      <el-col :span="12" :xs="0" />
      <el-col :span="12" :xs="24">
        <el-form class="login_form">
          <h1>Hello</h1>
          <h2>欢迎来到硅谷甄选</h2>
          <el-form-item>
            <el-input :prefix-icon="User" v-model="formData.username" />
          </el-form-item>
          <el-form-item>
            <el-input
              :prefix-icon="Lock"
              type="password"
              v-model="formData.password"
              show-password
            />
          </el-form-item>
          <el-form-item>
            <el-button
              class="login_btn"
              type="primary"
              size="default"
              @click="login"
              :loading="loading"
            >
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
import { reactive, ref } from 'vue'

const formData = reactive({
  username: 'admin',
  password: '111111'
})

const loading = ref(false)

import { useUserStore } from '@/store/modules/user'
let userStore = useUserStore()

// 获取路由器
import { useRouter } from 'vue-router'
import { ElNotification } from 'element-plus'

const router = useRouter()

async function login() {
  //点击登录按钮以后干什么
  //通知仓库发起请求
  //请求成功->路由跳转
  //请求失败->弹出登陆失败信息
  try {
    loading.value = true
    // 保证登录成功
    await userStore.userLogin(formData)
    // 编程式导航
    ElNotification({
      title: '登录成功',
      message: '欢迎回来',
      type: 'success'
    })
    router.push('/')
  } catch (error: any) {
    ElNotification({
      title: '登录失败',
      message: error.message,
      type: 'error'
    })
  } finally {
    loading.value = false
  }
}
</script>

<style scoped lang="scss">
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
    .login_btn {
      width: 100%;
    }
  }
}
</style>
