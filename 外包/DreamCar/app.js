// app.js
// 应用
// page () 页面
// 花括号内表示传的配置
App({
  globalData: {
    
  },
  onLaunch() {
    // 利用生命周期，在应用启动时，发送接口请求
    // console.log('应用启动了');
    wx.request({
      url: 'https://resources.ninghao.net/wxapp-case/db.json',
      success: (response) => {
        // console.log(response);
        Object.assign(this.globalData, response.data)
        // console.log(this, '-----');
      }
    })
  }
})
