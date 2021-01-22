// pages/community/comments/comments.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    InputBottom: 0,//输入框距离底部的高度
    hiddenInput: true,// 隐藏输入框
  },

  // 输入框聚焦时
  InputFocus(e) {
    this.setData({
      InputBottom: e.detail.height
    })
  },
  // 输入框失去焦点时
  InputBlur(e) {
    this.setData({
      InputBottom: 0,
      hiddenInput: true,
    })
    console.log(this.data.hiddenInput)
  },
  // 显示输入框
  ShowInput(){
    this.setData({
      hiddenInput: false,
    })
    console.log(this.data.hiddenInput)
  },
  // 隐藏输入框
  hiddenInput(){
    this.setData({
      hiddenInput: true,
    })
    console.log(this.data.hiddenInput)
  },


  // 跳转回复页面
  goReply(){
    wx.navigateTo({
      url: '/pages/community/reply/reply'
     })
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