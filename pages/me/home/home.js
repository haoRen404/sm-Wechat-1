// pages/me/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    avatar: "https://hbimg.huabanimg.com/8a9d13d7ed72acd7a34b0c0f2bb3d79080c362d8af2d-OF5pWW_fw658/format/webp",// 头像链接
    isAdmin: true,// 是否是管理员
    imgList: [],// 图片列表
  },

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

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

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