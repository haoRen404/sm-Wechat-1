//获取应用实例
var  app = getApp()

Page({
  data: {
    PageCur: 'me', // 控制初始显示的页面
    userInfo: "",
    hasUserInfo: false,
  },
  onLoad: function () {
    // console.log("加载了index");
    var that = this;
    // 可以通过 wx.getSetting 先查询一下用户是否已经授权了
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo']) {// 存在用户信息
          console.log("用户已授权。存在用户信息1")
          // 在用户已授权的情况下调用此接口可成功获取用户信息。必须是在用户已经授权的情况下调用
          wx.getUserInfo({
            success: function(res) {
              console.log(res.userInfo);
              // 已经进行了授权，直接获取用户信息存到全局变量中，并把授权状态设置为true
              app.globalData.userInfo = res.userInfo;
              app.globalData.hasUserInfo = true;
              that.setData({ // 不能直接用this
                userInfo: app.globalData.userInfo,
                hasUserInfo: app.globalData.hasUserInfo,
              })
              console.log("全局:" + JSON.stringify(app.globalData.userInfo));
              console.log("全局:" + JSON.stringify(app.globalData.hasUserInfo));
            }
          })
        }
      }
    })
  },

  NavChange(e) {
    this.setData({
      PageCur: e.currentTarget.dataset.cur
    })
  },
  
  onShareAppMessage() {
    return {
      title: '桂工数模',
      imageUrl: '/images/share.jpg',
      path: '/pages/index/index'
    }
  },
})