<template>
  <div>
    <div class="login">
      <div class="login-wrap">

        <div class="item">
          <span>账号：</span>
          <input type="text" v-model="account">
        </div>
        <div class="item">
          <span>密码：</span>
          <input type="text" v-model="password">
        </div>
        <div class="item">
          <button @click="login">登录</button>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        account: '',
        password: ''
      }
    },
    methods: {
      login() {
        // 获取用户输入的账号密码 再发起请求传给后端
        // console.log(this.account, this.password);
        if (this.account === '' || this.password === '') {
          alert('账号或密码不能为空')
          return
        }

        // console.log(this.$router);
        // 用js控制路由的跳转
        // this.$router.push(`/home/${this.account}`) // 写法一
        // this.$router.push({path: '/home', query: {username: this.account}}) // 写法二
        // this.$router.push({name: 'home', params: {username: this.account}}) // 写法三
        this.$router.push({path: '/home', hash: `#${this.account}`}) // 写法四
      }
    }
  }
</script>

<style lang="less" scoped>
  .login{
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #aaa;
    .login-wrap{
      width: 400px;
      height: 300px;
      background: #fff;
      border-radius: 10px;
      box-shadow: 0 0 10px #fff;
      padding: 20px;
      // box-sizing: border-box;
      font-size: 30px;
      .item{
        display: flex;
        margin-top: 30px;
        input{
          flex: 1;
          padding: 0 10px;
          font-size: 20px;
        }
        button{
          font-size: 26px;
          flex: 1;
          border-radius: 1000px;
          border: none;
          background-color: rgb(13, 178, 243);
          color: #fff;
          padding: 5px 0;
          cursor: pointer;
        }
      }
    }
  }
</style>