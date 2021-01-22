// pages/community/edit/edit.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    InputBottom: 50,//输入框距离底部的高度
    hiddenInput: true,// 隐藏输入框
    imgList: [],// 图片列表
    index: null,//分类中第几个
    picker: ['校园趣事', '学术交流', '数学求助', '寻物启事', '爱情树洞'],//分类列表
  },

  // 分类选择，点确定时修改index
  PickerChange(e) {
    console.log(e);
    this.setData({
      index: e.detail.value
    })
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
      InputBottom: 50,
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
  // 选择图片
  ChooseImage() {
    wx.chooseImage({
      count: 9, //默认9
      sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album'], //从相册选择
      success: (res) => {
        if (this.data.imgList.length != 0) {
          this.setData({
            imgList: this.data.imgList.concat(res.tempFilePaths)
          })
        } else {
          this.setData({
            imgList: res.tempFilePaths
          })
        }
      }
    });
  },
  // 查看图片
  ViewImage(e) {
    wx.previewImage({
      urls: this.data.imgList,
      current: e.currentTarget.dataset.url
    });
  },
  // 删除图片，弹出提示框
  DelImg(e) {
    wx.showModal({
      title: '删除确认',
      content: '确定要删除这个好看的头像吗？',
      cancelText: '取消',
      confirmText: '确认',
      success: res => {
        if (res.confirm) {
          this.data.imgList.splice(e.currentTarget.dataset.index, 1);
          this.setData({
            imgList: this.data.imgList
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