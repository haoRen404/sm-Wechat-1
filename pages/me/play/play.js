// pages/me/play/play.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 是否隐藏modal
    modalName: true,
    // 活动数据
    ColorList: [{
      title: "数度比赛",
      describe: "惊心动魄的比赛，跳动的数字，沁人心脾"
    }]
  },

  // 显示modal
  showModal(e) {
    this.setData({
      modalName: !this.data.modalName
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