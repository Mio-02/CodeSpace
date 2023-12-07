<template>
  <div>
    <div class="login">
      <div class="login-wrap">

        <div class="item">
          <span>账号：</span>
          <input type="text">
        </div>
        <div class="item">
          <span>密码：</span>
          <input type="text">
        </div>
        <div class="item">
          <button>登录</button>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    
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