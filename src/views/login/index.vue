<template>
  <div class="login_container">
    <el-row>
      <el-col :span="12" :xs="0" />
      <el-col :span="12" :xs="24">
        <el-form
          class="login_form"
          :model="loginForm"
          :rules="rules"
          ref="loginFormRef"
        >
          <h1>Hello</h1>
          <h2>欢迎来到硅谷甄选</h2>
          <el-form-item prop="username">
            <el-input :prefix-icon="User" v-model="loginForm.username" />
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              :prefix-icon="Lock"
              type="password"
              v-model="loginForm.password"
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
import type { FormInstance, FormRules } from 'element-plus'

interface LoginForm {
  username: string
  password: string
}

const loginFormRef = ref<FormInstance>()
const loginForm = reactive<LoginForm>({
  username: 'admin',
  password: '111111'
})
const rules = reactive<FormRules<LoginForm>>({
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' }
  ]
})

const loading = ref(false)

import { useUserStore } from '@/store/modules/user'
let userStore = useUserStore()

// 获取路由器
import { useRouter } from 'vue-router'
import { ElNotification } from 'element-plus'

const router = useRouter()

import { getTime } from '@/utils/time'

// 保证所有的表单项目验证通过再发送请求
/* const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
} */

async function login() {
  await loginFormRef.value!.validate()
  //点击登录按钮以后干什么
  //通知仓库发起请求
  //请求成功->路由跳转
  //请求失败->弹出登陆失败信息
  try {
    loading.value = true
    // 保证登录成功
    await userStore.userLogin(loginForm)
    // 编程式导航
    ElNotification({
      title: `HI,${getTime()}好`,
      message: '欢迎回来!',
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
