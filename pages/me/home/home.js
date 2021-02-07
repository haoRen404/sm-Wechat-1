// pages/me/home/home.js
//获取应用实例
var  app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    avatar: "https://hbimg.huabanimg.com/8a9d13d7ed72acd7a34b0c0f2bb3d79080c362d8af2d-OF5pWW_fw658/format/webp",// 头像链接
    isAdmin: true,// 是否是管理员
    imgList: [],// 图片列表
    userInfo: app.globalData.userInfo,// 用户信息
    hasUserInfo: app.globalData.hasUserInfo,// 是否进行了授权
  },

  // attached: function(){
  //   console.log("组件挂载了……")
  // }, 

  // 获取用户的授权信息
  // getUserInfo: function(e) {
  auth(e) {
    console.log("授权信息：" + JSON.stringify(e.detail.userInfo))
    // 数据存入全局变量
    app.globalData.userInfo = e.detail.userInfo
    app.globalData.hasUserInfo = true
    this.setData({
      userInfo: app.globalData.userInfo,
      hasUserInfo: app.globalData.hasUserInfo
    });

    wx.login({
      success (res) {
        console.log("code：" + res.code)
        if (res.code) {
          //发起网络请求
          wx.request({
            // 这个url是natapp内网穿透得到的域名，后面加上请求路径
            url: 'http://akhjq3.natappfree.cc/login',
            method: "POST",
            data: JSON.stringify({ 
              code: res.code
            }),
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
  },

  // postTest(e){
  //   console.log("点击了")
  //   wx.request({
  //     url: 'http://rfnyad.natappfree.cc/login', //仅为示例，并非真实的接口地址
  //     method: "POST",
  //     data: {
  //       username: 'yaodan',
  //       password: '123456'
  //     },
  //     success (res) {
  //       console.log("输出：" + JSON.stringify(res.data))
  //     }
  //   })
  // },

  // 退出确认
  Exit(e) {
    wx.showModal({
      title: '退出确认',
      content: '你真的要走了吗？',
      cancelText: '取消',
      confirmText: '确认',
      success: res => {
        if (res.confirm) {
          console.log("退出成功！")
        }
      }
    })
  },

  // 查看图片
  ViewImage(e) {
    wx.previewImage({
      urls: this.data.imgList,
      current: e.currentTarget.dataset.url
    });
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("加载好了");
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("渲染好了")
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("页面显示了")
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("页面隐藏了")
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("页面卸载了")
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})