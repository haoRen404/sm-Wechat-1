// pages/play/publish/publish.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabTitle: [{title: "发布活动"}, {title: "发布报名"}, {title: "发布签到"}],
    TabCur: 0,
    scrollLeft:0,
    date1: '2020-01-20',
    time1: '12:00',
    date2: '2020-01-25',
    time2: '12:01',
    imgList: [],// 图片列表
    date3: '2020-01-21',
    time3: '12:02',
    date4: '2020-01-22',
    time4: '12:03',
    getAdd: false,//是否获取地址
  },

  // 顶部导航
  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id-1)*60
    })
  },
  // 时间1的日期、时间选择
  DateChange1(e) {
    this.setData({
      date1: e.detail.value
    })
  },
  TimeChange1(e) {
    this.setData({
      time1: e.detail.value
    })
  },
  // 时间2的日期时间选择
  DateChange2(e) {
    this.setData({
      date2: e.detail.value
    })
  },
  TimeChange2(e) {
    this.setData({
      time2: e.detail.value
    })
  },
  // 时间3的日期时间选择
  DateChange3(e) {
    this.setData({
      date3: e.detail.value
    })
  },
  TimeChange3(e) {
    this.setData({
      time3: e.detail.value
    })
  },
  // 时间4的日期时间选择
  DateChange4(e) {
    this.setData({
      date4: e.detail.value
    })
  },
  TimeChange3(e) {
    this.setData({
      time4: e.detail.value
    })
  },
  // 选择图片
  ChooseImage() {
    wx.chooseImage({
      count: 1, //默认9
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
  // 删除图片
  DelImg(e) {
    wx.showModal({
      title: '删除确认',
      content: '确定要删除这张好看的图片吗？',
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
  // 更改是否获取位置
  setAdd(e){
    this.setData({
      getAdd: !this.data.getAdd,
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