// component/index/meIndex/meIndex.js
//获取应用实例
const app = getApp();

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    //接收父组件传过来的值
    userInfo: {// 用户信息
      type: Object,
      value: ""
    },
    hasUserInfo: {// 是否进行了授权
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的生命周期
   */
  lifetimes: {
    attached: function() {
      // 在组件实例进入页面节点树时执行
      var that = this;
    },
    detached: function() {
      // 在组件实例被从页面节点树移除时执行
    },
    ready: function() {
      // 
    },
  },

  /**
   * 组件所在页面的生命周期
   */
  pageLifetimes: {
    show: function() {
      // 页面被展示
      // console.log("啊啊啊");
      // this.setData ({
      //   userInfo: app.globalData.userInfo,// 用户信息
      //   hasUserInfo: app.globalData.hasUserInfo,// 是否进行了授权
      // })
      // console.log("this.userInfo = " + this.userInfo)
      // console.log("this.hasUserInfo = " + this.hasUserInfo)
    },
    hide: function() {
      // 页面被隐藏
    },
    resize: function(size) {
      // 页面尺寸变化
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    avatar: "https://hbimg.huabanimg.com/8a9d13d7ed72acd7a34b0c0f2bb3d79080c362d8af2d-OF5pWW_fw658/format/webp",// 头像链接
    isAdmin: true,// 是否是管理员
    imgList: [],// 图片列表
    // userInfo: app.globalData.userInfo,// 用户信息
    // hasUserInfo: app.globalData.hasUserInfo,// 是否进行了授权
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 点击按钮获取用户的授权信息
    auth(e) {
      var that = this;
      console.log("授权信息：" + JSON.stringify(e.detail.userInfo))
      if( !e.detail.userInfo ) {
        wx.showToast({
          title: '已取消授权',
          icon: 'none',
          duration: 2000
        })
        return;// 结束执行
      }

      wx.login({
        success (res) {
          if (res.code) {
            // 发起网络请求
            wx.request({
              // 这个url是natapp内网穿透得到的域名，后面加上请求路径
              url: app.globalData.natappUrl + '/login',
              method: "POST",
              // data: JSON.stringify({ // 转不转json都可
              data: {
                code: res.code,
                userInfo : JSON.stringify(e.detail.userInfo)
              },
              success(res) {
                if(res.data.code != 200){
                  wx.showToast({
                    title: '登录失败',
                    icon: 'none',
                    duration: 2000
                  })
                  return;
                }
                console.log("登录 = " + JSON.stringify(res.data));
                // 数据存入全局变量
                app.globalData.userInfo = e.detail.user
                app.globalData.hasUserInfo = true //
                app.globalData.token = e.detail.token
                that.setData({
                  userInfo: app.globalData.userInfo,
                  hasUserInfo: app.globalData.hasUserInfo
                });
              },
              fail(res) {
                console.log("访问失败")
              }
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
  }
})
