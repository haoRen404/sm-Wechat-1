// pages/organization/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    TabCur: 4,// 第几个tab
    tabNav:[{name:'关于我们'},{name:'发展历程'},{name:'指导老师'},{name:'成员名录'},{name:'联系我们'}],

    // 关于我们的data
    aboutTitle: "数学建模协会",
    aboutTable:[
      {information:[{ask:"创办时间"},{value:"2005年11月"}]},
      {information:[{ask:"中文名"},{value:"桂林理工大学数学建模协会"}]},
      {information:[{ask:"外文名"},{value:"Mathematical Modeling Association in Guilin University of Technology"}]},
      {information:[{ask:"中文简称"},{value:"桂工数模"}]},
      {information:[{ask:"英文简称"},{value:"GLUTSM"}]},
      {information:[{ask:"创办时间"},{value:"2005年11月"}]},
      {information:[{ask:"社团类型"},{value:"学术科技类"}]},
      {information:[{ask:"数模会训"},{value:"团结、奋进、务实、创新"}]},
      {information:[{ask:"宣传口号"},{value:"你因数模而成长，数模因你而不同"}]},
      {information:[{ask:"服务宗旨"},{value:"宣传数模、开展数模、强我数模"}]},
    ],

    // 成员目录的data
    historyList:[{
      "department": "秘书部",
      "people": [{
        "name": "李小米", "avatar":"/images/logo.png", "position":"部长", "college": "理学院", "class": "信科17-1班"
      },{
        "name": "王小军", "avatar":"/images/logo.png", "position":"干事", "college": "信息学院", "class": "软件17-2班"
      }]
    },{
      "department": "新媒体",
      "people": [{
        "name": "李小米", "avatar":"/images/logo.png", "position":"部长", "college": "理学院", "class": "信科17-1班"
      },{
        "name": "王小军", "avatar":"/images/logo.png", "position":"干事", "college": "信息学院", "class": "软件17-2班"
      }]
    }],
  },

  // 点击tab进行切换的方法
  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id
    })
    console.log('当前点击第' + this.data.TabCur + '个')
  },
  tabSelect2(e) {
    this.setData({
      TabCur2: e.currentTarget.dataset.id
    })
    console.log('当前点击第' + this.data.TabCur2 + '个')
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