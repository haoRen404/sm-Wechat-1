// pages/play/signInput/signInput.js

// 引入封装的js
import Canvas from '../../../utils/canvas.js'

Page({
  ...Canvas.options,// 引入封装的js里的options

  /**
   * 页面的初始数据
   */
  data: {
    ...Canvas.data,// 引入封装的js里的data数据
    isSign:false,// 是否已经签到
  },


  Sign(e) {
    wx.showModal({
      title: '信息确认提醒',
      content: '在提交签到之前请先确认个人信息是否正确哦！',
      cancelText: '取消',
      confirmText: '确认',
      success: res => {
        if (res.confirm) {
          // 调用动画执行函数。id：canvas画板id；percent：进度条百分比；time：画图动画执行的时间
          this.draw('runCanvas', 100,1000);
          this.setData({
            isSign: true
          })
        }
      }
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