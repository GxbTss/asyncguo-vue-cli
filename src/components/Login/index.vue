<template>
    <div class='login'>
      <div class="login-box">
        <h3>基于vue的后台管理系统</h3>
        <el-form ref="loginInfo" :model="loginInfo" :rules="rules" size="small" class="login-info">
          <el-form-item prop="name">
            <el-input v-model="loginInfo.name" placeholder="用户名"></el-input>
          </el-form-item>
          <el-form-item prop="pass">
            <el-input v-model="loginInfo.pass" type="password" placeholder="密码"></el-input>
          </el-form-item>
          <el-form-item class="login-info-sub">
            <el-button type="primary" @click="submitInfo('loginInfo')">登录</el-button>
            <el-button @click="resetInfo('loginInfo')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>

    </div>
</template>

<script>
  export default {
    components: {},
    data () {
      return {
        loginInfo: {
          name: '',
          pass: ''
        },
        rules: {
          name: [{
            required: true, message: '请输入用户名', trigger: 'blur'
          }],
          pass: [{
            required: true, message: '请输入密码', trigger: 'blur'
          }]
        }
      }
    },
    computed: {},
    methods: {
      submitInfo (formName) {
        if (this.loginInfo.name === '' || this.loginInfo.pass === '') {
          this.$message.warning('请输入账号和密码，再进行登录！')
        }
      },
      resetInfo (formName) {
        this.$refs[formName].resetFields()
      }
    },
    created () {
    }
  }
</script>

<style lang="less" scoped>
    @import "./../../common/styles/mixins.less";
    .login{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100vh;
      overflow: hidden;
      background-color: #00b1b3;
      &-box{
        margin-top: -30px;
        text-align: center;
        h3{
          width: 330px;
          margin-bottom: 16px;
          font-size: 18px;
          color: #fff;
        }
      }
      &-info{
        padding: 30px 20px 10px 20px;
        background-color: #fff;
        border-radius: 6px;
        box-shadow: 5px 5px 8px rgba(0, 0, 0, .3);
        &-sub{
          margin-top: 30px;
        }
      }
    }
</style>
